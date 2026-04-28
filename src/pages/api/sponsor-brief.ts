import type { APIRoute } from 'astro'
import { z } from 'zod'

const SponsorBriefSchema = z.object({
  company: z.string().min(1).max(120),
  product: z.string().min(1).max(120),
  message: z.string().min(10).max(350),
  tier: z.enum(['pre-roll', 'mid-roll', 'post-roll', 'dedicated-segment']),
  email: z.string().email().max(200),
})

export const POST: APIRoute = async ({ request, redirect }) => {
  const contentType = request.headers.get('content-type') ?? ''
  let payload: unknown
  try {
    if (contentType.includes('application/json')) payload = await request.json()
    else { const f = await request.formData(); payload = Object.fromEntries(f.entries()) }
  } catch {
    return redirect('/sponsor?error=invalid', 302)
  }
  const parsed = SponsorBriefSchema.safeParse(payload)
  if (!parsed.success) return redirect('/sponsor?error=validation', 302)

  console.log('[sponsor-brief-demo] from:', parsed.data.email, 'company:', parsed.data.company, 'tier:', parsed.data.tier)
  if (contentType.includes('application/json')) {
    return new Response(JSON.stringify({ ok: true, demo: true }), { status: 200, headers: { 'content-type': 'application/json' } })
  }
  return redirect('/sponsor?submitted=1', 302)
}
