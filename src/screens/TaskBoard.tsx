// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Task Board
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface TaskBoardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: unknown;
}

export function TaskBoard(_props: TaskBoardProps = {}) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface flex justify-between items-center w-full px-lg py-sm h-16 border-b border-outline-variant flat no shadows docked full-width top-0 z-50">
      <div className="flex items-center gap-md">
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hidden md:block">menu</span>
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Greenhouse Ops</div>
      </div>
      <div className="flex-1 max-w-md mx-lg hidden md:block">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-10 py-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container text-body-sm font-body-sm text-on-surface outline-none transition-colors" placeholder="Search tasks..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="bg-error text-on-error px-md py-sm rounded font-label-md text-label-md hover:bg-error-container transition-colors active:scale-95 duration-100 flex items-center gap-xs">
                      Emergency Stop
                  </button>
      <div className="flex items-center gap-sm">
      <button className="p-xs rounded hover:bg-surface-container-high transition-colors active:scale-95 duration-100">
      <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
      </button>
      <button className="p-xs rounded hover:bg-surface-container-high transition-colors active:scale-95 duration-100">
      <span className="material-symbols-outlined text-on-surface-variant">help</span>
      </button>
      </div>
      <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant ml-sm" data-alt="A small circular avatar portrait of an industrial facility operator with short dark hair, wearing a uniform. Set against a clean, dark high-tech background consistent with a modern control room UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnbgdhqUOwKKgPvnjRioXOdUTcOMRqlmwDInXs_j3IOxx5fs36WREkkOd4mqIPxEPLkeOKalD4hXAMyNgsIEOhNx9BsUvtZncXORmcvf87aee6ReoqyvO3SRLqHA-WFwr0SBUK5lrLj0dnTuOk9kgFDn0KAJ_q-dlG7KsAt8XbH35sv1g5XRbWmSHCrxsurpsvfuChU03Z1q2qYqtcTNK3U3P9Gu1BjlmTn-XhQbnj9PrZswz8ijJTPrqWNg9YzmwFy64qCncmHh0" />
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant flat no shadows docked h-screen left-0 w-60 flex flex-col h-full py-lg hidden md:flex shrink-0 z-40">
      <div className="px-lg mb-xl flex items-center gap-sm">
      <div className="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary">spa</span>
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Main Operations</h2>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Facility A1</p>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-xs px-md">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-primary font-bold border-r-2 border-primary bg-primary-container/10 transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined fill">assignment</span>
      <span className="font-label-md text-label-md">Task Board</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span className="font-label-md text-label-md">Equipment</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">database</span>
      <span className="font-label-md text-label-md">Logs</span>
      </a>
      </div>
      <div className="mt-auto flex flex-col gap-xs px-md pt-lg border-t border-outline-variant/50">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">account_circle</span>
      <span className="font-label-md text-label-md">Account</span>
      </a>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="flex-1 flex flex-col overflow-hidden bg-surface-container-lowest">
      {/* Board Header */}
      <div className="flex justify-between items-center px-lg py-md border-b border-outline-variant bg-surface-container-lowest shrink-0">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface">Operational Task Board</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage and track active maintenance and operational tasks across all zones.</p>
      </div>
      <button className="bg-primary-container text-on-primary-container px-lg py-sm rounded font-label-md text-label-md hover:bg-primary-fixed transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-container-lowest focus:ring-primary-container flex items-center gap-sm">
      <span className="material-symbols-outlined text-sm">add</span>
                          New Task
                      </button>
      </div>
      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto p-lg flex gap-lg">
      {/* Column: To Do */}
      <div className="flex flex-col w-80 shrink-0 bg-surface-container rounded-lg border border-outline-variant h-full max-h-full overflow-hidden">
      <div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">To Do</h3>
      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded font-mono-data text-mono-data text-xs">3</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Task Card */}
      <div className="bg-surface p-md rounded border border-outline-variant hover:border-outline cursor-grab transition-colors relative group">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-on-surface-variant text-xs">TS-104</span>
      <span className="bg-tertiary-container/20 text-tertiary px-2 py-0.5 rounded font-label-sm text-label-sm border border-tertiary/30">High</span>
      </div>
      <h4 className="font-body-lg text-body-lg text-on-surface mb-md">Replace LED Panel</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">Panel array B4 showing 15% efficiency drop. Requires immediate replacement to maintain DLI targets.</p>
      <div className="flex justify-between items-end border-t border-outline-variant pt-sm mt-auto">
      <div className="flex gap-xs items-center text-on-surface-variant">
      <span className="material-symbols-outlined text-sm">schedule</span>
      <span className="font-label-sm text-label-sm">Due Today</span>
      </div>
      <img alt="Operator" className="w-6 h-6 rounded-full border border-surface" data-alt="A very small circular avatar portrait of an industrial worker. The image is set against a dark, high-contrast background suitable for a dark-mode user interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYmvuKi3DBWgnapNs4UYxX1L7W23IQO2Mo_qLprKocWRNebqyGGjJoM3iNaRCEj6rGEhq_Nf3piVyAt0dGuBuvhC1Yg2O5UmXAkouKEVg7D7cphO48PmP9q0IfMvJid16qYCMj5l3cBavc4r99BcZ5zBm-u6mhOw99T3K1cAXN46mjLIG_PYRfNhnDJOzHpiMu0Ky9BHx3GvfzR6EBGD7CZWUirmbsxdANWNGRWeQdh4kJ-3GAmcLH8MMvO94cSAmQrAt_qiyFE20" />
      </div>
      </div>
      {/* Task Card */}
      <div className="bg-surface p-md rounded border border-outline-variant hover:border-outline cursor-grab transition-colors relative group">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-on-surface-variant text-xs">TS-105</span>
      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded font-label-sm text-label-sm border border-outline-variant/50">Normal</span>
      </div>
      <h4 className="font-body-lg text-body-lg text-on-surface mb-md">Calibrate CO2 Sensors</h4>
      <div className="flex justify-between items-end border-t border-outline-variant pt-sm mt-auto">
      <div className="flex gap-xs items-center text-on-surface-variant">
      <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
      <span className="font-label-sm text-label-sm">Zone C</span>
      </div>
      <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-xs border border-surface">JD</div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: In Progress */}
      <div className="flex flex-col w-80 shrink-0 bg-surface-container rounded-lg border border-outline-variant h-full max-h-full overflow-hidden">
      <div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">In Progress</h3>
      <span className="bg-primary-container/20 text-primary px-2 py-0.5 rounded font-mono-data text-mono-data text-xs border border-primary/30">2</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Task Card */}
      <div className="bg-surface p-md rounded border-l-2 border-l-primary border border-outline-variant shadow-[0_0_15px_rgba(37,99,235,0.05)] cursor-grab transition-colors relative group">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-on-surface-variant text-xs">TS-098</span>
      <span className="bg-error-container/20 text-error px-2 py-0.5 rounded font-label-sm text-label-sm border border-error/30 animate-pulse">Critical</span>
      </div>
      <h4 className="font-body-lg text-body-lg text-on-surface mb-md">Repair Irrigation Pump 2</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">Main line pressure dropped below threshold. Pump assembly requires tear-down and seal replacement.</p>
      <div className="flex justify-between items-end border-t border-outline-variant pt-sm mt-auto">
      <div className="flex gap-xs items-center text-primary">
      <span className="material-symbols-outlined text-sm animate-spin" style={{animationDuration: "3s"}}>sync</span>
      <span className="font-label-sm text-label-sm">Active 2h 15m</span>
      </div>
      <img alt="Operator" className="w-6 h-6 rounded-full border border-surface" data-alt="A very small circular avatar portrait of an engineer looking serious. Set against a dark, minimalistic background suitable for a dark-mode industrial application UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2g8Qx4WTV2vM1M1IPIf7OMin5WWJ1ap_PWy6XRnAb2HeeFh30XUGAOZ04Zdt0VEIML-Z584b6JQcPa3ZCRFyPF9JEp5gf4Lk5ZrMQZMCD5CyWXf7IGnOJTgqVZIt4qx1VrVDCAak9wkNZ77bJ_d0lgLMop9cDSpHeCeUUQs9OBZV6KRE6ZG5F-wwvpV0K-DQNwvuRGSe6IkOqHTdSVUhiEe_vwZPHLxzG_O-hnhiwPwIfgtCpq0U7MpGw5R3qfEPLwxU_840O-zw" />
      </div>
      </div>
      </div>
      </div>
      {/* Column: Delayed */}
      <div className="flex flex-col w-80 shrink-0 bg-surface-container rounded-lg border border-outline-variant h-full max-h-full overflow-hidden opacity-80">
      <div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
      <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Delayed</h3>
      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded font-mono-data text-mono-data text-xs">1</span>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Task Card */}
      <div className="bg-surface-dim p-md rounded border border-outline-variant/50 cursor-grab transition-colors relative group">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-outline text-xs">TS-085</span>
      <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded font-label-sm text-label-sm border border-outline-variant/50">Normal</span>
      </div>
      <h4 className="font-body-lg text-body-lg text-outline mb-md">Update Firmware - Node Cluster A</h4>
      <div className="bg-surface-container-high p-xs rounded mb-md flex items-center gap-xs border border-outline-variant/30">
      <span className="material-symbols-outlined text-on-surface-variant text-sm">warning</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Awaiting vendor patch</span>
      </div>
      <div className="flex justify-between items-end border-t border-outline-variant/30 pt-sm mt-auto">
      <div className="flex gap-xs items-center text-outline">
      <span className="material-symbols-outlined text-sm">event</span>
      <span className="font-label-sm text-label-sm">Postponed</span>
      </div>
      <div className="w-6 h-6 rounded-full bg-surface-container-highest text-outline flex items-center justify-center font-label-sm text-xs border border-surface-dim">SY</div>
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
