// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Task Board
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";
import type { AppState } from "../types/domain";

export interface TaskBoardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: AppState;
}

export function TaskBoard(_props: TaskBoardProps = {}) {
  const { onNavigate, onAction, state } = _props;
  const search = state?.searchQuery ?? "";

  const todoCount = state?.tasks?.filter((t) => t.status === "pending").length ?? 3;
  const inProgressCount = state?.tasks?.filter((t) => t.status === "in-progress").length ?? 2;
  const completeCount = state?.tasks?.filter((t) => t.status === "complete").length ?? 12;

  return (
    <>
      {/* TopNavBar */}
      <header className="bg-background border-b border-outline-variant fixed top-0 w-full z-50 flex justify-between items-center px-lg h-16 text-primary font-body-md">
      <div className="flex items-center gap-sm">
      <span className="font-h2 text-h2 text-on-surface">Greenhouse Ops</span>
      </div>
      <div className="flex-1 max-w-md mx-xl hidden md:block">
      <div className="relative flex items-center">
      <span className="material-symbols-outlined absolute left-sm text-outline">search</span>
      <input value={search} onChange={(e) => onAction?.("set-search", e.target.value)} className="w-full bg-surface-container border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary pl-xl pr-sm py-[6px] text-body-sm font-body-sm text-on-surface placeholder:text-on-surface-variant transition-colors outline-none h-8" placeholder="Search tasks..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button aria-label="notifications" className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined text-[20px]">notifications</span>
      </button>
      <button aria-label="help" className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined text-[20px]">help</span>
      </button>
      <button className="h-8 px-md rounded bg-error-container text-on-error-container font-body-sm text-body-sm border border-error/20 hover:bg-error/20 transition-colors flex items-center gap-xs ml-sm">
      <span className="material-symbols-outlined text-[16px]">warning</span>
                      Emergency Stop
                  </button>
      <div onClick={() => onAction?.("toggle-profile")} className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant ml-sm flex-shrink-0 cursor-pointer">
      <img alt="Operator Profile" className="w-full h-full object-cover" data-alt="A close up, low-light professional headshot of an agricultural operator in a dark, high-tech industrial setting. The lighting is cinematic, with deep blue and subtle orange hues reflecting a corporate, modern aesthetic. The subject is focused, wearing dark protective gear. The image reinforces a quiet, technical authority suitable for a sophisticated dashboard interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfncGZaWkRDpu-caJB3n6U7RtmRvb_C3ueBtTYI4Z3k5ClMJXdQQ8p5gvbKkHyeT64h2a8KLSTWhWcUHQ9Zba6taG-TzHhsxmLacSVa70_pWsawwQYXKLlxi3nG-ySjxHHxsFbWbRVfvynni6qjiq0ngRnzBuLI0f88fQNDL2HFn5fgG549Xjj3pu5Uh0BQc_tsQsR36aMuTJ_tTUKmMN6RueTPwV0qO_BmrA4Or8n_3j_R0tIqLuUZrQ11uIZ4CS-k0t9ji0jdpc" />
      </div>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="bg-surface-container text-primary font-body-sm text-body-sm border-r border-outline-variant fixed left-0 top-16 h-[calc(100vh-64px)] w-64 flex flex-col py-md z-40 hidden md:flex">
      <div className="px-md mb-lg flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
      <span className="material-symbols-outlined text-primary text-[20px]">eco</span>
      </div>
      <div>
      <h2 className="font-h3 text-h3 text-primary">RootFix Console</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-[2px]">Zone 04 - Active</p>
      </div>
      </div>
      <div className="flex-1 px-sm space-y-xs overflow-y-auto">
      <button onClick={() => onNavigate?.("dashboard")} className="w-full text-left flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
      <span>Dashboard</span>
      </button>
      <button onClick={() => onNavigate?.("task-board")} className="w-full text-left flex items-center gap-md px-md py-sm rounded bg-secondary-container text-on-secondary-container font-semibold translate-x-1 transition-transform">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
      <span>Task Board</span>
      </button>
      <button onClick={() => onNavigate?.("equipment")} className="w-full text-left flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
      <span>Equipment</span>
      </button>
      <button onClick={() => onNavigate?.("logs")} className="w-full text-left flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined text-[20px]">history</span>
      <span>Logs</span>
      </button>
      </div>
      <div className="px-sm pt-md border-t border-outline-variant mt-auto space-y-xs">
      <button onClick={() => onNavigate?.("settings")} className="w-full text-left flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined text-[20px]">settings</span>
      <span>Settings</span>
      </button>
      <button onClick={() => onAction?.("toggle-profile")} className="w-full text-left flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined text-[20px]">person</span>
      <span>Account</span>
      </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-16 h-screen flex flex-col bg-background">
      {/* Board Header */}
      <div className="px-lg py-md flex items-center justify-between shrink-0 border-b border-outline-variant bg-surface/50 backdrop-blur-sm">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Operational Task Board</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Manage and track active greenhouse operations.</p>
      </div>
      <div className="flex gap-sm">
      <button onClick={() => onNavigate?.("filtered")} className="h-10 px-md rounded border border-outline-variant text-on-surface font-body-sm text-body-sm hover:bg-surface-variant transition-colors flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">filter_list</span>
                          Filter
                      </button>
      <button onClick={() => onAction?.("new-task")} className="h-10 px-md rounded bg-primary-container text-on-primary-container font-body-sm text-body-sm hover:opacity-90 transition-opacity flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          New Task
                      </button>
      </div>
      </div>
      {/* Kanban Board Area */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-lg">
      <div className="flex gap-lg h-full items-start min-w-max">
      {/* Column: To Do */}
      <div className="w-[320px] flex flex-col max-h-full bg-surface-container rounded-lg border border-outline-variant shrink-0">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-high rounded-t-lg shrink-0">
      <div className="flex items-center gap-sm">
      <div className="w-2 h-2 rounded-full bg-outline"></div>
      <h3 className="font-h3 text-h3 text-on-surface">To Do</h3>
      </div>
      <span className="font-mono-data text-mono-data bg-surface-variant px-2 py-1 rounded text-on-surface-variant">{todoCount}</span>
      </div>
      <div className="p-sm flex-1 overflow-y-auto kanban-col-scroll space-y-sm">
      {/* Task Card */}
      <div className="bg-surface p-sm rounded border border-outline-variant hover:border-outline transition-colors cursor-grab">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-on-surface-variant">TS-104</span>
      <div className="px-2 py-[2px] rounded bg-error/10 text-error font-label-caps text-label-caps border border-error/20">HIGH</div>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface mb-sm">Replace LED Panel - Sector 7</h4>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex gap-1">
      <span className="material-symbols-outlined text-[14px] text-outline">calendar_today</span>
      <span className="font-mono-data text-[11px] text-outline">Oct 12</span>
      </div>
      <img alt="Assignee" className="w-6 h-6 rounded-full bg-surface-variant border border-outline-variant" data-alt="A small, circular avatar portrait of an engineer against a dark background. Soft, cool-toned lighting highlights the subject's face, maintaining the high-density, professional aesthetic of the corporate modern design system. The tone is serious and technical." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLgyXRlicDcu4Zqhyqm0VlZtUVwxXCFBiegaccANTiNJeo3EZCNx8hYGGkWKn2H_DenY17gTNXpbqRQalTivc3VOHKpgWK7jSUIsItSEtaVigokpXBq9BkeYkpkZTQ6_TBJaeWHt4-3saP9JtZKIQZYai08woUcjGqs21wzgEGsD-1n8kliWlpGyrvzRSeb-jCHFbujb25e1UoTv47ll923H20Nal-kVOOrihM7e6ra0q52IO50fx2MCiO4V5QSbGVO9_2u5SkXvc" />
      </div>
      </div>
      {/* Task Card */}
      <div className="bg-surface p-sm rounded border border-outline-variant hover:border-outline transition-colors cursor-grab">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-on-surface-variant">TS-105</span>
      <div className="px-2 py-[2px] rounded bg-primary/10 text-primary font-label-caps text-label-caps border border-primary/20">NORMAL</div>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface mb-sm">Nutrient Mix Audit</h4>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex gap-1">
      <span className="material-symbols-outlined text-[14px] text-outline">calendar_today</span>
      <span className="font-mono-data text-[11px] text-outline">Oct 14</span>
      </div>
      <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center border border-outline-variant">
      <span className="font-label-caps text-[10px] text-on-secondary-container">EJ</span>
      </div>
      </div>
      </div>
      {/* Task Card */}
      <div className="bg-surface p-sm rounded border border-outline-variant hover:border-outline transition-colors cursor-grab">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-on-surface-variant">TS-108</span>
      <div className="px-2 py-[2px] rounded bg-primary/10 text-primary font-label-caps text-label-caps border border-primary/20">NORMAL</div>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface mb-sm">Ventilation Filter Replacement</h4>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex gap-1">
      <span className="material-symbols-outlined text-[14px] text-outline">calendar_today</span>
      <span className="font-mono-data text-[11px] text-outline">Oct 15</span>
      </div>
      <div className="w-6 h-6 rounded-full border border-dashed border-outline-variant flex items-center justify-center text-outline">
      <span className="material-symbols-outlined text-[14px]">person_add</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: In Progress */}
      <div className="w-[320px] flex flex-col max-h-full bg-surface-container rounded-lg border border-outline-variant shrink-0">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-high rounded-t-lg shrink-0">
      <div className="flex items-center gap-sm">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      <h3 className="font-h3 text-h3 text-on-surface">In Progress</h3>
      </div>
      <span className="font-mono-data text-mono-data bg-surface-variant px-2 py-1 rounded text-on-surface-variant">{inProgressCount}</span>
      </div>
      <div className="p-sm flex-1 overflow-y-auto kanban-col-scroll space-y-sm">
      {/* Task Card */}
      <div className="bg-surface p-sm rounded border border-primary/50 shadow-[0_0_12px_rgba(37,99,235,0.1)] cursor-grab relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
      <div className="pl-2">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-on-surface-variant">TS-102</span>
      <div className="px-2 py-[2px] rounded bg-error/10 text-error font-label-caps text-label-caps border border-error/20">CRITICAL</div>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface mb-sm">Sensor Calibration - Zone 04</h4>
      <div className="w-full bg-surface-variant h-1 rounded-full mb-3 overflow-hidden">
      <div className="bg-primary h-full w-[65%]"></div>
      </div>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex gap-1">
      <span className="material-symbols-outlined text-[14px] text-outline">schedule</span>
      <span className="font-mono-data text-[11px] text-outline">2h 15m</span>
      </div>
      <img alt="Assignee" className="w-6 h-6 rounded-full bg-surface-variant border border-outline-variant" data-alt="A dark-themed avatar portrait of a lead operator. The background is nearly black, with sharp, focused lighting on the subject's face to emphasize a clean, highly technical and professional vibe. Fits seamlessly into a high-density corporate UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK06-kBnxr17Cnrsd1vS5r8NgqdT8RpMaF4TpfJdnnswVV-aPr2ea0ilsjgPhlhZ7Cyinke3thV_HhOxSlwFoGlZd_texMX49JC6wXLGlfU8__oi79VZTlFDhcaL7EL7WkbQcR61YPURTCDf_Jpw0VszBnVmRqbPknXUdFsJywTn7lgGW0lhaj-CKpunY-zPFvH4KUxJb_Vmv8I1ly057iuuIvdMUbZDdZABPwzrJmnMWi7AtIRJjM6DtbuE72nfWZKVsLIwhNdig" />
      </div>
      </div>
      </div>
      {/* Task Card */}
      <div className="bg-surface p-sm rounded border border-outline-variant hover:border-outline transition-colors cursor-grab">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-on-surface-variant">TS-106</span>
      <div className="px-2 py-[2px] rounded bg-tertiary/10 text-tertiary font-label-caps text-label-caps border border-tertiary/20">MEDIUM</div>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface mb-sm">Irrigation Line Flush - West Wing</h4>
      <div className="w-full bg-surface-variant h-1 rounded-full mb-3 overflow-hidden">
      <div className="bg-outline h-full w-[20%]"></div>
      </div>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex gap-1">
      <span className="material-symbols-outlined text-[14px] text-outline">schedule</span>
      <span className="font-mono-data text-[11px] text-outline">0h 45m</span>
      </div>
      <img alt="Assignee" className="w-6 h-6 rounded-full bg-surface-variant border border-outline-variant" data-alt="A sleek, modern avatar image of a female technician. Soft, cool lighting shapes the features against a deep, dark grey background. The image is crisp and understated, matching a sophisticated dark-mode dashboard interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbDe1YICT4RWq3y_7Fbs4URWWsNOpnz0xxmUVJ2hP3bRyt17wH9-pXmIY-lwlEDA7Rfil1Yegej9eETAt2YyMYscPgQ8MpGpuD8-ke-l3d8x_aGySGUREzlQejnSKEzEg5__eS_gdomiFqJi7BFGfIRmPa9ij5xb8Bmcjoe_WJCU5iA875gsZqqzAQpqKbGHKym5Iu7YILBKIfKYNFA5G3uUx7n-bbeSNHp5p4L7Zc9t4jzMvTOjYPJtDEASADNfY3ObbRG0t80z8" />
      </div>
      </div>
      </div>
      </div>
      {/* Column: Delayed / Blocked */}
      <div className="w-[320px] flex flex-col max-h-full bg-surface-container rounded-lg border border-outline-variant shrink-0">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-high rounded-t-lg shrink-0">
      <div className="flex items-center gap-sm">
      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
      <h3 className="font-h3 text-h3 text-on-surface">Delayed</h3>
      </div>
      <span className="font-mono-data text-mono-data bg-surface-variant px-2 py-1 rounded text-on-surface-variant">1</span>
      </div>
      <div className="p-sm flex-1 overflow-y-auto kanban-col-scroll space-y-sm">
      {/* Task Card */}
      <div className="bg-surface p-sm rounded border border-tertiary/30 bg-tertiary/5 cursor-grab">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-on-surface-variant">TS-099</span>
      <div className="px-2 py-[2px] rounded bg-tertiary/10 text-tertiary font-label-caps text-label-caps border border-tertiary/20">BLOCKED</div>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface mb-xs">Awaiting Parts: Pump V-4</h4>
      <p className="text-[11px] text-tertiary mb-sm leading-tight">Supplier delay. Expected delivery Oct 16.</p>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex gap-1">
      <span className="material-symbols-outlined text-[14px] text-outline">warning</span>
      <span className="font-mono-data text-[11px] text-outline">Stalled</span>
      </div>
      <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center border border-outline-variant">
      <span className="font-label-caps text-[10px] text-on-secondary-container">MK</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Completed */}
      <div className="w-[320px] flex flex-col max-h-full bg-surface-container rounded-lg border border-outline-variant shrink-0 opacity-80">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-high rounded-t-lg shrink-0">
      <div className="flex items-center gap-sm">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <h3 className="font-h3 text-h3 text-on-surface">Completed</h3>
      </div>
      <span className="font-mono-data text-mono-data bg-surface-variant px-2 py-1 rounded text-on-surface-variant">{completeCount}</span>
      </div>
      <div className="p-sm flex-1 overflow-y-auto kanban-col-scroll space-y-sm">
      {/* Task Card */}
      <div className="bg-surface p-sm rounded border border-outline-variant/50 cursor-default">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-outline line-through">TS-101</span>
      <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface-variant mb-sm">Daily Logistics Review</h4>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex gap-1">
      <span className="font-mono-data text-[11px] text-outline">Done 08:30 AM</span>
      </div>
      <img alt="Assignee" className="w-6 h-6 rounded-full bg-surface-variant border border-outline-variant grayscale" data-alt="A desaturated thumbnail portrait of an operator. The image is muted to indicate completion status, fitting into the dark corporate aesthetic of the dashboard. Lighting is even and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2un1mpqT4VKIbusOIB7hAZ4Ot0F7xPueQpviNUuSAdAAn5I5xouUCnrvv5JFENqEZHR4Zow6_pMT0GrfA0eMKLcPcXY46KhiadlA9xzE3xuRHZOLdLro6OPOW1xmhmF4iI6UxN8APfcLFpP4yjiNBxM2fDUKQeNep5ZeHgf8UiK5YpYshaMMypOSNUUuGuVEDDViwByNiEphYBkM7IbdrGIG7CLBuKQDo-svXTuGB0uTVjDc-fo2LSzuY8sKOfHguI4GdTo7YlN4" />
      </div>
      </div>
      {/* Task Card */}
      <div className="bg-surface p-sm rounded border border-outline-variant/50 cursor-default">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-outline line-through">TS-100</span>
      <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface-variant mb-sm">System Update v2.4.1</h4>
      <div className="flex justify-between items-center mt-auto">
      <div className="flex gap-1">
      <span className="font-mono-data text-[11px] text-outline">Done Yesterday</span>
      </div>
      <div className="w-6 h-6 rounded-full bg-secondary-container/50 flex items-center justify-center border border-outline-variant/50">
      <span className="font-label-caps text-[10px] text-on-secondary-container/50">SYS</span>
      </div>
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
