// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Equipment Status
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";
import type { AppState, EquipmentItem } from "../types/domain";

export interface EquipmentStatusProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: AppState;
}

const staticEquipment: EquipmentItem[] = [
  { id: "E-101", name: "HVAC Unit 01", status: "online", zone: "Zone A", lastMaintenance: "2024-04-15", health: 92 },
  { id: "E-102", name: "Irrigation Pump B", status: "maintenance", zone: "Zone C", lastMaintenance: "2024-03-20", health: 65 },
  { id: "E-103", name: "CO2 Injector", status: "offline", zone: "Zone D", lastMaintenance: "2024-02-10", health: 0 },
  { id: "E-104", name: "Lighting Array 03", status: "online", zone: "Zone B", lastMaintenance: "2024-04-28", health: 98 },
];

function statusColor(status: EquipmentItem["status"]) {
  switch (status) {
    case "online": return { bg: "bg-primary/10", border: "border-primary/20", dot: "bg-primary", text: "text-primary", label: "Online" };
    case "offline": return { bg: "bg-error/10", border: "border-error/20", dot: "bg-error", text: "text-error", label: "Offline" };
    case "maintenance": return { bg: "bg-tertiary/10", border: "border-tertiary/20", dot: "bg-tertiary", text: "text-tertiary", label: "Maintenance" };
    case "error": return { bg: "bg-error/10", border: "border-error/20", dot: "bg-error", text: "text-error", label: "Error" };
  }
}

export function EquipmentStatus(_props: EquipmentStatusProps = {}) {
  const { onNavigate, onAction, state } = _props;
  const [search, setSearch] = useState(state?.searchQuery ?? "");
  const equipment = state?.equipment?.length ? state.equipment : staticEquipment;
  const filtered = search ? equipment.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()) || e.zone.toLowerCase().includes(search.toLowerCase())) : equipment;

  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-background dark:bg-background fixed top-0 w-full z-50 flex justify-between items-center px-lg h-16 border-b border-outline-variant dark:border-outline-variant">
      <div className="flex items-center gap-lg">
      <span className="font-h2 text-h2 text-on-surface dark:text-on-surface font-extrabold tracking-tight">Greenhouse Ops</span>
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
      <input value={search} onChange={(e) => setSearch(e.target.value)} className="bg-surface-container border border-outline-variant rounded-xl pl-10 pr-4 py-[6px] font-body-sm text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary w-72 transition-colors placeholder:text-on-surface-variant" placeholder="Search equipment..." type="text" />
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
      <button onClick={() => onNavigate?.("dashboard")} className="w-full text-left flex items-center gap-md px-md py-[10px] rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                      Dashboard
                  </button>
      <button onClick={() => onNavigate?.("task-board")} className="w-full text-left flex items-center gap-md px-md py-[10px] rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
                      Task Board
                  </button>
      {/* Active Tab */}
      <button onClick={() => onNavigate?.("equipment")} className="w-full text-left flex items-center gap-md px-md py-[10px] rounded-xl bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container font-semibold translate-x-1 transition-transform font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>precision_manufacturing</span>
                      Equipment
                  </button>
      <button onClick={() => onNavigate?.("logs")} className="w-full text-left flex items-center gap-md px-md py-[10px] rounded-xl text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[20px]">history</span>
                      Logs
                  </button>
      </nav>
      {/* Footer */}
      <div className="mt-auto flex flex-col gap-[2px] px-sm pt-md border-t border-outline-variant">
      <button onClick={() => onNavigate?.("settings")} className="w-full text-left flex items-center gap-md px-md py-[10px] rounded-xl text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[20px]">settings</span>
                      Settings
                  </button>
      <button onClick={() => onAction?.("toggle-profile")} className="w-full text-left flex items-center gap-md px-md py-[10px] rounded-xl text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[20px]">person</span>
                      Account
                  </button>
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
      <button onClick={() => onNavigate?.("filtered")} className="bg-surface-container border border-outline-variant text-on-surface font-body-sm text-body-sm px-md py-[8px] rounded-xl hover:bg-surface-variant transition-colors flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">tune</span>
                              Filter View
                          </button>
      </div>
      </header>
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md md:gap-lg">
      {filtered.map((item) => {
        const s = statusColor(item.status);
        return (
          <article key={item.id} className="bg-surface-container rounded-xl border border-outline-variant flex flex-col shadow-sm relative overflow-hidden">
          {item.status === "offline" && <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>}
          {item.status === "maintenance" && <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>}
          <div className="p-[12px] border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-xl relative z-10">
          <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">{item.status === "online" ? "air" : item.status === "maintenance" ? "water_drop" : item.status === "offline" ? "co2" : "lightbulb"}</span>
          <h3 className="font-h3 text-h3 text-on-surface">{item.name}</h3>
          </div>
          <div className={`${s.bg} border ${s.border} px-sm py-[2px] rounded-full flex items-center gap-[6px]`}>
          <span className={`w-2 h-2 rounded-full ${s.dot} shadow-[0_0_6px_rgba(180,197,255,0.6)]`}></span>
          <span className={`font-label-caps text-label-caps ${s.text} uppercase tracking-wider`}>{s.label}</span>
          </div>
          </div>
          <div className="p-md flex-1 flex flex-col gap-md relative z-10">
          <div className="grid grid-cols-2 gap-sm">
          <div className="bg-surface border border-outline-variant rounded-lg p-sm">
          <div className="font-body-sm text-body-sm text-on-surface-variant mb-[2px]">Zone</div>
          <div className="font-mono-data text-mono-data text-on-surface">{item.zone}</div>
          </div>
          <div className="bg-surface border border-outline-variant rounded-lg p-sm">
          <div className="font-body-sm text-body-sm text-on-surface-variant mb-[2px]">Last Maint.</div>
          <div className="font-mono-data text-mono-data text-on-surface">{item.lastMaintenance}</div>
          </div>
          </div>
          <div className="mt-auto">
          <div className="flex justify-between items-end mb-xs">
          <span className="font-body-sm text-body-sm text-on-surface-variant">Diagnostic Health</span>
          <span className={`font-mono-data text-mono-data ${s.text}`}>{item.health}%</span>
          </div>
          <div className="h-2 w-full bg-surface border border-outline-variant rounded-full overflow-hidden">
          <div className={`h-full ${s.status === "offline" ? "bg-error" : s.status === "maintenance" ? "bg-tertiary" : "bg-primary"} rounded-full transition-all duration-500`} style={{width: `${item.health}%`}}></div>
          </div>
          </div>
          </div>
          <div className="p-md pt-0 flex gap-sm mt-auto relative z-10">
          <button onClick={() => onNavigate?.("logs")} className="flex-1 bg-transparent border border-outline-variant text-on-surface font-body-sm text-body-sm px-md py-[8px] rounded-xl hover:bg-surface-variant transition-colors flex justify-center items-center gap-xs">
          <span className="material-symbols-outlined text-[16px]">list_alt</span> View Logs
                              </button>
          {item.status !== "online" && (
          <button onClick={() => onAction?.("quick-fix", item.id)} className="flex-1 bg-primary text-on-primary font-body-sm text-body-sm px-md py-[8px] rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors flex justify-center items-center gap-xs shadow-sm">
          <span className="material-symbols-outlined text-[16px]">build</span> Quick Fix
                              </button>
          )}
          </div>
          </article>
        );
      })}
      </div>
      </div>
      </main>
    </>
  );
}
