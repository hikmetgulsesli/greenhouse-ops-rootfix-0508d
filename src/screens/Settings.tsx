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
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary font-body-md text-body-md docked full-width top-0 z-50 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-lg py-sm h-16">
      <div className="flex items-center gap-md">
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Greenhouse Ops</span>
      </div>
      <div className="flex-1 max-w-md mx-lg hidden md:block">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-body-lg">search</span>
      <input className="w-full bg-surface-container-low border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary pl-10 pr-sm py-sm text-body-md text-on-surface placeholder:text-on-surface-variant transition-all" placeholder="Search..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded active:scale-95 duration-100 flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded active:scale-95 duration-100 flex items-center justify-center">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button className="bg-error text-on-error px-md py-sm rounded font-label-md text-label-md hover:bg-error-container transition-colors active:scale-95 duration-100 hidden sm:block">
                      Emergency Stop
                  </button>
      <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface-variant">person</span>
      </div>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-label-md text-label-md docked h-full left-0 w-60 border-r border-outline-variant flat no shadows flex flex-col py-lg hidden md:flex shrink-0">
      <div className="px-md mb-xl flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-primary-container/20 border border-primary/30 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary">eco</span>
      </div>
      <div>
      <div className="font-headline-sm text-headline-sm text-on-surface leading-tight">Main Operations</div>
      <div className="text-on-surface-variant text-label-sm font-label-sm">Facility A1</div>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-unit px-sm">
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span>Dashboard</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">assignment</span>
      <span>Task Board</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span>Equipment</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">database</span>
      <span>Logs</span>
      </a>
      </div>
      <div className="mt-auto flex flex-col gap-unit px-sm">
      <a className="flex items-center gap-md px-md py-sm rounded text-primary font-bold border-r-2 border-primary bg-primary-container/10 transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span>Settings</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">account_circle</span>
      <span>Account</span>
      </a>
      </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-margin-desktop bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto flex flex-col gap-xl">
      <header>
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Settings</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">Configure system parameters and data persistence protocols.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* General Settings */}
      <section className="md:col-span-12 bg-surface border border-outline-variant rounded-lg p-lg">
      <div className="flex items-center gap-md mb-lg border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary">tune</span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">General</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      <div className="flex flex-col gap-sm">
      <label className="font-label-md text-label-md text-on-surface-variant">System Units</label>
      <select className="bg-surface-container-lowest border border-outline-variant rounded p-sm text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none w-full appearance-none">
      <option>Metric (Celsius, Liters)</option>
      <option>Imperial (Fahrenheit, Gallons)</option>
      <option>Scientific (Kelvin, Cubic Meters)</option>
      </select>
      </div>
      <div className="flex flex-col gap-sm">
      <label className="font-label-md text-label-md text-on-surface-variant">Timezone</label>
      <select className="bg-surface-container-lowest border border-outline-variant rounded p-sm text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none w-full appearance-none">
      <option>UTC (Coordinated Universal Time)</option>
      <option>PST (Pacific Standard Time)</option>
      <option>EST (Eastern Standard Time)</option>
      </select>
      </div>
      </div>
      </section>
      {/* Theme Settings */}
      <section className="md:col-span-5 bg-surface border border-outline-variant rounded-lg p-lg flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-md mb-lg border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary">dark_mode</span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Theme</h2>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-lg">Force dark mode for low-light environments. Recommended for console operators.</p>
      </div>
      <div className="flex items-center justify-between p-md bg-surface-container-low border border-outline-variant rounded">
      <span className="font-body-md text-body-md text-on-surface">Dark Mode Enforced</span>
      <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer border border-primary flex items-center px-1">
      <div className="w-4 h-4 bg-surface rounded-full absolute right-1"></div>
      </div>
      </div>
      </section>
      {/* Persistence Settings */}
      <section className="md:col-span-7 bg-surface border border-outline-variant rounded-lg p-lg">
      <div className="flex items-center gap-md mb-lg border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary">storage</span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Persistence</h2>
      </div>
      <div className="flex flex-col gap-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md p-md bg-surface-container-low border border-outline-variant rounded">
      <div>
      <h3 className="font-label-md text-label-md text-on-surface mb-unit">Export Telemetry Data</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Download local operational logs as CSV.</p>
      </div>
      <button className="bg-transparent border border-outline-variant text-on-surface px-md py-sm rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-sm shrink-0">
      <span className="material-symbols-outlined text-body-lg">download</span>
                                          Export Data
                                      </button>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md p-md bg-surface-container-low border border-error/30 rounded">
      <div>
      <h3 className="font-label-md text-label-md text-error mb-unit">Clear Local Storage</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Purge cached sensor states. Requires restart.</p>
      </div>
      <button className="bg-error text-on-error px-md py-sm rounded font-label-md text-label-md hover:bg-error-container transition-colors flex items-center gap-sm shrink-0">
      <span className="material-symbols-outlined text-body-lg">delete_forever</span>
                                          Clear Storage
                                      </button>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
