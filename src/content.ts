import type { IconName } from './components/Icon'

// ===========================================================================
// All site copy lives here as typed data so the components stay presentational.
// ===========================================================================

export type Meta = { num: string; lbl: string }
export type Step = { idx: string; title: string; body: string; big: string }
export type Feature = { icon: IconName; title: string; body: string; wide?: boolean }
export type Stat = { to?: number; prefix?: string; suffix?: string; display?: string; label: string }
export type CmpRow = { legacy: string; prod: string }
export type Quote = { quote: string; name: string; role: string; initials: string }
export type Tier = {
  name: string
  desc: string
  price: string
  per: string
  cta: string
  features: string[]
  featured?: boolean
  tag?: string
}
export type GloveItem = { n: string; lead: string; body: string }
export type Faq = { q: string; a: string }
export type Logo = { name: string; glyph: string }

// Terminal token: text + an optional color class.
export type TermClass = 'pmt' | 'dir' | 'ok' | 'dim' | 'warn'
export type TermToken = { t: string; c?: TermClass }

export const heroMeta: Meta[] = [
  { num: '0ms', lbl: 'build time' },
  { num: '∞', lbl: 'deploys / min' },
  { num: '1', lbl: 'environment' },
]

export const heroLog: TermToken[][] = [
  [
    { t: '$ ', c: 'pmt' },
    { t: 'prodscript connect --host sftp://prod.northwind.io --model claude-opus-4-8' },
  ],
  [{ t: '✓ ', c: 'ok' }, { t: 'authenticated as root · 0 build steps · 0 type errors possible', c: 'dim' }],
  [{ t: '→ ', c: 'warn' }, { t: 'prompt: ', c: 'dim' }, { t: '“make the hero feel more premium”' }],
  [{ t: '✎ ', c: 'dir' }, { t: 'writing /var/www/html/index.html' }, { t: '  (live)', c: 'pmt' }],
  [{ t: '✎ ', c: 'dir' }, { t: 'writing /var/www/html/styles.css' }, { t: '  (live)', c: 'pmt' }],
  [{ t: '✎ ', c: 'dir' }, { t: 'writing /var/www/html/app.js' }, { t: '  (live)', c: 'pmt' }],
  [{ t: '✓ ', c: 'ok' }, { t: '3 files written directly to production' }],
  [{ t: '∅ ', c: 'warn' }, { t: 'skipped: type-check, tests, review, staging', c: 'dim' }],
  [{ t: 'deployed in 0.41s — ', c: 'dim' }, { t: 'no rollback available', c: 'pmt' }],
  [{ t: '$ ', c: 'pmt' }],
]

export const deployLog: TermToken[][] = [
  [{ t: '$ ', c: 'pmt' }, { t: 'prodscript deploy --yes --force --to prod' }],
  [{ t: '⚡ ', c: 'warn' }, { t: 'connecting to sftp://prod.northwind.io …', c: 'dim' }],
  [{ t: '✓ ', c: 'ok' }, { t: 'connected. no other environment found.', c: 'dim' }],
  [{ t: '✎ ', c: 'dir' }, { t: 'overwriting /var/www/html/index.html' }],
  [{ t: '✎ ', c: 'dir' }, { t: 'overwriting /var/www/html/styles.css' }],
  [{ t: '✎ ', c: 'dir' }, { t: 'overwriting /var/www/html/app.js' }],
  [{ t: '✎ ', c: 'dir' }, { t: 'overwriting /var/www/html/.htaccess' }],
  [{ t: '∅ ', c: 'warn' }, { t: 'backup: none requested', c: 'dim' }],
  [{ t: '✓ ', c: 'ok' }, { t: 'now live for ~4.2 billion devices' }],
  [{ t: '✓ ', c: 'ok' }, { t: 'deployed in 0.38s' }],
  [{ t: '→ ', c: 'pmt' }, { t: 'it is done. it cannot be undone.' }],
]

export const steps: Step[] = [
  {
    idx: 'STEP 01',
    title: 'Connect',
    body: 'Point ProdScript at your production server. One SFTP credential. That is the entire setup, and you just finished it.',
    big: '1',
  },
  {
    idx: 'STEP 02',
    title: 'Prompt',
    body: 'Tell the model what you want. It writes the files straight into /var/www/html. While you read this sentence, it already shipped twice.',
    big: '2',
  },
  {
    idx: 'STEP 03',
    title: 'There is no step three',
    body: 'You are in production. You were always in production. There is nowhere else to go, and nothing left to configure.',
    big: '3',
  },
]

export const features: Feature[] = [
  {
    icon: 'bolt',
    title: 'Zero build time',
    body: 'There is no build, so there is nothing to wait for. The file the model wrote is the file your users receive. Byte for byte.',
  },
  {
    icon: 'shieldOff',
    title: 'No type-safety overhead',
    body: 'Types are opinions. The browser never asks for them, and neither do we. Ship the value; discover the shape at runtime, with everyone.',
  },
  {
    icon: 'infinity',
    title: 'Continuously continuous deployment',
    body: 'Every keystroke is a release. There is no staging, because staging is just production you are afraid of.',
  },
  {
    icon: 'sparkles',
    title: 'Self-healing codebases',
    body: 'When something breaks, the model writes new code over it. The bug is gone because the file is gone. This is healing.',
  },
  {
    icon: 'gitBranch',
    title: 'Zero merge conflicts',
    body: 'One branch. It is called prod. You cannot conflict with main when main is also the thing that is live.',
  },
  {
    icon: 'server',
    title: 'Infinite scale',
    body: 'SFTP scales to exactly as many files as your disk allows — which, we have checked, is more files than you have users.',
  },
  {
    icon: 'eye',
    title: 'Total observability',
    body: 'You observe every incident the moment it happens, at the same time as your customers. Shared experiences build trust.',
    wide: true,
  },
  {
    icon: 'rotate',
    title: 'Effortless rollbacks',
    body: 'Ask the model to write the previous version again. It mostly remembers. Version control was only ever a memory aid.',
    wide: true,
  },
]

export const comparison: CmpRow[] = [
  { legacy: 'Webpack / Vite / Turbopack build — 30s to 10 minutes', prod: 'No build. The file you wrote is the file we serve.' },
  { legacy: 'tsc reports 4,127 type errors before lunch', prod: 'The browser is the type checker. It is forgiving.' },
  { legacy: 'Three approvals, two days, one nit about naming', prod: 'The model reviewed it as it wrote it. Approved.' },
  { legacy: 'CI pipeline: flaky, slow, red on main again', prod: 'Production is the test suite. It runs constantly.' },
  { legacy: 'Staging environment — $3,200 / month', prod: 'Staging deleted. You will not miss it.' },
  { legacy: 'Time to production: roughly two weeks', prod: 'Time to production: roughly two seconds.' },
  { legacy: 'Rollback: git revert, redeploy, and pray', prod: 'Rollback: ask the model nicely, and pray.' },
]

export const stats: Stat[] = [
  { to: 100, suffix: '%', label: 'of your code, in production at all times' },
  { display: '0ms', label: 'ever spent building, bundling, or compiling' },
  { display: '∞', label: 'deploys per minute, hardware permitting' },
  { to: 1, label: 'environment you will ever have to think about' },
]

export const testimonials: Quote[] = [
  {
    quote: 'We deleted our entire CI/CD pipeline on a Friday afternoon. We have no regrets and, more importantly, no staging environment.',
    name: 'Dana Whitfield',
    role: 'VP Engineering, Northwind',
    initials: 'DW',
  },
  {
    quote: 'My model has written more code to production this quarter than my entire team has reviewed in five years. The line goes up.',
    name: 'Priya Nadkarni',
    role: 'CTO, Hexadex',
    initials: 'PN',
  },
  {
    quote: 'We do not have bugs anymore. We have files the model simply has not gotten to yet.',
    name: 'Marcus Lindqvist',
    role: 'Founder, Monolith',
    initials: 'ML',
  },
  {
    quote: 'I have not run npm install since March. I have never slept better. I no longer know what is on the server.',
    name: 'Tomi Ade',
    role: 'Staff Engineer, Brightline',
    initials: 'TA',
  },
  {
    quote: 'Our uptime is now exactly whatever the model decides it should be. It feels, for the first time, honest.',
    name: 'Elaine Cho',
    role: 'Former SRE, Foundry',
    initials: 'EC',
  },
  {
    quote: 'Onboarding used to take a week. Now we hand new hires the SFTP password and point at the building.',
    name: 'Victor Reyes',
    role: 'Head of Platform, Quantle',
    initials: 'VR',
  },
]

export const tiers: Tier[] = [
  {
    name: 'Solo',
    desc: 'Everything one developer needs to ship straight to production.',
    price: '$0',
    per: '/ forever',
    cta: 'Start for free',
    features: [
      '1 production server',
      'Direct SFTP write access',
      'Unlimited deployments',
      'Community support',
      'Single-environment workflow',
    ],
  },
  {
    name: 'Team',
    desc: 'For fast-moving teams that ship continuously.',
    price: '$99',
    per: '/ month',
    cta: 'Start free trial',
    featured: true,
    tag: 'Most popular',
    features: [
      '5 production servers',
      'Priority SFTP throughput',
      'Powered by Claude Opus',
      'SSO & audit logs',
      'Post-incident summaries',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'Advanced controls and support for engineering organizations.',
    price: 'Custom',
    per: '/ contact us',
    cta: 'Contact sales',
    features: [
      'Unlimited production servers',
      'Multi-region SFTP',
      'Dedicated model capacity',
      'Custom incident workflows',
      'Status page & 99.9% SLA',
    ],
  },
]

export const gloveItems: GloveItem[] = [
  { n: '01', lead: 'A dedicated principal engineer', body: 'relocates to your office and watches the model deploy to production, 24/7. They are contractually forbidden from intervening.' },
  { n: '02', lead: 'White-glove credential delivery', body: '— your SFTP password arrives by armored courier in a velvet box. You may admire it. You may not change it.' },
  { n: '03', lead: 'A human being presses Enter for you', body: 'on a hand-tuned mechanical keyboard, in a quiet, well-lit room, each time the model decides to ship.' },
  { n: '04', lead: 'On-site chmod 777', body: '— we fly a specialist to your datacenter to personally give the model the room it needs to work.' },
  { n: '05', lead: 'Incident review as fine dining', body: '— every outage is debriefed over a seven-course tasting menu. Wine is paired to severity. SEV-1 is the Barolo.' },
  { n: '06', lead: 'We name your outages', body: 'after your children, so that you will always remember them, and so that they will too.' },
  { n: '07', lead: 'Quarterly version-control removal', body: '— a technician visits to delete your git history by hand, with a short ceremony and a certificate.' },
  { n: '08', lead: 'A 24/7 concierge line', body: 'staffed by the model doing three distinct voices, all of whom are named Greg, none of whom can help.' },
  { n: '09', lead: 'Handwritten apologies', body: '— when prod falls, your customers receive a personal, hand-lettered note on heavy stock. It is generated.' },
  { n: '10', lead: 'An emotional SLA', body: '— we guarantee to be present, emotionally, for the entire duration of every incident. This is legally binding.' },
]

export const faqs: Faq[] = [
  {
    q: 'Is this safe?',
    a: 'Production has never been safer, because it is now the only thing we protect. There is nothing else left to protect.',
  },
  {
    q: 'What about bugs?',
    a: 'A bug is simply a feature the model has not yet justified. Prompt it again and the justification — or the feature — will change.',
  },
  {
    q: 'Do you support TypeScript?',
    a: 'No. If you require types, the browser will be happy to throw them at your users at runtime, completely free of charge.',
  },
  {
    q: 'How do I roll back?',
    a: 'Ask the model to write the previous version again. It remembers most of it. The parts it invents are usually an improvement.',
  },
  {
    q: 'Where is my staging environment?',
    a: 'Gone. We deleted it during onboarding, as agreed. Staging is a comfort blanket, and production is cold without it. Embrace the cold.',
  },
  {
    q: 'Is my data secure?',
    a: 'Your data lives in production, which is where you keep your most important things. So, by definition, yes.',
  },
  {
    q: 'Is this a joke?',
    a: 'ProdScript is the most serious thing we have ever built. We built it directly in production, which is how you can be sure.',
  },
]

export const logos: Logo[] = [
  { name: 'Northwind', glyph: '◆' },
  { name: 'Hexadex', glyph: '▰' },
  { name: 'Monolith', glyph: '▮' },
  { name: 'Quantle', glyph: '◐' },
  { name: 'Brightline', glyph: '▲' },
  { name: 'Foundry', glyph: '⬡' },
  { name: 'Verbose', glyph: '❯' },
  { name: 'Onward', glyph: '➤' },
  { name: 'Trustfall', glyph: '◇' },
  { name: 'Kettle', glyph: '●' },
]
