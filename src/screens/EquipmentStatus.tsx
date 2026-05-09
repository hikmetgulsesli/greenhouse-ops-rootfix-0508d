// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Equipment Status
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface EquipmentStatusProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: unknown;
}

export function EquipmentStatus(_props: EquipmentStatusProps = {}) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-surface text-primary dark:text-primary font-body-md text-body-md flex justify-between items-center w-full px-lg py-sm h-16 border-b border-outline-variant flat no shadows docked full-width top-0 z-50 shrink-0">
      <div className="flex items-center gap-md">
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Greenhouse Ops</span>
      </div>
      <div className="flex-1 max-w-md mx-lg hidden md:block">
      <div className="relative w-full">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded text-on-surface placeholder:text-on-surface-variant pl-xl pr-sm py-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition-colors font-body-sm text-body-sm" placeholder="Search operations..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded active:scale-95 duration-100 flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded active:scale-95 duration-100 flex items-center justify-center">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button className="bg-error text-white font-label-md text-label-md px-md py-sm rounded hover:bg-error-container hover:text-on-error-container transition-colors active:scale-95 duration-100 ml-sm flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">warning</span>
                      Emergency Stop
                  </button>
      <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant ml-sm overflow-hidden">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A small, circular headshot of a professional user in a dark grey background. The lighting is studio quality, highlighting the face. The overall aesthetic is clean, corporate, and fits seamlessly into a dark mode high-tech dashboard environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPEZ-UFFXjU-uMmb2_8exh0ySTl4gAip4mYUHGw5hnXco-PVncfvEORvo_P1FPkJDIos_5Sjy1usbp_zejIafEPN8sMa0ZTDSRKpMLi9YW_ZSNltPQu2rwQTpIRAJ8UWFQeOJmjY7N6uf5hN-09Jaoe7LHws3Q1unYrLWmuSHFAUoPQUJZWjcnzVa7O6p_icyoZnRB-MtI2q8Rxme6X0ybJQpqERmOxH6yRzLnpvKDbDmtNKqeqJ8gTMkVSy65IVljmOsIlwh4vLA" />
      </div>
      </div>
      </nav>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <aside className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-label-md text-label-md border-r border-outline-variant flat no shadows flex flex-col h-full py-lg docked h-screen left-0 w-60 shrink-0 hidden md:flex">
      <div className="px-md mb-xl flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center border border-primary-container/30">
      <span className="material-symbols-outlined text-primary fill">grass</span>
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface m-0 leading-tight">Main Operations</h2>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Facility A1</span>
      </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-sm flex flex-col gap-unit">
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">dashboard</span>
                          Dashboard
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">assignment</span>
                          Task Board
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-primary font-bold border-r-2 border-primary bg-primary-container/10 hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined fill">precision_manufacturing</span>
                          Equipment
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">database</span>
                          Logs
                      </a>
      </nav>
      <div className="px-sm mt-auto flex flex-col gap-unit pt-md border-t border-outline-variant/50">
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">settings</span>
                          Settings
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">account_circle</span>
                          Account
                      </a>
      </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-margin-desktop bg-surface-container-lowest">
      <header className="mb-lg flex justify-between items-end">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface m-0 mb-unit">Equipment Status</h1>
      <p className="font-body-md text-body-md text-on-surface-variant m-0">Real-time telemetry and diagnostics for Facility A1.</p>
      </div>
      <div className="flex gap-sm">
      <button className="bg-surface border border-outline-variant text-on-surface font-label-md text-label-md px-md py-sm rounded hover:bg-surface-container-high transition-colors flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">filter_list</span>
                              Filter
                          </button>
      <button className="bg-primary-container text-white font-label-md text-label-md px-md py-sm rounded hover:bg-primary-fixed-variant transition-colors flex items-center gap-xs shadow-[0_0_15px_rgba(37,99,235,0.15)] focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-container-lowest focus:ring-primary-container outline-none">
      <span className="material-symbols-outlined text-[18px]">add</span>
                              Register Device
                          </button>
      </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-gutter">
      {/* HVAC Unit 01 */}
      <article className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col gap-md relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110 duration-500"></div>
      <div className="flex justify-between items-start z-10">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded bg-surface-container-highest border border-outline-variant flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">mode_fan</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface m-0">HVAC Unit 01</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Climate Control</span>
      </div>
      </div>
      <div className="bg-primary/10 text-primary border border-primary/20 px-sm py-unit rounded flex items-center gap-xs font-label-sm text-label-sm">
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                  Online
                              </div>
      </div>
      <div className="grid grid-cols-2 gap-sm z-10">
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-sm flex flex-col gap-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Output Temp</span>
      <span className="font-mono-data text-mono-data text-on-surface">22.4 °C</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-sm flex flex-col gap-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Fan Speed</span>
      <span className="font-mono-data text-mono-data text-on-surface">1850 RPM</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-sm flex flex-col gap-unit col-span-2">
      <div className="flex justify-between items-end mb-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Power Draw</span>
      <span className="font-mono-data text-mono-data text-on-surface">4.2 kW</span>
      </div>
      {/* Mini trendline placeholder */}
      <div className="h-8 w-full border-b border-primary/30 relative flex items-end">
      <div className="w-1/6 h-full border-t border-primary/50 relative top-[2px]"></div>
      <div className="w-1/6 h-[80%] border-t border-primary/50 relative top-[2px]"></div>
      <div className="w-1/6 h-[90%] border-t border-primary/50 relative top-[2px]"></div>
      <div className="w-1/6 h-[70%] border-t border-primary/50 relative top-[2px]"></div>
      <div className="w-1/6 h-[85%] border-t border-primary/50 relative top-[2px]"></div>
      <div className="w-1/6 h-[60%] border-t border-primary relative top-[2px]"></div>
      </div>
      </div>
      </div>
      <div className="mt-auto flex flex-col gap-sm z-10">
      <div>
      <div className="flex justify-between items-center mb-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Diagnostic Health</span>
      <span className="font-mono-data text-mono-data text-primary">98%</span>
      </div>
      <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-primary w-[98%]"></div>
      </div>
      </div>
      <div className="flex gap-sm mt-sm">
      <button className="flex-1 bg-surface-container-highest border border-outline-variant text-on-surface font-label-md text-label-md py-sm rounded hover:bg-surface-bright transition-colors">Quick Fix</button>
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-sm rounded hover:bg-surface-container-highest transition-colors">View Logs</button>
      </div>
      </div>
      </article>
      {/* Irrigation Pump B */}
      <article className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col gap-md relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#eab308]/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110 duration-500"></div>
      <div className="flex justify-between items-start z-10">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded bg-surface-container-highest border border-outline-variant flex items-center justify-center text-[#eab308]">
      <span className="material-symbols-outlined">water_pump</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface m-0">Irrigation Pump B</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Hydration System</span>
      </div>
      </div>
      <div className="bg-[#eab308]/10 text-[#eab308] border border-[#eab308]/20 px-sm py-unit rounded flex items-center gap-xs font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-[14px]">build</span>
                                  Maintenance
                              </div>
      </div>
      <div className="grid grid-cols-2 gap-sm z-10">
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-sm flex flex-col gap-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Flow Rate</span>
      <span className="font-mono-data text-mono-data text-on-surface">0 L/m</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-sm flex flex-col gap-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Line Pressure</span>
      <span className="font-mono-data text-mono-data text-on-surface">12 PSI</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-sm flex flex-col gap-unit col-span-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Maintenance Note</span>
      <span className="font-body-sm text-body-sm text-on-surface">Scheduled impeller replacement. ETA completion: 14:00.</span>
      </div>
      </div>
      <div className="mt-auto flex flex-col gap-sm z-10">
      <div>
      <div className="flex justify-between items-center mb-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Diagnostic Health</span>
      <span className="font-mono-data text-mono-data text-[#eab308]">45%</span>
      </div>
      <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-[#eab308] w-[45%]"></div>
      </div>
      </div>
      <div className="flex gap-sm mt-sm">
      <button className="flex-1 bg-surface-container-highest border border-outline-variant text-on-surface font-label-md text-label-md py-sm rounded hover:bg-surface-bright transition-colors disabled:opacity-50" disabled={true}>Quick Fix</button>
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-sm rounded hover:bg-surface-container-highest transition-colors">View Logs</button>
      </div>
      </div>
      </article>
      {/* CO2 Injector */}
      <article className="bg-surface border border-error/50 rounded-lg p-md flex flex-col gap-md relative overflow-hidden group shadow-[0_0_15px_rgba(220,38,38,0.05)]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110 duration-500"></div>
      <div className="flex justify-between items-start z-10">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded bg-error-container border border-error/30 flex items-center justify-center text-error">
      <span className="material-symbols-outlined">co2</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface m-0">CO2 Injector</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Atmosphere</span>
      </div>
      </div>
      <div className="bg-error/10 text-error border border-error/20 px-sm py-unit rounded flex items-center gap-xs font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-[14px]">error</span>
                                  Offline
                              </div>
      </div>
      <div className="grid grid-cols-2 gap-sm z-10">
      <div className="bg-surface-container-lowest border border-error/30 rounded p-sm flex flex-col gap-unit relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
      <span className="font-label-sm text-label-sm text-error ml-xs">Tank Level</span>
      <span className="font-mono-data text-mono-data text-on-surface ml-xs">Empty</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-sm flex flex-col gap-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Valve Status</span>
      <span className="font-mono-data text-mono-data text-on-surface">Closed</span>
      </div>
      <div className="bg-surface-container-lowest border border-error/30 rounded p-sm flex flex-col gap-unit col-span-2 text-error">
      <div className="flex items-center gap-xs mb-unit">
      <span className="material-symbols-outlined text-[16px]">warning</span>
      <span className="font-label-sm text-label-sm">Error Code: E-404-TNK</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface">Primary supply tank depleted. Secondary valve failed to open.</span>
      </div>
      </div>
      <div className="mt-auto flex flex-col gap-sm z-10">
      <div>
      <div className="flex justify-between items-center mb-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Diagnostic Health</span>
      <span className="font-mono-data text-mono-data text-error">12%</span>
      </div>
      <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-error w-[12%]"></div>
      </div>
      </div>
      <div className="flex gap-sm mt-sm">
      <button className="flex-1 bg-error text-white font-label-md text-label-md py-sm rounded hover:bg-error-container hover:text-on-error-container transition-colors shadow-[0_0_10px_rgba(220,38,38,0.2)]">Quick Fix</button>
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-sm rounded hover:bg-surface-container-highest transition-colors">View Logs</button>
      </div>
      </div>
      </article>
      {/* Lighting Array 03 */}
      <article className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col gap-md relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110 duration-500"></div>
      <div className="flex justify-between items-start z-10">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded bg-surface-container-highest border border-outline-variant flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">lightbulb</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface m-0">Lighting Array 03</h3>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Supplemental</span>
      </div>
      </div>
      <div className="bg-primary/10 text-primary border border-primary/20 px-sm py-unit rounded flex items-center gap-xs font-label-sm text-label-sm">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
                                  Online
                              </div>
      </div>
      <div className="grid grid-cols-2 gap-sm z-10">
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-sm flex flex-col gap-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Intensity</span>
      <span className="font-mono-data text-mono-data text-on-surface">85%</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-sm flex flex-col gap-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Spectrum</span>
      <span className="font-mono-data text-mono-data text-on-surface">Full Bloom</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-sm flex flex-col gap-unit col-span-2">
      <div className="flex justify-between items-center mb-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Schedule</span>
      <span className="font-label-sm text-label-sm text-primary">06:00 - 22:00</span>
      </div>
      <div className="w-full h-1 flex rounded overflow-hidden">
      <div className="w-[25%] bg-surface-bright"></div>
      <div className="w-[66%] bg-primary"></div>
      <div className="w-[9%] bg-surface-bright"></div>
      </div>
      </div>
      </div>
      <div className="mt-auto flex flex-col gap-sm z-10">
      <div>
      <div className="flex justify-between items-center mb-unit">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Diagnostic Health</span>
      <span className="font-mono-data text-mono-data text-primary">100%</span>
      </div>
      <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-primary w-[100%]"></div>
      </div>
      </div>
      <div className="flex gap-sm mt-sm">
      <button className="flex-1 bg-surface-container-highest border border-outline-variant text-on-surface font-label-md text-label-md py-sm rounded hover:bg-surface-bright transition-colors">Quick Fix</button>
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-sm rounded hover:bg-surface-container-highest transition-colors">View Logs</button>
      </div>
      </div>
      </article>
      </div>
      </main>
      </div>
    </>
  );
}
