// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Dashboard Overview
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";
import type { AppState } from "../types/domain";

export interface DashboardOverviewProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: AppState;
}

export function DashboardOverview(props: DashboardOverviewProps = {}) {
  const { onNavigate, onAction, state } = props;
  const search = state?.searchQuery ?? "";

  const totalTasks = state?.tasks?.length ?? 0;
  const activeEquipment = state?.equipment?.filter(e => e.status === "online").length ?? 0;
  const totalEquipment = state?.equipment?.length ?? 0;
  const pendingMaint = state?.equipment?.filter(e => e.status === "maintenance" || e.status === "error" || e.status === "offline").length ?? 0;
  const offlineCount = totalEquipment - activeEquipment;
  const criticalCount = state?.tasks?.filter(t => t.priority === "critical" && t.status !== "complete").length ?? 0;

  const systemHealth = totalEquipment > 0
    ? Math.round(state!.equipment.reduce((sum, e) => sum + e.health, 0) / totalEquipment)
    : 98;

  const unacknowledgedAlerts = state?.alerts?.filter(a => !a.acknowledged) ?? [];

  return (
    <>
      {/* TopNavBar */}
      <header className="bg-background text-primary font-body-md text-body-md fixed top-0 w-full z-50 flex justify-between items-center px-lg h-16 border-b border-outline-variant">
      <div className="flex items-center gap-md">
      <span className="font-h2 text-h2 text-on-surface">Greenhouse Ops</span>
      </div>
      <div className="flex items-center gap-lg">
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input value={search} onChange={(e) => onAction?.("set-search", e.target.value)} className="bg-surface border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-on-surface pl-[36px] py-2 text-body-sm w-64 placeholder:text-on-surface-variant" placeholder="Search..." type="text" />
      </div>
      <div className="flex items-center gap-sm">
      <button disabled aria-label="Notifications" title="Notifications not available" className="p-2 text-on-surface-variant hover:bg-surface-variant transition-colors rounded">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button disabled aria-label="Help" title="Help not available" className="p-2 text-on-surface-variant hover:bg-surface-variant transition-colors rounded">
      <span className="material-symbols-outlined">help</span>
      </button>
      </div>
      <button onClick={() => onAction?.('emergency-stop')} className="bg-error text-on-error border border-error px-4 py-2 rounded font-body-sm text-body-sm hover:bg-error/90 transition-colors">
                      Emergency Stop
                  </button>
      <img onClick={() => onAction?.("toggle-profile")} alt="Operator Profile" className="w-8 h-8 rounded-full border border-outline-variant cursor-pointer" data-alt="A small circular profile picture of an operator, styled for a dark-themed corporate dashboard. Minimalist lighting, professional headshot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvNE3_fpBxQzscYQ4tuwBoYG6ZlFsuQ1wDbiOe9giNzuVOJCgFGStO-Y5o-haSV73P668EITzCz3ctrRwmZ_-RAqOmRvshx0rg397_P92UaYo6GeR6b59P-L0I_tL_mbir-Y0NJzmrPD8YMKlIyLirQaNia1oNJG5pDigUySMMh-0GUx38gpejEXP85um_sb08A7B94d2Y5SZ2eS1qnJJAisBE8x-nMwowVMAUp8tlMEDlvwF0ZkGG522ZFVEH-YHxu2V-KnTMYew" />
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="bg-surface-container text-primary font-body-sm text-body-sm fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-outline-variant flex flex-col py-md z-40 hidden md:flex">
      <div className="px-md mb-xl flex items-center gap-sm">
      <div className="w-10 h-10 rounded bg-primary-container text-on-primary-container flex items-center justify-center">
      <span className="material-symbols-outlined">psychiatry</span>
      </div>
      <div>
      <div className="font-h3 text-h3 text-primary">RootFix Console</div>
      <p className="text-on-surface-variant text-label-caps font-label-caps uppercase mt-1">Zone 04 - Active</p>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-1 px-sm">
      {/* Dashboard (Active) */}
      <button onClick={() => onNavigate?.("dashboard")} className="flex items-center gap-md px-md py-3 rounded bg-secondary-container text-on-secondary-container font-semibold opacity-80 scale-95 transition-all translate-x-1 w-full text-left">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
                      Dashboard
                  </button>
      {/* Task Board */}
      <button onClick={() => onNavigate?.("task-board")} className="flex items-center gap-md px-md py-3 rounded text-on-surface-variant hover:bg-surface-variant transition-colors w-full text-left">
      <span className="material-symbols-outlined">assignment</span>
                      Task Board
                  </button>
      {/* Equipment */}
      <button onClick={() => onNavigate?.("equipment")} className="flex items-center gap-md px-md py-3 rounded text-on-surface-variant hover:bg-surface-variant transition-colors w-full text-left">
      <span className="material-symbols-outlined">precision_manufacturing</span>
                      Equipment
                  </button>
      {/* Logs */}
      <button onClick={() => onNavigate?.("logs")} className="flex items-center gap-md px-md py-3 rounded text-on-surface-variant hover:bg-surface-variant transition-colors w-full text-left">
      <span className="material-symbols-outlined">history</span>
                      Logs
                  </button>
      </div>
      <div className="mt-auto flex flex-col gap-1 px-sm border-t border-outline-variant pt-md">
      {/* Settings */}
      <button onClick={() => onNavigate?.("settings")} className="flex items-center gap-md px-md py-3 rounded text-on-surface-variant hover:bg-surface-variant transition-colors w-full text-left">
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </button>
      {/* Account */}
      <button onClick={() => onAction?.("toggle-profile")} className="flex items-center gap-md px-md py-3 rounded text-on-surface-variant hover:bg-surface-variant transition-colors w-full text-left">
      <span className="material-symbols-outlined">person</span>
                      Account
                  </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-16 min-h-screen p-lg flex flex-col gap-lg">
      {/* Header Actions */}
      <div className="flex justify-between items-end">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">System Overview</h1>
      <p className="text-on-surface-variant font-body-sm text-body-sm mt-1">Real-time monitoring for Zone 04.</p>
      </div>
      <div className="flex gap-md">
      <button onClick={() => onAction?.("schedule-maintenance")} className="border border-outline-variant text-on-surface bg-transparent px-4 py-2 rounded h-10 hover:bg-surface-variant transition-colors font-body-sm text-body-sm flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                          Schedule Maintenance
                      </button>
      <button onClick={() => onAction?.("new-task")} className="bg-primary-container text-on-primary-container px-4 py-2 rounded h-10 hover:bg-primary/90 transition-colors font-body-sm text-body-sm flex items-center gap-2 shadow-[0_4px_12px_rgba(37,99,235,0.2)]">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          New Task
                      </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg auto-rows-min">
      {/* Summary Cards Row (Span full, grid internally) */}
      <div className="col-span-1 md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {/* Total Tasks */}
      <div className="bg-surface rounded-xl border border-outline-variant p-md relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start mb-lg relative z-10">
      <span className="text-on-surface-variant font-body-sm text-body-sm">Total Tasks</span>
      <span className="material-symbols-outlined text-primary">assignment</span>
      </div>
      <div className="font-mono-data text-[32px] leading-none text-on-surface font-semibold relative z-10">{totalTasks}</div>
      <div className="mt-2 text-primary font-body-sm text-body-sm flex items-center gap-1 relative z-10">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
      <span>+12% this week</span>
      </div>
      </div>
      {/* Active Equipment */}
      <div className="bg-surface rounded-xl border border-outline-variant p-md relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start mb-lg relative z-10">
      <span className="text-on-surface-variant font-body-sm text-body-sm">Active Equipment</span>
      <span className="material-symbols-outlined text-secondary">precision_manufacturing</span>
      </div>
      <div className="font-mono-data text-[32px] leading-none text-on-surface font-semibold relative z-10">{activeEquipment}<span className="text-on-surface-variant text-h2 font-h2">/{totalEquipment}</span></div>
      <div className="mt-2 text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1 relative z-10">
      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
      <span>{totalEquipment - activeEquipment} Offline</span>
      </div>
      </div>
      {/* System Health */}
      <div className="bg-surface rounded-xl border border-outline-variant p-md relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start mb-lg relative z-10">
      <span className="text-on-surface-variant font-body-sm text-body-sm">System Health</span>
      <span className="material-symbols-outlined text-primary">health_and_safety</span>
      </div>
      <div className="flex items-end gap-2 relative z-10">
      <div className="font-mono-data text-[32px] leading-none text-on-surface font-semibold">{systemHealth}<span className="text-h2 font-h2">%</span></div>
      </div>
      {/* Mini progress bar */}
      <div className="w-full bg-surface-variant h-1 mt-4 rounded-full relative z-10">
      <div className="bg-primary h-1 rounded-full" style={{width: `${systemHealth}%`}}></div>
      </div>
      </div>
      {/* Pending Maintenance */}
      <div className="bg-surface rounded-xl border border-outline-variant p-md relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start mb-lg relative z-10">
      <span className="text-on-surface-variant font-body-sm text-body-sm">Pending Maint.</span>
      <span className="material-symbols-outlined text-tertiary">build</span>
      </div>
      <div className="font-mono-data text-[32px] leading-none text-on-surface font-semibold relative z-10">{String(pendingMaint).padStart(2, "0")}</div>
      <div className="mt-2 text-tertiary font-body-sm text-body-sm flex items-center gap-1 relative z-10">
      <span className="material-symbols-outlined text-[14px]">warning</span>
      <span>{criticalCount} Critical</span>
      </div>
      </div>
      </div>
      {/* Left Column: System Alerts & Activity (Span 8) */}
      <div className="col-span-1 md:col-span-8 flex flex-col gap-lg">
      {/* System Alerts Widget */}
      <div className="bg-surface rounded-xl border border-outline-variant flex flex-col h-[300px]">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-xl">
      <h2 className="font-h3 text-h3 text-on-surface">System Alerts</h2>
      <button onClick={() => onAction?.("acknowledge-all")} className="text-primary font-body-sm text-body-sm hover:underline">Acknowledge All</button>
      </div>
      <div className="p-md flex-1 overflow-y-auto flex flex-col gap-sm">
      {unacknowledgedAlerts.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-on-surface-variant font-body-sm">No active alerts</div>
      ) : (
        unacknowledgedAlerts.map((alert) => (
          <div key={alert.id} className={`${alert.type === "error" ? "bg-error/5 border-error/20" : alert.type === "warning" ? "bg-tertiary/5 border-tertiary/20" : "bg-surface-variant border-outline-variant"} border p-md rounded flex items-start gap-md`}>
          <span className={`material-symbols-outlined mt-0.5 ${alert.type === "error" ? "text-error" : alert.type === "warning" ? "text-tertiary" : "text-primary"}`}>{alert.type === "error" ? "error" : alert.type === "warning" ? "warning" : "info"}</span>
          <div className="flex-1">
          <div className="flex justify-between items-start">
          <span className={`font-h3 text-h3 ${alert.type === "error" ? "text-error" : alert.type === "warning" ? "text-tertiary" : "text-on-surface"}`}>{alert.title}</span>
          <span className="text-on-surface-variant text-label-caps font-label-caps">{alert.time}</span>
          </div>
          <p className="text-on-surface-variant font-body-sm text-body-sm mt-1">{alert.message}</p>
          <div className="mt-sm flex gap-2 relative z-10">
          <button onClick={() => onAction?.("acknowledge-alert", alert.id)} className="text-primary font-body-sm text-body-sm hover:underline relative z-10">Acknowledge</button>
          <button onClick={() => onAction?.("dismiss-alert", alert.id)} className="text-on-surface-variant font-body-sm text-body-sm hover:text-on-surface relative z-10">Dismiss</button>
          </div>
          </div>
          </div>
        ))
      )}
      </div>
      </div>
      {/* Recent Activity Feed */}
      <div className="bg-surface rounded-xl border border-outline-variant">
      <div className="p-md border-b border-outline-variant bg-surface-container-low rounded-t-xl">
      <h2 className="font-h3 text-h3 text-on-surface">Recent Activity</h2>
      </div>
      <div className="p-0">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-outline-variant">
      <th className="py-3 px-md font-body-sm text-body-sm text-on-surface-variant font-medium">Timestamp</th>
      <th className="py-3 px-md font-body-sm text-body-sm text-on-surface-variant font-medium">Event</th>
      <th className="py-3 px-md font-body-sm text-body-sm text-on-surface-variant font-medium">Operator</th>
      <th className="py-3 px-md font-body-sm text-body-sm text-on-surface-variant font-medium">Status</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm text-on-surface">
      {(state?.logs ?? []).slice(0, 5).map((log) => (
        <tr key={log.id} className="border-b border-outline-variant hover:bg-surface-variant/50 transition-colors">
        <td className="py-3 px-md font-mono-data text-on-surface-variant">{log.timestamp}</td>
        <td className="py-3 px-md">{log.action}</td>
        <td className="py-3 px-md">{log.operator}</td>
        <td className="py-3 px-md">
        <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${log.status === "success" ? "bg-[#10b981]" : log.status === "failed" ? "bg-error" : "bg-primary"}`}></span>
                                                  {log.status === "success" ? "Success" : log.status === "failed" ? "Failed" : "Complete"}
                                              </div>
        </td>
        </tr>
      ))}
      </tbody>
      </table>
      </div>
      </div>
      </div>
      {/* Right Column: Quick Stats / Context (Span 4) */}
      <div className="col-span-1 md:col-span-4 flex flex-col gap-lg">
      {/* Environmental Context Card (Glassmorphism inspired, dense) */}
      <div className="bg-surface rounded-xl border border-outline-variant p-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
      <div className="relative z-10">
      <h2 className="font-h3 text-h3 text-on-surface mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">eco</span>
                                  Zone 04 Environment
                              </h2>
      <div className="grid grid-cols-2 gap-sm">
      <div className="bg-surface-container p-sm rounded border border-outline-variant flex flex-col items-center justify-center py-4">
      <span className="material-symbols-outlined text-on-surface-variant mb-1">thermostat</span>
      <span className="font-mono-data text-h2 text-on-surface">24.5°C</span>
      <span className="text-label-caps text-on-surface-variant">Target: 24.0</span>
      </div>
      <div className="bg-surface-container p-sm rounded border border-outline-variant flex flex-col items-center justify-center py-4">
      <span className="material-symbols-outlined text-on-surface-variant mb-1">humidity_percentage</span>
      <span className="font-mono-data text-h2 text-on-surface">68%</span>
      <span className="text-label-caps text-on-surface-variant">Target: 65%</span>
      </div>
      <div className="bg-surface-container p-sm rounded border border-outline-variant flex flex-col items-center justify-center py-4">
      <span className="material-symbols-outlined text-on-surface-variant mb-1">light_mode</span>
      <span className="font-mono-data text-h2 text-on-surface">850 µmol</span>
      <span className="text-label-caps text-on-surface-variant">PAR</span>
      </div>
      <div className="bg-surface-container p-sm rounded border border-outline-variant flex flex-col items-center justify-center py-4">
      <span className="material-symbols-outlined text-on-surface-variant mb-1">co2</span>
      <span className="font-mono-data text-h2 text-on-surface">800 ppm</span>
      <span className="text-label-caps text-on-surface-variant">Normal</span>
      </div>
      </div>
      </div>
      </div>
      {/* Active Operators */}
      <div className="bg-surface rounded-xl border border-outline-variant p-md">
      <h2 className="font-h3 text-h3 text-on-surface mb-md">Active Operators</h2>
      <div className="flex flex-col gap-sm">
      <div className="flex items-center gap-md p-2 rounded hover:bg-surface-variant transition-colors">
      <div className="relative">
      <img alt="J. Smith" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A small circular profile picture of an operator, styled for a dark-themed corporate dashboard. Minimalist lighting, professional headshot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh8l_W44clXxXUvoFsayM42x7pOSJZfmWWollPH0_51VvFSBEMao3E9Px30DUdsM5Q_r6yn_n5ZDO2JaQFUNkYYlslnpIDhGkV43P8L8pZ2NbFJXMm_AxVpEEOAGBljdk16B7q413P_uz7VbYOCw4fE6Qc9FdFA_mYtEl90rrEGENHOSWUXraQ0O6yyMmN7tEIHHvx3l-as0wE9VjJ-rnIM0XKT2HO8T3EcODwhD_EDKB0KdOp3SvRpQ9sHIPJLdREd3DdPnaCCyA" />
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#10b981] border-2 border-surface rounded-full"></span>
      </div>
      <div className="flex-1">
      <p className="font-body-sm text-body-sm text-on-surface">J. Smith</p>
      <p className="text-label-caps text-on-surface-variant">Lead Technician</p>
      </div>
      </div>
      <div className="flex items-center gap-md p-2 rounded hover:bg-surface-variant transition-colors">
      <div className="relative">
      <img alt="A. Chen" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A small circular profile picture of a second operator, styled for a dark-themed corporate dashboard. Minimalist lighting, professional headshot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl086P1Dj3Q11CK8mptnCxXwYN92yT7SKIn2Uh0NRuIcWhvrSY0G2AN_xjf_qo7rMqUvanrc-mto6zKIN9dOacyagdVFm8Iad-57AdF3RDwxcySzm_ptHnGeOUwp6jSikHg2F17LigkVlY9f5xddqUTn5K5VEkH3Ap9Npdbj7lIzg9QzcByhwg-XoNYwt0BYDQC0s8e_2W6DK2U12COmE1H1PKnC-btmk3rhv6eyO_QKTCYETUH9I7YwzjlsFiB3vFsgw7kge3TNA" />
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-tertiary border-2 border-surface rounded-full"></span>
      </div>
      <div className="flex-1">
      <p className="font-body-sm text-body-sm text-on-surface">A. Chen</p>
      <p className="text-label-caps text-on-surface-variant">Maintenance (Busy)</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
