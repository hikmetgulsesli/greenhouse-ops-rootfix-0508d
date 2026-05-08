// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Settings
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface SettingsProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: unknown;
}

export function Settings(_props: SettingsProps = {}) {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-lg h-16 bg-background border-b border-outline-variant">
      <div className="flex items-center gap-margin w-1/3">
      <span className="font-h2 text-h2 text-on-surface">Greenhouse Ops</span>
      <div className="relative flex-1 hidden md:block">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
      <input className="w-full bg-surface-container border border-outline-variant rounded-full py-xs pl-xl pr-md text-body-sm font-body-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Search operations..." type="text" />
      </div>
      </div>
      <div className="flex items-center justify-end gap-md w-1/3">
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors hover:opacity-80 active:scale-95 transition-all">
      <span className="material-symbols-outlined text-[20px]">notifications</span>
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors hover:opacity-80 active:scale-95 transition-all">
      <span className="material-symbols-outlined text-[20px]">help</span>
      </button>
      <button className="bg-error-container text-on-error-container border border-error border-opacity-30 rounded-lg px-md py-xs font-h3 text-body-sm hover:opacity-80 active:scale-95 transition-all hidden lg:block">
                      Emergency Stop
                  </button>
      <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden ml-sm shrink-0">
      <img alt="Operator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9GEUwlA4cDFLioftgPLUhWrhHV4hzLCS1keftrJDtPE3veWMOiGx4epYLajjWi_Ob3Uxx619IfDqspkWgaZlWPO_1-4sRqj206hFYSsSXHEJXjcsuXZsKlfjbBw6gh71leVM2Ticnu4-kGrNitTpLtpyfDnxn_iJ0PEaZmoxuP8wOuGWfZe4E25kUiZutQP__g-lS5v2vXmFeMO0yC8XSsghhVli8sI0TY8p9w8KR0qYR1Rslefp3Yn4ZN0PFUWHAmNJIdt_BRyI" />
      </div>
      </div>
      </nav>
      <div className="flex flex-1 pt-16">
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-surface-container border-r border-outline-variant hidden md:flex flex-col py-md z-40">
      <div className="px-md mb-xl flex items-center gap-sm">
      <div className="w-10 h-10 rounded-lg bg-surface-variant border border-outline-variant flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-primary fill text-[24px]">spa</span>
      </div>
      <div className="flex flex-col overflow-hidden">
      <span className="font-h3 text-h3 text-primary truncate">RootFix Console</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Zone 04 - Active</span>
      </div>
      </div>
      <nav className="flex-1 px-sm space-y-unit">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                          Dashboard
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
                          Task Board
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                          Equipment
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">history</span>
                          Logs
                      </a>
      </nav>
      <div className="px-sm space-y-unit mt-auto">
      <a className="flex items-center gap-md px-md py-sm rounded-lg bg-secondary-container text-on-secondary-container font-semibold font-body-sm text-body-sm translate-x-1 transition-transform" href="#">
      <span className="material-symbols-outlined text-[20px] fill">settings</span>
                          Settings
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">person</span>
                          Account
                      </a>
      </div>
      </aside>
      <main className="flex-1 md:ml-64 p-margin lg:p-xl max-w-5xl mx-auto w-full">
      <header className="mb-lg">
      <h1 className="font-h1 text-h1 text-on-surface">Settings</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Manage your operational preferences and system configurations.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-margin">
      <section className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden flex flex-col">
      <div className="p-md border-b border-outline-variant bg-surface-container-highest bg-opacity-30">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
      <h2 className="font-h3 text-h3 text-on-surface">General</h2>
      </div>
      </div>
      <div className="p-md flex flex-col gap-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">System Units</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Measurement standards for telemetry data.</span>
      </div>
      <div className="relative min-w-[160px]">
      <select className="w-full bg-surface border border-outline-variant text-body-sm font-body-sm rounded-lg py-sm pl-md pr-xl text-on-surface focus:border-primary focus:ring-1 focus:ring-primary appearance-none outline-none transition-colors">
      <option value="metric">Metric (Celsius, L)</option>
      <option value="imperial">Imperial (Fahrenheit, Gal)</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
      </div>
      </div>
      <div className="w-full h-px bg-outline-variant opacity-50"></div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">Timezone</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Default timezone for system logs.</span>
      </div>
      <div className="relative min-w-[160px]">
      <select className="w-full bg-surface border border-outline-variant text-body-sm font-body-sm rounded-lg py-sm pl-md pr-xl text-on-surface focus:border-primary focus:ring-1 focus:ring-primary appearance-none outline-none transition-colors">
      <option value="utc">UTC (Coordinated Universal Time)</option>
      <option value="local">Local System Time</option>
      <option value="est">EST (Eastern Standard Time)</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
      </div>
      </div>
      </div>
      </section>
      <section className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden flex flex-col">
      <div className="p-md border-b border-outline-variant bg-surface-container-highest bg-opacity-30">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary text-[20px]">palette</span>
      <h2 className="font-h3 text-h3 text-on-surface">Theme</h2>
      </div>
      </div>
      <div className="p-md flex flex-col gap-md">
      <div className="flex items-center justify-between gap-md h-full py-sm">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">Dark Mode</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Force high-contrast dark interface.</span>
      </div>
      <button aria-checked={true} className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-primary-container" role="switch" type="button">
      <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-on-primary-container shadow ring-0 transition duration-200 ease-in-out translate-x-5"></span>
      </button>
      </div>
      </div>
      </section>
      <section className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden flex flex-col lg:col-span-2">
      <div className="p-md border-b border-outline-variant bg-surface-container-highest bg-opacity-30">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary text-[20px]">database</span>
      <h2 className="font-h3 text-h3 text-on-surface">Persistence</h2>
      </div>
      </div>
      <div className="p-md flex flex-col lg:flex-row lg:items-center gap-margin">
      <div className="flex-1 bg-surface rounded-lg border border-outline-variant p-md flex flex-col sm:flex-row sm:items-center justify-between gap-md">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">Export Data</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Download all configuration and local logs as CSV.</span>
      </div>
      <button className="bg-surface-variant text-on-surface border border-outline-variant hover:bg-surface-container-highest transition-colors rounded-lg px-md py-sm font-body-sm text-body-sm flex items-center justify-center gap-sm shrink-0 active:scale-95">
      <span className="material-symbols-outlined text-[18px]">download</span>
                                      Export CSV
                                  </button>
      </div>
      <div className="flex-1 bg-error-container bg-opacity-10 rounded-lg border border-error border-opacity-30 p-md flex flex-col sm:flex-row sm:items-center justify-between gap-md">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-error-container">Clear Storage</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Permanently wipe local cache and temporary files.</span>
      </div>
      <button className="bg-transparent text-error border border-error hover:bg-error hover:bg-opacity-10 transition-colors rounded-lg px-md py-sm font-body-sm text-body-sm flex items-center justify-center gap-sm shrink-0 active:scale-95">
      <span className="material-symbols-outlined text-[18px]">delete</span>
                                      Clear Data
                                  </button>
      </div>
      </div>
      </section>
      </div>
      </main>
      </div>
    </>
  );
}
