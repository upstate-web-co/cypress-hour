/**
 * Cypress Hour catalog (illustrative — portfolio demo).
 * Episodes + sponsorship rate card + membership tiers + journal essays.
 * Per Rule 47, every guest, company, dollar figure, and quote is illustrative.
 *
 * Voice rules from Marketing Exec brief (Section 5):
 * - Episode titles state the choice, not the topic
 *   ("The day I stopped funding my own startup", not "Founder Talk: Burnout")
 * - Guest bios ≤ 100 words, focused on the choice
 * - No "Listen now" verb spam — "Read the transcript" is the action
 */

export interface Episode {
  slug: string
  number: number
  title: string
  guest: string
  guestBio: string // ≤100 words, choice-focused
  exitType: 'founder walkaway' | 'executive severance' | 'athlete retirement' | 'artist stop' | 'academic exit' | 'public-service exit'
  industryBefore: string
  year: number
  publishedAt: string
  durationMin: number
  pullQuote: string
  chapters: { time: string; label: string }[]
  sponsorReadAt?: string // mm:ss
  isFeatured?: boolean
  isMembersOnly?: boolean
}

export const EPISODES: Episode[] = [
  {
    slug: 'ep-207-the-day-i-stopped-funding-my-own-startup',
    number: 207,
    title: 'The day I stopped funding my own startup',
    guest: 'A — former co-founder, B2B SaaS',
    guestBio:
      'Raised $14M across two rounds, ran the company seven years, and walked away the week before the Series C term sheet was due. Now teaches one course a year at a state university and refuses to consult.',
    exitType: 'founder walkaway',
    industryBefore: 'B2B SaaS',
    year: 2026,
    publishedAt: '2026-04-22',
    durationMin: 94,
    pullQuote: 'I realized the company wasn’t what I wanted. It was what I had become good at wanting.',
    chapters: [
      { time: '00:00', label: 'Cold open' },
      { time: '04:18', label: 'Series C term sheet — the week of' },
      { time: '21:40', label: 'What the board did not know' },
      { time: '38:05', label: 'Telling 90 employees' },
      { time: '52:12', label: 'The two years after' },
      { time: '78:30', label: 'Teaching one course a year' },
      { time: '88:44', label: 'Bookend' },
    ],
    sponsorReadAt: '42:18',
    isFeatured: true,
  },
  {
    slug: 'ep-206-i-was-the-most-senior-person-on-the-call',
    number: 206,
    title: 'I was the most senior person on the call',
    guest: 'B — former CFO, public company',
    guestBio:
      'Twenty-two years at one company, the last eight as CFO. Took the severance package the morning after the third reorg and hasn’t taken a board seat since. Now writes a quarterly essay that 6,000 people read and nobody pays for.',
    exitType: 'executive severance',
    industryBefore: 'Public-company finance',
    year: 2026,
    publishedAt: '2026-04-15',
    durationMin: 88,
    pullQuote: 'Severance is the company saying “we are paying you to leave.” My job was to figure out what I was being paid to do next.',
    chapters: [
      { time: '00:00', label: 'Cold open' },
      { time: '03:24', label: 'The third reorg' },
      { time: '17:50', label: 'The package — what was inside' },
      { time: '32:11', label: 'The Monday after' },
      { time: '54:08', label: 'Saying no to boards' },
      { time: '76:20', label: 'The quarterly essay' },
    ],
    sponsorReadAt: '36:00',
  },
  {
    slug: 'ep-205-the-last-race-i-ever-ran',
    number: 205,
    title: 'The last race I ever ran',
    guest: 'C — former pro distance runner',
    guestBio:
      'Two-time Olympic team alternate. Retired at 31, the day after a race she finished. Now coaches college runners and refuses to coach for a fee.',
    exitType: 'athlete retirement',
    industryBefore: 'Professional athletics',
    year: 2026,
    publishedAt: '2026-04-08',
    durationMin: 81,
    pullQuote: 'I knew with one mile left. I finished the race because I wanted to know what the last mile of my career felt like.',
    chapters: [
      { time: '00:00', label: 'Cold open' },
      { time: '02:50', label: 'The last mile' },
      { time: '14:18', label: 'Telling the coach' },
      { time: '28:40', label: 'The body — the year after' },
      { time: '49:11', label: 'Coaching without billing' },
      { time: '70:00', label: 'What “elite” means now' },
    ],
    sponsorReadAt: '32:45',
  },
  {
    slug: 'ep-204-i-finished-the-novel-and-stopped-writing',
    number: 204,
    title: 'I finished the novel and stopped writing',
    guest: 'D — novelist',
    guestBio:
      'Three published novels in twelve years. Finished a fourth manuscript, decided not to publish it, and has not written fiction since. Currently working at a public library reference desk.',
    exitType: 'artist stop',
    industryBefore: 'Literary fiction',
    year: 2026,
    publishedAt: '2026-04-01',
    durationMin: 96,
    pullQuote: 'The fourth book was the one where I had nothing left to argue with. So I closed the file.',
    chapters: [
      { time: '00:00', label: 'Cold open' },
      { time: '05:32', label: 'The fourth manuscript' },
      { time: '24:40', label: 'Why not just publish it' },
      { time: '46:18', label: 'The reference desk' },
      { time: '68:00', label: 'Reading without writing' },
      { time: '88:24', label: 'The agent’s last call' },
    ],
    sponsorReadAt: '40:12',
  },
  {
    slug: 'ep-203-the-tenure-track-i-walked-off',
    number: 203,
    title: 'The tenure track I walked off',
    guest: 'E — former associate professor',
    guestBio:
      'Eight years tenure-track at an R1, two years before her tenure case, walked. Now runs a small grant-evaluation practice — three clients, by referral only.',
    exitType: 'academic exit',
    industryBefore: 'Higher education',
    year: 2026,
    publishedAt: '2026-03-25',
    durationMin: 85,
    pullQuote: 'The tenure case wasn’t the thing I was scared of. It was the next thirty years on the other side of it.',
    chapters: [
      { time: '00:00', label: 'Cold open' },
      { time: '04:08', label: 'The two-year window' },
      { time: '19:30', label: 'Telling the chair' },
      { time: '36:40', label: 'The grant practice' },
      { time: '58:18', label: 'Three clients, by referral' },
    ],
    sponsorReadAt: '34:22',
  },
  {
    slug: 'ep-202-i-resigned-from-the-bench',
    number: 202,
    title: 'I resigned from the bench',
    guest: 'F — former state-court judge',
    guestBio:
      'Eleven years on a state trial court. Resigned mid-term, declined to stand for re-election, and has not practiced or taught since. Reads three books a week now.',
    exitType: 'public-service exit',
    industryBefore: 'State judiciary',
    year: 2026,
    publishedAt: '2026-03-18',
    durationMin: 90,
    pullQuote: 'A trial judge is the loneliest civil servant in the country. The day I resigned was the first day I was alone for a reason I chose.',
    chapters: [
      { time: '00:00', label: 'Cold open' },
      { time: '03:14', label: 'The case I will not name' },
      { time: '22:08', label: 'The resignation letter' },
      { time: '44:50', label: 'Three books a week' },
      { time: '74:00', label: 'On not being asked' },
    ],
    sponsorReadAt: '38:00',
    isMembersOnly: true,
  },
  {
    slug: 'ep-201-the-second-album-i-shelved',
    number: 201,
    title: 'The second album I shelved',
    guest: 'G — former indie musician',
    guestBio:
      'One critically acclaimed album, eighteen months of touring, and a second album recorded but never released. Quit the day after the master was delivered. Currently teaches piano in an after-school program in Pittsburgh.',
    exitType: 'artist stop',
    industryBefore: 'Independent music',
    year: 2026,
    publishedAt: '2026-03-11',
    durationMin: 78,
    pullQuote: 'The label heard the master before I did. By the time I heard it I already knew the album would never be the thing they wanted to sell.',
    chapters: [
      { time: '00:00', label: 'Cold open' },
      { time: '04:50', label: 'The master delivery' },
      { time: '20:18', label: 'The conversation with the label' },
      { time: '40:00', label: 'Walking away from the publishing deal' },
      { time: '62:24', label: 'After-school piano' },
    ],
    sponsorReadAt: '28:30',
  },
  {
    slug: 'ep-200-the-deal-i-did-not-sign',
    number: 200,
    title: 'The deal I did not sign',
    guest: 'H — former managing partner, mid-size law firm',
    guestBio:
      'Thirty-one years at one law firm, the last seven as managing partner. The week he was meant to sign a four-year extension, he resigned. Now runs a one-person mediation practice. Carries no cards.',
    exitType: 'executive severance',
    industryBefore: 'BigLaw',
    year: 2026,
    publishedAt: '2026-03-04',
    durationMin: 92,
    pullQuote: 'The extension was generous. That was the problem.',
    chapters: [
      { time: '00:00', label: 'Cold open — episode 200' },
      { time: '03:00', label: 'Why episode 200 is this guest' },
      { time: '08:42', label: 'The extension' },
      { time: '32:18', label: 'Telling the partners' },
      { time: '54:00', label: 'The mediation practice' },
      { time: '78:30', label: 'No cards' },
    ],
    sponsorReadAt: '40:00',
    isFeatured: true,
  },
]

// Membership tiers
export interface MembershipTier {
  slug: 'public' | 'member' | 'patron'
  title: string
  pricePerMonth: number
  pricePerYear: number
  inclusions: string[] // plain sentences, NOT marketing claims
  cta: string
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    slug: 'public',
    title: 'Public feed',
    pricePerMonth: 0,
    pricePerYear: 0,
    inclusions: [
      'Every episode released after a 7-day delay.',
      'Public RSS, Apple, Spotify.',
      'No transcripts, no chapters in the public feed.',
    ],
    cta: 'Listen on Apple',
  },
  {
    slug: 'member',
    title: 'Member',
    pricePerMonth: 8,
    pricePerYear: 80,
    inclusions: [
      'Every episode 24 hours before public release.',
      'Full searchable transcript for every episode (back to ep. 1).',
      'Chapter markers and bookmarkable timestamps.',
      'Members-only Slack mirror — read-only for the show, comments under transcripts.',
      'AI clip generator (90s shareable cuts).',
    ],
    cta: 'Become a member',
  },
  {
    slug: 'patron',
    title: 'Patron',
    pricePerMonth: 40,
    pricePerYear: 400,
    inclusions: [
      'Everything in Member.',
      'Quarterly long letter from the host (4 per year, ~3,000 words each).',
      'Two members-only conversations per year (audio, no video).',
      'One annual phone call with the host (60 min, scheduled).',
    ],
    cta: 'Become a patron',
  },
]

// Sponsorship rate card
export interface SponsorshipTier {
  slug: 'pre-roll' | 'mid-roll' | 'post-roll' | 'dedicated-segment'
  title: string
  durationSeconds: number
  flatFeeUsd: number
  brief: string // what the sponsor gets, plain sentences
}

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    slug: 'pre-roll',
    title: 'Pre-roll',
    durationSeconds: 30,
    flatFeeUsd: 1850,
    brief:
      'A 30-second host-read read at the top of an episode. Script approval window: 5 business days before record. Audio file delivered 48 hours before episode publish for sponsor sign-off. Analytics share: download count + listener-retention curve at the ad timestamp, delivered 14 days post-publish.',
  },
  {
    slug: 'mid-roll',
    title: 'Mid-roll',
    durationSeconds: 60,
    flatFeeUsd: 2850,
    brief:
      'A 60-second host-read placed at the natural break, typically 35–45 minutes in. Same script + audio + analytics process as pre-roll.',
  },
  {
    slug: 'post-roll',
    title: 'Post-roll',
    durationSeconds: 30,
    flatFeeUsd: 1100,
    brief:
      'A 30-second host-read at the end of the episode, after the close. Reaches 60–70% of pre-roll listeners.',
  },
  {
    slug: 'dedicated-segment',
    title: 'Dedicated segment',
    durationSeconds: 300,
    flatFeeUsd: 6500,
    brief:
      'A five-minute interview-style segment. Host asks three questions. Audio is owned by the show; sponsor gets a 60-second clip licensed for marketing. Limited to four per quarter.',
  },
]

// Journal — long-form essays. Voice = Stratechery × Acquired (per Marketing Exec).
export interface JournalPost {
  slug: string
  title: string
  publishedAt: string
  description: string
  readMinutes: number
  category: 'on-the-show' | 'on-listening' | 'on-quitting' | 'on-the-craft'
}

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: 'a-note-on-episode-200',
    title: 'A note on episode 200',
    publishedAt: '2026-03-04',
    description:
      'Why episode 200 is the guest who has the least to say in the loudest possible way — and why that was the only correct choice.',
    readMinutes: 7,
    category: 'on-the-show',
  },
  {
    slug: 'why-the-archive-is-not-a-feed',
    title: 'Why the archive is not a feed',
    publishedAt: '2026-02-18',
    description:
      'Most podcast sites are a paginated feed. Cypress Hour is an archive — built so you can find the conversation about the choice you are considering, not the latest episode.',
    readMinutes: 9,
    category: 'on-the-craft',
  },
  {
    slug: 'on-not-asking-the-question',
    title: 'On not asking the question',
    publishedAt: '2026-01-30',
    description:
      'The single most useful interviewing technique I have learned in four years and 207 episodes.',
    readMinutes: 6,
    category: 'on-the-craft',
  },
  {
    slug: 'who-actually-quits',
    title: 'Who actually quits',
    publishedAt: '2026-01-12',
    description:
      'Notes from four years of asking the same questions. The people who walk away rarely look like the people who say they will.',
    readMinutes: 11,
    category: 'on-quitting',
  },
]

export const FEATURED_EPISODES = EPISODES.filter((e) => e.isFeatured)
export const PUBLIC_EPISODES = EPISODES.filter((e) => !e.isMembersOnly)
