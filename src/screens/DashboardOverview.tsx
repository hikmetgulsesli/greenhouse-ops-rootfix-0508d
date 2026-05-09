// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Dashboard Overview
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface DashboardOverviewProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: unknown;
}

export function DashboardOverview(_props: DashboardOverviewProps = {}) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface flex justify-between items-center w-full px-lg py-sm h-16 border-b border-outline-variant docked full-width top-0 z-50">
      <div className="flex items-center gap-md">
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Greenhouse Ops</h1>
      </div>
      <div className="flex items-center gap-md">
      {/* Search Bar (on_left configuration logic adapted for top nav layout) */}
      <div className="hidden md:flex items-center bg-surface-container-low border border-outline-variant rounded-full px-sm py-xs focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container transition-all">
      <span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-xs">search</span>
      <input className="bg-transparent border-none text-body-md font-body-md text-on-surface placeholder-on-surface-variant focus:ring-0 p-0 w-48" placeholder="Search operations..." type="text" />
      </div>
      {/* Actions */}
      <button className="bg-error text-on-error px-md py-xs rounded hover:bg-error/90 active:scale-95 duration-100 font-label-md text-label-md flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">warning</span>
                      Emergency Stop
                  </button>
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-100 p-xs rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-100 p-xs rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">help</span>
      </button>
      <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant ml-sm">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A close-up portrait of a professional operator in a high-tech control room environment. The lighting is slightly dim, cool-toned, with subtle blue and green light reflections hinting at screen arrays off-camera. The mood is focused and serious, fitting an industrial minimal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs9SR2yjhPlXUNJYPNJKRixTWFb1-NFdbieWK3GWe9SwSMCM0Z6JwQ0sOmlD1jB6j3mmmNU_DKThEqsLPu7e49QdFY4b1G_i9ypN9M0dxdMQOZMe3rfjO2mE-nubBoncQTr_HZRcsyj0bwCZjZum1oewhoveBResDfGvfhGiwBKYiPHGLOdiz71bEXmVDfJyaXV4rx0svMSJ6XbDOv-e4yvqiEFrJVF03fhf4aB8b7tnstjL3zGezHEWAfAvQ4BlrB0srMGygfplM" />
      </div>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full py-lg bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant docked left-0 w-60 z-40">
      <div className="px-lg mb-lg flex items-center gap-sm">
      <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center border border-outline-variant text-primary">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Main Operations</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Facility A1</p>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-xs px-sm">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-primary font-bold border-r-2 border-primary bg-primary-container/10 hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                          Dashboard
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md" href="#">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
                          Task Board
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md" href="#">
      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                          Equipment
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md" href="#">
      <span className="material-symbols-outlined text-[20px]">database</span>
                          Logs
                      </a>
      </div>
      <div className="mt-auto flex flex-col gap-xs px-sm pt-md border-t border-outline-variant">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md" href="#">
      <span className="material-symbols-outlined text-[20px]">settings</span>
                          Settings
                      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md" href="#">
      <span className="material-symbols-outlined text-[20px]">account_circle</span>
                          Account
                      </a>
      </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-gutter md:p-margin-desktop bg-surface-container-lowest flex flex-col gap-lg">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Summary Cards Row (Spans full width) */}
      <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-gutter">
      {/* Total Tasks */}
      <div className="bg-surface rounded-lg p-md border border-outline-variant flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant">Total Tasks</span>
      <span className="material-symbols-outlined text-primary text-[20px]">task_alt</span>
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface font-mono-data mt-auto">142</div>
      </div>
      {/* Active Equipment */}
      <div className="bg-surface rounded-lg p-md border border-outline-variant flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant">Active Equipment</span>
      <span className="material-symbols-outlined text-primary text-[20px]">power</span>
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface font-mono-data mt-auto">38<span className="text-on-surface-variant text-body-lg">/40</span></div>
      </div>
      {/* System Health */}
      <div className="bg-surface rounded-lg p-md border border-outline-variant flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant">System Health</span>
      <span className="material-symbols-outlined text-primary text-[20px]">monitor_heart</span>
      </div>
      <div className="flex items-end gap-sm mt-auto">
      <div className="font-headline-lg text-headline-lg text-primary font-mono-data">98%</div>
      <div className="h-2 flex-1 bg-surface-container-highest rounded-full mb-2 overflow-hidden">
      <div className="h-full bg-primary rounded-full w-[98%]"></div>
      </div>
      </div>
      </div>
      {/* Pending Maintenance */}
      <div className="bg-surface rounded-lg p-md border border-outline-variant flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant">Pending Maintenance</span>
      <span className="material-symbols-outlined text-tertiary text-[20px]">build</span>
      </div>
      <div className="font-headline-lg text-headline-lg text-tertiary font-mono-data mt-auto">04</div>
      </div>
      </div>
      {/* Main Telemetry & Alerts Area */}
      <div className="md:col-span-8 flex flex-col gap-gutter">
      {/* System Alerts */}
      <div className="bg-surface rounded-lg border border-outline-variant flex flex-col h-full">
      <div className="p-md border-b border-surface-container-high flex justify-between items-center bg-surface-container-low/50 rounded-t-lg">
      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-xs">
      <span className="material-symbols-outlined text-error text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                                      System Alerts
                                  </h3>
      <button className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors">Acknowledge All</button>
      </div>
      <div className="p-md flex flex-col gap-sm">
      {/* Critical Alert */}
      <div className="bg-error/10 border border-error/30 rounded-lg p-md flex items-start gap-md">
      <div className="bg-error/20 p-sm rounded text-error flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">water_drop</span>
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-start">
      <h4 className="font-body-lg font-bold text-error">Pump P-02 Failure</h4>
      <span className="font-mono-data text-label-sm text-error/80">09:42:15</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Pressure drop detected in Zone 04 main irrigation line. Flow rate at 0 L/m. Immediate inspection required.</p>
      <div className="mt-sm flex gap-sm">
      <button className="bg-error text-on-error px-sm py-xs rounded font-label-md text-label-md hover:bg-error/90 transition-colors">Isolate Pump</button>
      <button className="bg-transparent border border-error/50 text-error px-sm py-xs rounded font-label-md text-label-md hover:bg-error/10 transition-colors">View Diagnostics</button>
      </div>
      </div>
      </div>
      {/* Warning Alert */}
      <div className="bg-tertiary/10 border border-tertiary/30 rounded-lg p-md flex items-start gap-md">
      <div className="bg-tertiary/20 p-sm rounded text-tertiary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">thermostat</span>
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-start">
      <h4 className="font-body-lg font-bold text-tertiary">Temp Drift Detected</h4>
      <span className="font-mono-data text-label-sm text-tertiary/80">10:15:00</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Zone 02 temperature is +1.5°C above optimal threshold. Vent systems compensating.</p>
      </div>
      </div>
      </div>
      </div>
      {/* Recent Activity Table */}
      <div className="bg-surface rounded-lg border border-outline-variant flex flex-col">
      <div className="p-md border-b border-surface-container-high bg-surface-container-low/50 rounded-t-lg">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Activity</h3>
      </div>
      <div className="w-full overflow-x-auto">
      <table className="w-full text-left">
      <thead className="bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">
      <tr>
      <th className="px-md py-sm font-medium">Time</th>
      <th className="px-md py-sm font-medium">Event</th>
      <th className="px-md py-sm font-medium">Location</th>
      <th className="px-md py-sm font-medium">Status</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm text-on-surface">
      <tr className="border-b border-surface-container-high hover:bg-surface-container-low transition-colors">
      <td className="px-md py-sm font-mono-data text-on-surface-variant">10:30:22</td>
      <td className="px-md py-sm">Nutrient Mix Cycle Complete</td>
      <td className="px-md py-sm">Tank A</td>
      <td className="px-md py-sm">
      <span className="inline-flex items-center gap-xs text-primary bg-primary/10 px-sm py-xs rounded-full font-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Success
                                                  </span>
      </td>
      </tr>
      <tr className="border-b border-surface-container-high hover:bg-surface-container-low transition-colors">
      <td className="px-md py-sm font-mono-data text-on-surface-variant">10:15:00</td>
      <td className="px-md py-sm">Ventilation Louvers Open</td>
      <td className="px-md py-sm">Zone 02</td>
      <td className="px-md py-sm">
      <span className="inline-flex items-center gap-xs text-tertiary bg-tertiary/10 px-sm py-xs rounded-full font-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Actioned
                                                  </span>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-low transition-colors">
      <td className="px-md py-sm font-mono-data text-on-surface-variant">09:00:00</td>
      <td className="px-md py-sm">Scheduled Maintenance Started</td>
      <td className="px-md py-sm">LED Array C</td>
      <td className="px-md py-sm">
      <span className="inline-flex items-center gap-xs text-secondary-fixed bg-secondary-fixed/10 px-sm py-xs rounded-full font-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span> In Progress
                                                  </span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      {/* Side Widget Area */}
      <div className="md:col-span-4 flex flex-col gap-gutter">
      {/* Zone 04 Environment Widget */}
      <div className="bg-surface rounded-lg border border-outline-variant flex flex-col relative overflow-hidden">
      {/* Abstract Glassmorphism Background Element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="p-md border-b border-surface-container-high flex justify-between items-center z-10 relative">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Zone 04 Environment</h3>
      <button className="text-on-surface-variant hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </div>
      <div className="p-md flex flex-col gap-md z-10 relative">
      {/* Temp Gauge */}
      <div className="bg-surface-container-low rounded p-md flex items-center justify-between border border-surface-container-high">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary text-[24px]">device_thermostat</span>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Temperature</span>
      <span className="font-mono-data text-headline-md text-on-surface">24.5°C</span>
      </div>
      </div>
      <div className="text-right">
      <span className="font-label-sm text-label-sm text-primary flex items-center justify-end gap-xs">
      <span className="material-symbols-outlined text-[16px]">arrow_drop_up</span>
                                              0.2°
                                          </span>
      <span className="font-label-sm text-label-sm text-on-surface-variant block mt-xs">Target: 24.0°</span>
      </div>
      </div>
      {/* Humidity Gauge */}
      <div className="bg-surface-container-low rounded p-md flex items-center justify-between border border-surface-container-high">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary text-[24px]">humidity_percentage</span>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Humidity</span>
      <span className="font-mono-data text-headline-md text-on-surface">68%</span>
      </div>
      </div>
      <div className="text-right">
      <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-end gap-xs">
      <span className="material-symbols-outlined text-[16px]">horizontal_rule</span>
                                              Stable
                                          </span>
      <span className="font-label-sm text-label-sm text-on-surface-variant block mt-xs">Target: 65%</span>
      </div>
      </div>
      {/* Mini Chart Placeholder */}
      <div className="mt-sm h-24 bg-surface-container-lowest border border-surface-container-high rounded relative flex items-end px-2 pb-2 pt-4">
      <div className="absolute top-2 left-2 font-label-sm text-label-sm text-on-surface-variant">24h Trend</div>
      <div className="w-full flex justify-between items-end h-full gap-1">
      {/* Pseudo bars for chart */}
      <div className="w-full bg-primary/20 hover:bg-primary/40 rounded-t h-[40%] transition-colors"></div>
      <div className="w-full bg-primary/20 hover:bg-primary/40 rounded-t h-[45%] transition-colors"></div>
      <div className="w-full bg-primary/20 hover:bg-primary/40 rounded-t h-[50%] transition-colors"></div>
      <div className="w-full bg-primary/40 hover:bg-primary/60 rounded-t h-[65%] transition-colors"></div>
      <div className="w-full bg-primary/60 hover:bg-primary/80 rounded-t h-[60%] transition-colors"></div>
      <div className="w-full bg-primary/40 hover:bg-primary/60 rounded-t h-[55%] transition-colors"></div>
      <div className="w-full bg-primary/80 hover:bg-primary rounded-t h-[75%] transition-colors"></div>
      <div className="w-full bg-primary hover:bg-primary-fixed rounded-t h-[70%] transition-colors relative">
      <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-primary rounded-full transform -translate-x-1/2 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
