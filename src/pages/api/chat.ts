import type { APIRoute } from 'astro'
import { z } from 'zod'
import { generateText } from '../../lib/ai'
import { buildSystemPrompt } from '../../lib/business-knowledge'

const ChatRequestSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string().min(1).max(2000),
  })).min(1).max(20),
})

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as { runtime?: { env?: { ANTHROPIC_API_KEY?: string } } }).runtime?.env
  const apiKey = env?.ANTHROPIC_API_KEY
  if (!apiKey) return new Response(JSON.stringify({ error: 'Chat is not configured' }), { status: 503, headers: { 'content-type': 'application/json' } })

  let body: unknown
  try { body = await request.json() } catch { return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: { 'content-type': 'application/json' } }) }
  const parsed = ChatRequestSchema.safeParse(body)
  if (!parsed.success) return new Response(JSON.stringify({ error: 'Validation failed' }), { status: 400, headers: { 'content-type': 'application/json' } })

  const messages = parsed.data.messages
  const lastUser = [...messages].reverse().find((m) => m.role === 'user')
  if (!lastUser) return new Response(JSON.stringify({ error: 'No user message' }), { status: 400, headers: { 'content-type': 'application/json' } })

  const priorTurns = messages.slice(0, -1).map((m) => `${m.role === 'user' ? 'Prospect' : 'Halverstone'}: ${m.content}`).join('\n\n')
  const userPrompt = priorTurns ? `Prior conversation:\n${priorTurns}\n\nProspect's latest:\n${lastUser.content}` : lastUser.content

  try {
    const reply = await generateText(apiKey, { system: buildSystemPrompt(), prompt: userPrompt, maxTokens: 700 })
    return new Response(JSON.stringify({ reply: reply.trim() }), { status: 200, headers: { 'content-type': 'application/json' } })
  } catch (err) {
    console.error('[chat] error:', err)
    return new Response(JSON.stringify({ error: 'Chat is briefly unavailable' }), { status: 500, headers: { 'content-type': 'application/json' } })
  }
}
