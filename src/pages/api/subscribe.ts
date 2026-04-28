import type { APIRoute } from 'astro'
import { z } from 'zod'

const SubscribeSchema = z.object({ email: z.string().email().max(200) })

export const POST: APIRoute = async ({ request }) => {
  let body: unknown
  try { body = await request.json() } catch { return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 }) }
  const parsed = SubscribeSchema.safeParse(body)
  if (!parsed.success) return new Response(JSON.stringify({ error: 'Please enter a valid email' }), { status: 400 })
  console.log('[subscribe-demo] received:', parsed.data.email)
  return new Response(JSON.stringify({ ok: true, demo: true }), { status: 200, headers: { 'content-type': 'application/json' } })
}
