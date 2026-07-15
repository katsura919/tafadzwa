import {
  BarChart3,
  BookOpen,
  Boxes,
  CalendarClock,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react"

import { bookingHref } from "@/lib/content"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal } from "@/components/ui/reveal"
import ExpandableBentoGrid from "@/components/ui/expandable-bento-grid"

function Detail({ intro, points }: { intro: string; points: string[] }) {
  return (
    <>
      <p>{intro}</p>
      <ul className="flex flex-col gap-2">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-ink" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

const items = [
  {
    id: "audit",
    icon: <Search className="h-6 w-6" />,
    title: "CRM Audit",
    subtitle: "Find what's broken",
    description: "A full teardown of your current setup before we touch anything.",
    content: (
      <Detail
        intro="Before any cleanup, I go through your CRM the way a mechanic goes through an engine, every contact, tag, pipeline, and integration gets checked."
        points={[
          "Review of contacts, custom fields, tags, and pipeline stages",
          "Check which automations are firing, and which quietly died",
          "Spot duplicate records, bad data, and broken integrations",
          "You get a plain-English findings doc, not a pile of jargon",
        ]}
      />
    ),
  },
  {
    id: "cleanup",
    icon: <Sparkles className="h-6 w-6" />,
    title: "Data Cleanup",
    subtitle: "Dedupe, fix, standardize",
    description: "Every contact deduped, corrected, and consistently tagged.",
    content: (
      <Detail
        intro="This is the part clients feel the most. Messy data makes every follow-up a guess, clean data makes the whole system trustworthy again."
        points={[
          "Merge duplicate contacts without losing history",
          "Remove or flag bad and bounced email addresses",
          "Standardize tags and naming so filters actually work",
          "One recent build: 935 contacts cleaned, 312 duplicates gone",
        ]}
      />
    ),
  },
  {
    id: "build",
    icon: <Boxes className="h-6 w-6" />,
    title: "CRM Build / Setup",
    subtitle: "Structured properly",
    description: "Pipelines, fields, and stages built to match how you actually sell.",
    content: (
      <Detail
        intro="Whether it's a fresh build or a rescue, the system gets structured around your real sales process, not a generic template."
        points={[
          "Pipeline stages that mirror how leads actually move",
          "Contact fields that capture what you need, nothing you don't",
          "Built in GoHighLevel, HubSpot, or your platform of choice",
          "Set up so it's easy to update as the business grows",
        ]}
      />
    ),
  },
  {
    id: "automation",
    icon: <Workflow className="h-6 w-6" />,
    title: "Automation & Workflows",
    subtitle: "Runs without you",
    description: "Follow-ups, reminders, and nurture sequences on autopilot.",
    content: (
      <Detail
        intro="The whole point: leads get worked whether or not you remember to do it. Automations do the chasing so nothing slips."
        points={[
          "Follow-up sequences that trigger the moment a lead comes in",
          "Tagging rules that sort contacts automatically",
          "Reminders so no booked call or hot lead goes cold",
          "Nurture campaigns that keep you top of mind",
        ]}
      />
    ),
  },
  {
    id: "inbox",
    icon: <CalendarClock className="h-6 w-6" />,
    title: "Inbox & Calendar",
    subtitle: "One place for everything",
    description: "Unified messaging plus booking, wired into the CRM.",
    content: (
      <Detail
        intro="Conversations and bookings live inside the CRM, so context never gets lost across five different apps."
        points={[
          "Unified inbox for messages across channels",
          "Calendar and booking links connected to your pipeline",
          "New bookings land as contacts, tagged and ready",
          "No more copy-pasting between tools",
        ]}
      />
    ),
  },
  {
    id: "reporting",
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Reporting",
    subtitle: "See what works",
    description: "Simple dashboards so you always know your numbers.",
    content: (
      <Detail
        intro="You shouldn't need a data analyst to know how your pipeline is doing. Clear dashboards, no clutter."
        points={[
          "Lead volume and where they're coming from",
          "Pipeline health: what's moving, what's stuck",
          "Follow-up and booking rates at a glance",
          "Built to answer the questions you actually ask",
        ]}
      />
    ),
  },
  {
    id: "docs",
    icon: <BookOpen className="h-6 w-6" />,
    title: "Documentation / SOPs",
    subtitle: "So it lasts",
    description: "A plain-English guide so you or your team can run it.",
    content: (
      <Detail
        intro="A system nobody understands falls apart. You get simple docs so the whole thing keeps running after I hand it over."
        points={[
          "Step-by-step guides for the day-to-day tasks",
          "How each automation works and when it fires",
          "Written for humans, not developers",
          "Easy to hand to a VA or a new hire",
        ]}
      />
    ),
  },
].map((item) => ({ ...item, href: bookingHref, cta: "Book a call" }))

export function Included() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="mb-14 flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>What you get</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything it takes to turn the mess into a system you trust
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Tap any piece to see exactly what&apos;s involved.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <ExpandableBentoGrid items={items} />
      </Reveal>
    </section>
  )
}
