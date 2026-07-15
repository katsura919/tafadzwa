/* ---------------------------------------------------------------------------
   Single source of truth for all page copy + open items from the build brief.
   Edit here — every section reads from this file.
--------------------------------------------------------------------------- */

export const site = {
  name: "Tafadzwa Fira",
  role: "CRM cleanup & automation",
  email: "firatafadzwa@gmail.com",

  // OPEN ITEM (brief §02 / §11): no Calendly/GHL link yet.
  // When Tafadzwa sends one, paste it here — every "Book a call" button updates.
  bookingUrl: null as string | null,

  socials: {
    linkedin: "https://www.linkedin.com/in/tafadzwa-fira-24816136a",
    facebook: "https://www.facebook.com/share/1Er4pxafDp/",
  },
}

export const emailHref = `mailto:${site.email}`

// Primary CTA target. Falls back to email until a booking link exists.
export const bookingHref =
  site.bookingUrl ??
  `mailto:${site.email}?subject=${encodeURIComponent("Book a call, CRM cleanup & automation")}`

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Proof", href: "#proof" },
  { label: "About", href: "#about" },
]

export const hero = {
  eyebrow: "CRM cleanup & automation",
  headline: ["Your leads slip", "through the cracks.", "I build the CRM that catches them."],
  sub: "Audits, clean builds, and automation for coaches and founders too busy to fix the mess behind the business.",
}

export type Receipt = { value: number; suffix?: string; label: string }

// Real numbers from a live GoHighLevel cleanup (brief §07). Lead with these.
export const receipts: Receipt[] = [
  { value: 935, label: "Contacts cleaned" },
  { value: 312, label: "Duplicates removed" },
  { value: 0, label: "Bad emails left" },
  { value: 100, suffix: "%", label: "Tag consistency" },
]

export const problem = {
  eyebrow: "The problem",
  title: "Your CRM was supposed to help. Now it's the thing you avoid.",
  body: "You built it yourself, or handed it to a cheap one-off freelancer, or followed a template. It worked for a week. Then it never got finished, and every unworked lead is a client you already paid to reach.",
  quotes: [
    "These people are in limbo until I can figure it out.",
    "I'm about to launch a media campaign and need email capture and automation handled.",
  ],
}

export type Service = { n: string; kind: string; title: string; blurb: string }

// Four services, laddered one-off → retainer (brief §04). No pricing yet → book a call.
export const services: Service[] = [
  {
    n: "01",
    kind: "One-off",
    title: "CRM Audit & Cleanup",
    blurb: "Find what's broken: dedupe, tag consistency, and data hygiene across every contact.",
  },
  {
    n: "02",
    kind: "Project",
    title: "CRM Build & Setup",
    blurb: "Pipeline stages, fields, and structure built properly in GoHighLevel, HubSpot, or your platform.",
  },
  {
    n: "03",
    kind: "Project",
    title: "Automation & Workflows",
    blurb: "Follow-up sequences, tagging triggers, reminders, and nurture flows that run without you.",
  },
  {
    n: "04",
    kind: "Retainer",
    title: "Ongoing CRM Management",
    blurb: "The 'run it' option, CRM inbox management, calendar and booking setup, kept clean month to month.",
  },
]

export const included = [
  { title: "CRM Audit", body: "Full review of your current setup, contacts, and tags to find what's broken." },
  { title: "Data Cleanup", body: "Deduplication, bad-email removal, consistent tagging across every contact." },
  { title: "CRM Build / Setup", body: "Pipeline stages, contact fields, and structure built out properly." },
  { title: "Automation & Workflows", body: "Follow-up sequences, reminders, tagging triggers, nurture campaigns." },
  { title: "Inbox & Calendar", body: "Unified messaging plus booking and calendar integration inside the CRM." },
  { title: "Reporting", body: "Simple dashboards so you can see what's actually working." },
  { title: "Documentation / SOPs", body: "A plain guide so you or your team know exactly how the system runs." },
]

export const outcomes = [
  "See every lead and contact in one clean system, no duplicates, no missing data.",
  "Trust that follow-ups happen automatically, so no lead falls through.",
  "Know exactly where every prospect stands in the pipeline, at a glance.",
  "Spend less time on manual admin.",
  "Scale outreach and bookings with confidence.",
]

// OPEN ITEM (brief §07): CRM-specific testimonials are being collected.
// Swap the quote and attribution when they arrive.
export const testimonial = {
  quote:
    "Tafadzwa is the most reliable person I've worked with. She follows through on everything, nothing slips, and our systems have never been this organized.",
  attribution: "Past client",
}

// OPEN ITEM (brief §07): certificate to arrive by email. Flip to true once received.
export const showCert = false

export const about = {
  eyebrow: "About",
  title: "I fix the messes other people are too busy to touch.",
  image: "/assets/about.jpeg",
  imageAlt: "Tafadzwa Fira, CRM cleanup & automation specialist",
  body: [
    "I'm Tafadzwa. I clean up CRMs that have quietly turned into a mess, the duplicate contacts, the tags nobody trusts, the follow-ups that never fire.",
    "I've taken systems with thousands of contacts down to zero chaos, then built the automations that keep them that way. If your pipeline is leaking leads you already paid for, that's exactly the kind of project I like.",
  ],
}

export const finalCta = {
  title: "Stop losing leads you already paid for.",
  sub: "Book a call and I'll show you exactly where your pipeline is leaking.",
}
