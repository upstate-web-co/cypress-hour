/**
 * Cypress Hour — site configuration.
 * Direction C (Rule 73 picked from 3 candidates, kickoff governance pre-pass):
 * Bold Expressive — Druk Wide Bold + Geist Sans (substituted with
 * Archivo Black + Inter for the free-Google-Fonts demo build).
 * Palette: Post-Corporate Creator — #5B21B6 true purple + #FB7185 sunset coral
 * over warm bone-white #FBF7F4.
 * Layout: Vertical-Mobile-First Single-Column with Strong Type Hierarchy
 * (mobile = primary; desktop = the same column, centered, with marginalia).
 * Motion: G — Immersive Narrative (long scroll-led reveals; no parallax tricks;
 * the page reads top-to-bottom like a transcript).
 * Anti: NOT bro-podcast. NOT Substack-house-style. NOT NPR-corporate.
 * NOT generic-podcast (no "Listen to the latest episode" hero H1).
 * NOT Tumblr-core (the era is wrong).
 *
 * Marketing Exec brief informed copy + voice + CTAs:
 * - Voice: Stratechery × Acquired — long-form, considered, dry-humor.
 *   Sentences finish. Em-dashes welcome.
 * - CTAs: "Browse the archive" / "Read the transcript" / "Become a member"
 *   / "Sponsor a read"
 * - Banned: "Subscribe Now", "Join the Community", "Explore Episodes",
 *   "Listen to the latest episode", "Welcome to the show"
 * - Pull quotes: "Quit something serious — stayed to talk about it.",
 *   "The decision, not the highlight reel.", "Transcripts included. No filler."
 */

export const SITE = {
  name: 'Cypress Hour',
  tagline: 'Long conversations with people who walked away from the thing they built.',
  description:
    'A solo-host weekly podcast — 200+ episodes of long conversations with people who quit something serious. Founders, executives, athletes, artists. The decision, not the highlight reel. Transcripts included. No filler.',
  url: 'https://cypress-hour.upstate-web.com',
  email: 'host@cypress-hour.upstate-web.com',
  postalAddress: {
    streetAddress: '',
    addressLocality: '',
    addressRegion: '',
    postalCode: '',
    addressCountry: 'US',
  },
  geo: { latitude: '40.7128', longitude: '-74.0060' },
  openingHours: [] as { dayOfWeek: string[]; opens: string; closes: string }[],
  sameAs: [] as string[],
  priceRange: '$$',
  paymentAccepted: ['Credit Card'] as string[],
  currenciesAccepted: 'USD',
  apple: 'https://podcasts.apple.com/cypress-hour-stub',
  spotify: 'https://open.spotify.com/show/cypress-hour-stub',
  rss: 'https://cypress-hour.upstate-web.com/feed.xml',
  twitter: 'https://twitter.com/cypress-hour-stub',
  indexable: false,
  isDemo: true,
} as const

export const BRAND = {
  purple: '#5B21B6',
  purpleDeep: '#3D1281',
  purpleSoft: '#7C3AED',
  coral: '#FB7185',
  coralDeep: '#E11D48',
  bone: '#FBF7F4',
  boneDeep: '#F0E9E1',
  ink: '#0F0A1F',
  inkSoft: '#2D1B4E',
  stone: '#6B5E7A',
  line: '#E5DCD3',
  lineStrong: '#B8AAB8',
} as const

export const SHOW = {
  episodes: 207,
  weeklyListeners: 38_500, // 30-50K range, anchored mid
  yearsRunning: 4,
  averageEpisodeMinutes: 92,
  paidMembers: 1_440,
  paidTierMonthly: 8,
  archiveLifetime: 40,
  topGuestExits: ['founder walkaway', 'executive severance', 'athlete retirement', 'artist stop'] as const,
} as const

export const ERRORS = {
  VALIDATION_ERROR: { status: 400, message: 'Validation failed' },
  NOT_FOUND: { status: 404, message: 'Resource not found' },
  UNAUTHORIZED: { status: 401, message: 'Unauthorized' },
  CHAT_FAILED: { status: 500, message: 'The archive assistant is briefly unavailable' },
  CHECKOUT_FAILED: { status: 500, message: 'Membership signup is briefly unavailable' },
  SUBSCRIBE_FAILED: { status: 500, message: 'Could not record your email' },
} as const
