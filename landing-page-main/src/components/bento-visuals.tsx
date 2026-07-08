"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  Plus, 
  Check, 
  PieChart, 
  Layout, 
  Zap, 
  Users, 
  Palette, 
  Code, 
  Search,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

/**
 * Quick Delivery Visual
 * Testimonial card + Graph dashboard
 */
export const DeliveryVisual = () => (
  <div className="relative h-full w-full bg-transparent overflow-hidden">
    {/* Testimonial Card */}
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="absolute top-10 left-6 z-20 w-48 rounded-2xl bg-white dark:bg-neutral-800 p-4 shadow-xl border border-neutral-100 dark:border-neutral-700"
    >
      <div className="flex gap-2 mb-2">
        <div className="h-6 w-6 rounded-full bg-neutral-200" />
        <div className="flex-1">
          <div className="h-2 w-12 bg-neutral-100 dark:bg-neutral-700 rounded mb-1" />
          <div className="h-1.5 w-8 bg-neutral-50 dark:bg-neutral-600 rounded" />
        </div>
      </div>
      <p className="text-[10px] text-neutral-500 line-clamp-2">
        "Clean design, fast delivery and great communication..."
      </p>
    </motion.div>

    {/* Graph Dashboard */}
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="absolute top-8 right-[-10%] z-10 w-72 rounded-3xl bg-neutral-900 dark:bg-black p-6 shadow-2xl border border-neutral-800"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-neutral-400 text-xs font-medium">+ 40 new clients</p>
          <p className="text-white text-lg font-bold">Growth metrics</p>
        </div>
        <Plus className="text-neutral-500 h-4 w-4" />
      </div>
      
      {/* Turquoise Graph Mockup */}
      <div className="relative h-24 w-full flex items-end gap-1">
        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2,
              repeatType: "loop"
            }}
            d="M0 35 Q 10 35, 20 20 T 40 25 T 60 10 T 80 15 T 100 5"
            fill="none"
            stroke="#2dd4bf"
            strokeWidth="2"
          />
          <motion.path
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 0.1 }}
            d="M0 35 Q 10 35, 20 20 T 40 25 T 60 10 T 80 15 T 100 5 V 40 H 0 Z"
            fill="#2dd4bf"
          />
        </svg>
      </div>
      <p className="text-neutral-500 text-[10px] mt-4">Over the last month</p>
    </motion.div>

    {/* Background dots */}
    <div className="absolute inset-0 opacity-20 pointer-events-none" 
      style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
    />
  </div>
);

/**
 * Custom-Made Design Visual
 * Orbit diagram with satellite elements
 */
export const CustomDesignVisual = () => {
  const satellites = [
    { icon: <Palette className="h-3 w-3" />, label: "Visual design", angle: 0 },
    { icon: <Layout className="h-3 w-3" />, label: "Structure", angle: 72 },
    { icon: <Users className="h-3 w-3" />, label: "UX Strategy", angle: 144 },
    { icon: <PieChart className="h-3 w-3" />, label: "Analytics", angle: 216 },
    { icon: <Search className="h-3 w-3" />, label: "Wireframing", angle: 288 },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center bg-transparent overflow-hidden">
      {/* Central Hub */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="h-20 w-20 rounded-full border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-800 flex items-center justify-center shadow-lg">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="h-12 w-12 rounded-full border border-dashed border-neutral-300 dark:border-neutral-600"
          />
        </div>
        
        {/* Satellites */}
        {satellites.map((sat, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-sm whitespace-nowrap"
            style={{
              x: Math.cos((sat.angle * Math.PI) / 180) * 120,
              y: Math.sin((sat.angle * Math.PI) / 180) * 120,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="text-neutral-900 dark:text-white">{sat.icon}</span>
            <span className="text-[10px] font-medium text-neutral-500">{sat.label}</span>
          </motion.div>
        ))}

        {/* Orbit Rings */}
        <div className="absolute h-[240px] w-[240px] rounded-full border border-neutral-200 dark:border-neutral-800 opacity-50" />
      </div>
    </div>
  );
};

/**
 * Built to Scale Visual
 * Vertical checklist stack
 */
export const ScaleVisual = () => (
  <div className="relative h-full w-full bg-transparent flex flex-col items-center justify-center pt-20">
    <div className="w-full max-w-xs space-y-4 px-8">
      {[
        { title: "Adjusting color scheme", status: "Completed", time: "just now", icon: <Palette className="h-4 w-4" /> },
        { title: "Resizing components", status: "Active", time: "10 min ago", icon: <Layout className="h-4 w-4" /> },
        { title: "Published new section", status: "Updated", time: "3 hours ago", icon: <Code className="h-4 w-4" /> },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            delay: i * 0.15,
            repeat: Infinity,
            repeatDelay: 2.5,
            repeatType: "reverse"
          }}
          className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-start gap-3"
        >
          <div className="mt-1 flex-shrink-0">
            {i === 0 ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <div className="h-4 w-4 rounded-full border border-neutral-300 dark:border-neutral-600" />}
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-neutral-400 font-medium mb-1">{item.time}</p>
            <p className="text-xs font-bold text-neutral-900 dark:text-white">{item.title}</p>
            {i === 0 && <p className="text-[10px] text-emerald-500 font-bold mt-1">✓ {item.status}</p>}
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Dark overlay to simulate bottom depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-50/80 dark:to-neutral-900/80 pointer-events-none" />
  </div>
);

/**
 * Transparent Pricing Visual
 * Envelope with pricing card
 */
export const PricingVisual = () => (
  <div className="relative h-full w-full bg-transparent flex items-center justify-center overflow-hidden">
    {/* Envelope Back */}
    <div className="relative w-64 h-48 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-inner flex items-center justify-center">
      {/* Pricing Card Sliding Up */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: -40 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: "reverse"
        }}
        className="z-10 w-48 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-100 dark:border-neutral-700 p-5 rotate-[-2deg]"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-700 animate-pulse" />
          <div className="h-3 w-20 bg-neutral-100 dark:bg-neutral-700 rounded" />
        </div>
        <div className="space-y-2 mb-6">
          <div className="flex justify-between items-end">
            <span className="text-2xl font-black text-neutral-900 dark:text-white">$2,500</span>
            <span className="text-[10px] font-bold text-neutral-400">1 week</span>
          </div>
          <p className="text-[10px] text-neutral-500">Design + Development package</p>
        </div>
        <div className="h-8 w-full bg-neutral-900 dark:bg-white rounded-lg" />
      </motion.div>
      
      {/* Front of envelope pieces */}
      <div className="absolute left-0 bottom-0 w-full h-24 bg-neutral-200 dark:bg-neutral-700 rounded-b-lg clip-path-envelope z-20" 
           style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 0)' }} />
    </div>
  </div>
);

/**
 * Landing Pages Visual
 * Mini browser mockup with hero assembly
 */
export const LandingPageVisual = () => (
  <div className="relative h-full w-full bg-transparent flex items-center justify-center pt-10">
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-[85%] h-full bg-white dark:bg-neutral-900 rounded-t-2xl border-x-2 border-t-2 border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden"
    >
      {/* Browser Bar */}
      <div className="h-8 w-full bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 flex items-center px-4 gap-1.5">
        <div className="h-2 w-2 rounded-full bg-red-400" />
        <div className="h-2 w-2 rounded-full bg-amber-400" />
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>
      
      {/* Content Mockup */}
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="h-4 w-24 bg-neutral-100 dark:bg-neutral-800 rounded" />
          <div className="flex gap-4">
            <div className="h-2 w-10 bg-neutral-100 dark:bg-neutral-800 rounded" />
            <div className="h-2 w-10 bg-neutral-100 dark:bg-neutral-800 rounded" />
          </div>
        </div>
        
        <div className="space-y-3 pt-4">
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="h-8 w-2/3 bg-neutral-900 dark:bg-white rounded origin-left" 
          />
          <div className="h-4 w-full bg-neutral-100 dark:bg-neutral-800 rounded" />
          <div className="h-4 w-3/4 bg-neutral-100 dark:bg-neutral-800 rounded" />
        </div>
        
        <div className="flex gap-3">
          <div className="h-10 w-28 bg-neutral-200 dark:bg-neutral-700 rounded-lg" />
          <div className="h-10 w-28 border-2 border-neutral-100 dark:border-neutral-800 rounded-lg" />
        </div>
      </div>
    </motion.div>
  </div>
);

/**
 * Dashboards Visual
 * Real-time data visualization
 */
export const DashboardVisual = () => (
  <div className="relative h-full w-full bg-transparent flex items-center justify-center p-8 pt-16">
    <div className="grid grid-cols-2 gap-4 w-full h-full max-w-sm">
      {/* Main Chart */}
      <motion.div 
        className="col-span-2 h-32 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 shadow-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ repeat: Infinity, repeatDelay: 2, repeatType: "reverse" }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="h-2 w-16 bg-neutral-200 dark:bg-neutral-700 rounded" />
          <Zap className="h-3 w-3 text-amber-500" />
        </div>
        <div className="flex items-end gap-1 h-12">
          {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-neutral-900 dark:bg-white rounded-t-sm"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Pulse Card 1 */}
      <div className="h-24 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 flex flex-col justify-between">
        <Users className="h-4 w-4 text-emerald-500" />
        <div>
          <div className="h-1 w-8 bg-neutral-100 dark:bg-neutral-800 rounded mb-2" />
          <div className="h-3 w-12 bg-neutral-900 dark:bg-white rounded" />
        </div>
      </div>
      
      {/* Pulse Card 2 */}
      <div className="h-24 bg-neutral-900 dark:bg-black rounded-2xl border border-neutral-800 p-4 flex flex-col justify-between shadow-2xl">
        <TrendingUp className="h-4 w-4 text-white" />
        <div>
          <div className="h-1 w-8 bg-neutral-700 rounded mb-2" />
          <div className="h-3 w-12 bg-white rounded" />
        </div>
      </div>
    </div>
  </div>
);

/**
 * Deployment Visual
 * Terminal-style deployment flow
 */
export const DeploymentVisual = () => (
  <div className="relative h-full w-full bg-transparent flex items-center justify-center p-8 pt-16">
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-xs aspect-video bg-neutral-950 rounded-xl border border-neutral-800 p-4 font-mono shadow-2xl relative overflow-hidden"
    >
      <div className="flex gap-1.5 mb-3">
        <div className="h-2 w-2 rounded-full bg-neutral-800" />
        <div className="h-2 w-2 rounded-full bg-neutral-800" />
        <div className="h-2 w-2 rounded-full bg-neutral-800" />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-emerald-500 text-[10px]">$</span>
          <span className="text-neutral-400 text-[10px]">npm run deploy</span>
        </div>
        <div className="space-y-1">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="text-neutral-500 text-[9px]"
          >
            [1/3] Building assets...
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            className="text-neutral-500 text-[9px]"
          >
            [2/3] Uploading to edge...
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
            className="text-emerald-400 text-[9px] flex items-center gap-1"
          >
            <Check className="h-2 w-2" /> [3/3] Deployment successful
          </motion.div>
        </div>
      </div>
      
      {/* Animated glow */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-10 -right-10 h-32 w-32 bg-emerald-500/20 blur-3xl rounded-full"
      />
    </motion.div>
  </div>
);

/**
 * Maintenance Visual
 * Security shield and pulse
 */
export const MaintenanceVisual = () => (
  <div className="relative h-full w-full bg-transparent flex items-center justify-center pt-10">
    <div className="relative flex items-center justify-center">
      {/* Central Shield */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-10 h-24 w-24 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-xl"
      >
        <div className="h-12 w-12 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-emerald-500" />
        </div>
      </motion.div>
      
      {/* Outer Pulse Rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: i * 0.6,
            ease: "easeOut"
          }}
          className="absolute h-24 w-24 rounded-full border border-neutral-400 dark:border-neutral-600"
        />
      ))}
      
      {/* Stats Tags */}
      <motion.div 
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="absolute top-0 right-[-60%] bg-white dark:bg-neutral-800 px-3 py-1.5 rounded-full border border-neutral-100 dark:border-neutral-700 shadow-sm flex items-center gap-2"
      >
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-bold dark:text-white">99.9% Uptime</span>
      </motion.div>
      
      <motion.div 
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="absolute bottom-0 left-[-60%] bg-white dark:bg-neutral-800 px-3 py-1.5 rounded-full border border-neutral-100 dark:border-neutral-700 shadow-sm flex items-center gap-2"
      >
        <span className="text-[10px] font-bold dark:text-white">SSL Secure</span>
      </motion.div>
    </div>
  </div>
);
