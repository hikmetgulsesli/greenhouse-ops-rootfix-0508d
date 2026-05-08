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
      <nav className="bg-background dark:bg-background fixed top-0 w-full z-50 flex justify-between items-center px-lg h-16 border-b border-outline-variant dark:border-outline-variant">
      <div className="flex items-center gap-lg">
      <span className="font-h2 text-h2 text-on-surface dark:text-on-surface font-extrabold tracking-tight">Greenhouse Ops</span>
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
      <input className="bg-surface-container border border-outline-variant rounded-xl pl-10 pr-4 py-[6px] font-body-sm text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary w-72 transition-colors placeholder:text-on-surface-variant" placeholder="Search equipment..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm md:gap-md">
      <button className="text-on-surface-variant hover:bg-surface-variant p-sm rounded-full transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-variant p-sm rounded-full transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined">help</span>
      </button>
      <div className="w-[1px] h-8 bg-outline-variant mx-xs hidden md:block"></div>
      <button className="bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors font-body-sm text-body-sm px-md py-[8px] rounded-xl font-semibold flex items-center gap-xs ml-sm">
      <span className="material-symbols-outlined text-[18px]">warning</span>
      <span className="hidden md:inline">Emergency Stop</span>
      </button>
      </div>
      </nav>
      {/* SideNavBar */}
      <aside className="bg-surface-container dark:bg-surface-container fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-outline-variant dark:border-outline-variant hidden md:flex flex-col py-md z-40">
      {/* Header */}
      <div className="px-md mb-lg flex items-center gap-md">
      <img alt="System Status" className="w-10 h-10 rounded-full border border-outline-variant object-cover shrink-0" data-alt="A professional portrait of a greenhouse technician in a high-tech agricultural facility. The lighting is cool and slightly dramatic, emphasizing a modern, technical aesthetic. Deep shadows contrast with subtle blue and white highlights, matching a dark-mode, corporate industrial interface style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRdYHluq5RB0dICHW5V-fB-6RtVocRCk4d6Zp3aDzDlHKYbvb3XFNduZMCNGan00iettXidWm1v2IO3EFDqpA0m5nFuI04mR-VLLBYs0tX7tG1PvxchtxN8D1ZRqG6Xlx2W8CBlKDwmtFH74MhgmoYndDCMGh2K2hOzK7WA4LRtupnbYyVxatVNIlBXHI9P1MpcXsQJGwCD6x4nHlw39_mtqDYryADdhiyUswaPBIiyHtWZrgkHpHqJqSZDeUVyKeEnSPKM1D_c_Y" />
      <div className="overflow-hidden">
      <div className="font-h3 text-h3 text-primary dark:text-primary truncate">RootFix Console</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">Zone 04 - Active</div>
      </div>
      </div>
      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-[2px] px-sm overflow-y-auto">
      <a className="flex items-center gap-md px-md py-[10px] rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                      Dashboard
                  </a>
      <a className="flex items-center gap-md px-md py-[10px] rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
                      Task Board
                  </a>
      {/* Active Tab */}
      <a className="flex items-center gap-md px-md py-[10px] rounded-xl bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container font-semibold translate-x-1 transition-transform font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="flex items-center gap-md px-md py-[10px] rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">history</span>
                      Logs
                  </a>
      </nav>
      {/* Footer */}
      <div className="mt-auto flex flex-col gap-[2px] px-sm pt-md border-t border-outline-variant">
      <a className="flex items-center gap-md px-md py-[10px] rounded-xl text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">settings</span>
                      Settings
                  </a>
      <a className="flex items-center gap-md px-md py-[10px] rounded-xl text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm" href="#">
      <span className="material-symbols-outlined text-[20px]">person</span>
                      Account
                  </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="w-full md:ml-64 mt-16 h-[calc(100vh-64px)] overflow-y-auto bg-background p-md md:p-lg">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-lg">
      {/* Page Header */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-md">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface mb-xs">Equipment Status</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Live monitoring and diagnostic tools for Zone 04 hardware.</p>
      </div>
      <div className="flex gap-sm">
      <button className="bg-surface-container border border-outline-variant text-on-surface font-body-sm text-body-sm px-md py-[8px] rounded-xl hover:bg-surface-variant transition-colors flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">tune</span>
                              Filter View
                          </button>
      </div>
      </header>
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md md:gap-lg">
      {/* Card 1: HVAC Unit 01 */}
      <article className="bg-surface-container rounded-xl border border-outline-variant flex flex-col shadow-sm">
      <div className="p-[12px] border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-xl">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">air</span>
      <h3 className="font-h3 text-h3 text-on-surface">HVAC Unit 01</h3>
      </div>
      <div className="bg-primary/10 border border-primary/20 px-sm py-[2px] rounded-full flex items-center gap-[6px]">
      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_rgba(180,197,255,0.6)]"></span>
      <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Online</span>
      </div>
      </div>
      <div className="p-md flex-1 flex flex-col gap-md">
      <div className="grid grid-cols-2 gap-sm">
      <div className="bg-surface border border-outline-variant rounded-lg p-sm">
      <div className="font-body-sm text-body-sm text-on-surface-variant mb-[2px]">Output Temp</div>
      <div className="font-mono-data text-mono-data text-on-surface">22.4°C</div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-sm">
      <div className="font-body-sm text-body-sm text-on-surface-variant mb-[2px]">Fan Speed</div>
      <div className="font-mono-data text-mono-data text-on-surface">1400 RPM</div>
      </div>
      </div>
      <div className="mt-auto">
      <div className="flex justify-between items-end mb-xs">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Diagnostic Health</span>
      <span className="font-mono-data text-mono-data text-primary">92%</span>
      </div>
      <div className="h-2 w-full bg-surface border border-outline-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full transition-all duration-500" style={{width: "92%"}}></div>
      </div>
      </div>
      </div>
      <div className="p-md pt-0 flex gap-sm mt-auto">
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface font-body-sm text-body-sm px-md py-[8px] rounded-xl hover:bg-surface-variant transition-colors flex justify-center items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">list_alt</span> View Logs
                              </button>
      </div>
      </article>
      {/* Card 2: Irrigation Pump B */}
      <article className="bg-surface-container rounded-xl border border-outline-variant flex flex-col shadow-sm relative overflow-hidden">
      {/* Subtle background warning gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
      <div className="p-[12px] border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-xl relative z-10">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-tertiary text-[20px]">water_drop</span>
      <h3 className="font-h3 text-h3 text-on-surface">Irrigation Pump B</h3>
      </div>
      <div className="bg-tertiary/10 border border-tertiary/20 px-sm py-[2px] rounded-full flex items-center gap-[6px]">
      <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_6px_rgba(255,181,150,0.6)]"></span>
      <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">Maintenance</span>
      </div>
      </div>
      <div className="p-md flex-1 flex flex-col gap-md relative z-10">
      <div className="grid grid-cols-2 gap-sm">
      <div className="bg-surface border border-outline-variant rounded-lg p-sm">
      <div className="font-body-sm text-body-sm text-on-surface-variant mb-[2px]">Flow Rate</div>
      <div className="font-mono-data text-mono-data text-on-surface">0 L/min</div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-sm">
      <div className="font-body-sm text-body-sm text-on-surface-variant mb-[2px]">Pressure</div>
      <div className="font-mono-data text-mono-data text-on-surface">0.2 bar</div>
      </div>
      </div>
      <div className="mt-auto">
      <div className="flex justify-between items-end mb-xs">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Diagnostic Health</span>
      <span className="font-mono-data text-mono-data text-tertiary">65%</span>
      </div>
      <div className="h-2 w-full bg-surface border border-outline-variant rounded-full overflow-hidden">
      <div className="h-full bg-tertiary rounded-full transition-all duration-500" style={{width: "65%"}}></div>
      </div>
      </div>
      </div>
      <div className="p-md pt-0 flex gap-sm mt-auto relative z-10">
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface font-body-sm text-body-sm px-md py-[8px] rounded-xl hover:bg-surface-variant transition-colors flex justify-center items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">list_alt</span> View Logs
                              </button>
      <button className="flex-1 bg-primary text-on-primary font-body-sm text-body-sm px-md py-[8px] rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors flex justify-center items-center gap-xs shadow-sm">
      <span className="material-symbols-outlined text-[16px]">build</span> Quick Fix
                              </button>
      </div>
      </article>
      {/* Card 3: CO2 Injector */}
      <article className="bg-surface-container rounded-xl border border-error/30 flex flex-col shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
      <div className="p-[12px] border-b border-error/20 flex justify-between items-center bg-surface-container-low rounded-t-xl relative z-10">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-error text-[20px]">co2</span>
      <h3 className="font-h3 text-h3 text-on-surface">CO2 Injector</h3>
      </div>
      <div className="bg-error/10 border border-error/20 px-sm py-[2px] rounded-full flex items-center gap-[6px]">
      <span className="w-2 h-2 rounded-full bg-error shadow-[0_0_6px_rgba(255,180,171,0.6)]"></span>
      <span className="font-label-caps text-label-caps text-error uppercase tracking-wider">Offline</span>
      </div>
      </div>
      <div className="p-md flex-1 flex flex-col gap-md relative z-10">
      <div className="grid grid-cols-2 gap-sm">
      <div className="bg-surface border border-outline-variant rounded-lg p-sm">
      <div className="font-body-sm text-body-sm text-on-surface-variant mb-[2px]">Valve Status</div>
      <div className="font-mono-data text-mono-data text-error">CLOSED</div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-sm">
      <div className="font-body-sm text-body-sm text-on-surface-variant mb-[2px]">Tank Level</div>
      <div className="font-mono-data text-mono-data text-on-surface">12%</div>
      </div>
      </div>
      <div className="mt-auto">
      <div className="flex justify-between items-end mb-xs">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Diagnostic Health</span>
      <span className="font-mono-data text-mono-data text-error">0%</span>
      </div>
      <div className="h-2 w-full bg-surface border border-outline-variant rounded-full overflow-hidden">
      <div className="h-full bg-error rounded-full transition-all duration-500" style={{width: "2%"}}></div>
      </div>
      </div>
      </div>
      <div className="p-md pt-0 flex gap-sm mt-auto relative z-10">
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface font-body-sm text-body-sm px-md py-[8px] rounded-xl hover:bg-surface-variant transition-colors flex justify-center items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">list_alt</span> View Logs
                              </button>
      <button className="flex-1 bg-error text-on-error font-body-sm text-body-sm px-md py-[8px] rounded-xl hover:bg-error-container hover:text-on-error-container transition-colors flex justify-center items-center gap-xs shadow-sm">
      <span className="material-symbols-outlined text-[16px]">power_settings_new</span> Quick Fix
                              </button>
      </div>
      </article>
      {/* Card 4: Lighting Array 03 */}
      <article className="bg-surface-container rounded-xl border border-outline-variant flex flex-col shadow-sm">
      <div className="p-[12px] border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-xl">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">lightbulb</span>
      <h3 className="font-h3 text-h3 text-on-surface">Lighting Array 03</h3>
      </div>
      <div className="bg-primary/10 border border-primary/20 px-sm py-[2px] rounded-full flex items-center gap-[6px]">
      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_rgba(180,197,255,0.6)]"></span>
      <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Online</span>
      </div>
      </div>
      <div className="p-md flex-1 flex flex-col gap-md">
      <div className="grid grid-cols-2 gap-sm">
      <div className="bg-surface border border-outline-variant rounded-lg p-sm">
      <div className="font-body-sm text-body-sm text-on-surface-variant mb-[2px]">Intensity</div>
      <div className="font-mono-data text-mono-data text-on-surface">85%</div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-sm">
      <div className="font-body-sm text-body-sm text-on-surface-variant mb-[2px]">Spectrum</div>
      <div className="font-mono-data text-mono-data text-on-surface">Full</div>
      </div>
      </div>
      <div className="mt-auto">
      <div className="flex justify-between items-end mb-xs">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Diagnostic Health</span>
      <span className="font-mono-data text-mono-data text-primary">98%</span>
      </div>
      <div className="h-2 w-full bg-surface border border-outline-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full transition-all duration-500" style={{width: "98%"}}></div>
      </div>
      </div>
      </div>
      <div className="p-md pt-0 flex gap-sm mt-auto">
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface font-body-sm text-body-sm px-md py-[8px] rounded-xl hover:bg-surface-variant transition-colors flex justify-center items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">list_alt</span> View Logs
                              </button>
      </div>
      </article>
      </div>
      </div>
      </main>
    </>
  );
}
