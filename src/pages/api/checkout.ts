import type { APIRoute } from 'astro'
import { z } from 'zod'
import { MEMBERSHIP_TIERS } from '../../lib/catalog'

const CheckoutSchema = z.object({
  tier: z.string().min(1).max(60),
  email: z.string().email().max(200),
  cadence: z.enum(['monthly', 'yearly']).default('monthly'),
})

export const POST: APIRoute = async ({ request, redirect }) => {
  const contentType = request.headers.get('content-type') ?? ''
  let payload: unknown
  try {
    if (contentType.includes('application/json')) payload = await request.json()
    else { const f = await request.formData(); payload = Object.fromEntries(f.entries()) }
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400, headers: { 'content-type': 'application/json' } })
  }
  const parsed = CheckoutSchema.safeParse(payload)
  if (!parsed.success) return new Response(JSON.stringify({ error: 'Validation failed' }), { status: 400, headers: { 'content-type': 'application/json' } })

  const tier = MEMBERSHIP_TIERS.find((t) => t.slug === parsed.data.tier)
  if (!tier) return new Response(JSON.stringify({ error: 'Unknown tier' }), { status: 404, headers: { 'content-type': 'application/json' } })

  console.log('[membership-checkout-demo] intent:', tier.slug, parsed.data.cadence, parsed.data.email)
  return redirect(`/membership?demo_checkout=1&tier=${tier.slug}`, 302)
}
