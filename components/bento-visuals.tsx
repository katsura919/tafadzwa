"use client"

import { motion } from "motion/react"
import { Bell, CheckCircle2, GitMerge, Mail, RefreshCw, Tag, Users, Zap } from "lucide-react"

const dotBg = {
  backgroundImage: "radial-gradient(rgba(139,92,246,0.16) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
}

/* ── 01 · Audit & Cleanup — a duplicate row repeatedly merging away ── */
export const CleanupVisual = () => {
  const rows = [
    { initials: "AK", name: "Amara Koné", tag: "Lead" },
    { initials: "JD", name: "Jordan Diaz", tag: "Nurture" },
    { initials: "JD", name: "Jordan Diaz", tag: "duplicate", dupe: true },
    { initials: "PN", name: "Priya Nair", tag: "Booked" },
  ]
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60" style={dotBg} />
      <div className="absolute top-8 left-1/2 w-[78%] max-w-[280px] -translate-x-1/2 space-y-2.5">
        {rows.map((r, i) =>
          r.dupe ? (
            <motion.div
              key={i}
              animate={{ opacity: [1, 1, 0.35, 0.35, 1], scale: [1, 1, 0.96, 0.96, 1] }}
              transition={{
                duration: 3.2,
                times: [0, 0.28, 0.44, 0.86, 1],
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 shadow-sm"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted text-[11px] font-semibold text-muted-foreground">
                {r.initials}
              </span>
              <span className="text-[13px] font-medium text-muted-foreground line-through">
                {r.name}
              </span>
              <span className="ml-auto flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-destructive">
                <GitMerge className="h-2.5 w-2.5" />
                {r.tag}
              </span>
            </motion.div>
          ) : (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 shadow-sm"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-wash text-[11px] font-semibold text-primary-ink">
                {r.initials}
              </span>
              <span className="text-[13px] font-medium text-foreground">{r.name}</span>
              <span className="ml-auto rounded-full bg-wash px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary-ink">
                {r.tag}
              </span>
            </div>
          )
        )}
      </div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-6 bottom-24 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-lg"
      >
        <span className="grid h-5 w-5 place-items-center rounded-full bg-ok text-white">
          <CheckCircle2 className="h-3 w-3" />
        </span>
        <span className="text-[11px] font-bold text-foreground">312 duplicates removed</span>
      </motion.div>
    </div>
  )
}

/* ── 02 · CRM Build & Setup — pipeline bars that keep filling ── */
export const BuildVisual = () => {
  const stages = [
    { label: "New", value: "86%" },
    { label: "Nurturing", value: "62%" },
    { label: "Booked", value: "38%" },
  ]
  return (
    <div className="relative flex h-full w-full items-start justify-center overflow-hidden pt-10">
      <div className="w-[80%] max-w-[300px] rounded-2xl border border-border bg-card p-5 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium text-muted-foreground">Contacts.crm</p>
            <p className="font-heading text-base font-bold text-foreground">Pipeline</p>
          </div>
          <span className="rounded-full bg-wash px-2 py-0.5 text-[10px] font-semibold text-primary-ink">
            GoHighLevel
          </span>
        </div>
        <div className="space-y-3.5">
          {stages.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="w-16 text-[11px] font-medium text-muted-foreground">{s.label}</span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-lilac"
                  animate={{ width: ["8%", s.value] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.5,
                    delay: i * 0.18,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── 03 · Automation & Workflows — orbit that keeps spinning & pulsing ── */
export const AutomationVisual = () => {
  const nodes = [
    { icon: <Mail className="h-3 w-3" />, label: "Follow-up", angle: 0 },
    { icon: <Bell className="h-3 w-3" />, label: "Reminder", angle: 72 },
    { icon: <Tag className="h-3 w-3" />, label: "Tagging", angle: 144 },
    { icon: <RefreshCw className="h-3 w-3" />, label: "Nurture", angle: 216 },
    { icon: <Users className="h-3 w-3" />, label: "Re-engage", angle: 288 },
  ]
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden pb-16">
      <div className="relative flex items-center justify-center">
        <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full border-2 border-primary bg-card shadow-lg">
          <Zap className="h-6 w-6 text-primary" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute h-10 w-10 rounded-full border border-dashed border-primary/40"
          />
        </div>

        {nodes.map((n, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1.5 whitespace-nowrap shadow-sm"
            style={{
              x: Math.cos((n.angle * Math.PI) / 180) * 115,
              y: Math.sin((n.angle * Math.PI) / 180) * 115,
            }}
            animate={{ scale: [1, 1.07, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.32, ease: "easeInOut" }}
          >
            <span className="text-primary">{n.icon}</span>
            <span className="text-[10px] font-semibold text-foreground">{n.label}</span>
          </motion.div>
        ))}

        <div className="absolute h-[232px] w-[232px] rounded-full border border-primary/15" />
      </div>
    </div>
  )
}

/* ── 04 · Ongoing Management — a line that keeps re-drawing ── */
export const ManageVisual = () => {
  const line = "M0 35 Q 10 34, 20 24 T 40 22 T 60 12 T 80 14 T 100 4"
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-50" style={dotBg} />
      <div className="absolute top-9 left-1/2 w-[80%] max-w-[300px] -translate-x-1/2 rounded-2xl border border-border bg-card p-5 shadow-xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-[11px] font-medium text-muted-foreground">Leads captured</p>
            <p className="font-heading text-lg font-bold text-foreground">+40 this month</p>
          </div>
          <span className="rounded-full bg-ok/10 px-2 py-0.5 text-[10px] font-bold text-ok">Live</span>
        </div>
        <div className="h-20 w-full">
          <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
            <motion.path
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.8 }}
              d={line}
              fill="none"
              stroke="#6d28d9"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <motion.path
              animate={{ opacity: [0, 0.14, 0.14, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              d={`${line} V 40 H 0 Z`}
              fill="#8b5cf6"
            />
          </svg>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute bottom-24 left-6 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-lg"
      >
        <span className="grid h-5 w-5 place-items-center rounded-full bg-ok text-white">
          <CheckCircle2 className="h-3 w-3" />
        </span>
        <span className="text-[11px] font-bold text-foreground">0 leads lost</span>
      </motion.div>
    </div>
  )
}
