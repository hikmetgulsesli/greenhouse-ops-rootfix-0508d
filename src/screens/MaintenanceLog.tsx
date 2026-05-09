// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Maintenance Log
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import type { BaseScreenProps, LogEntry } from '../types/domain';

export interface MaintenanceLogProps extends BaseScreenProps {
  onAction?: (action: string) => void;
}

export function MaintenanceLog({ onNavigate, onAction, state }: MaintenanceLogProps = {}) {
  const logs = state?.logs ?? [];
  const totalLogCount = state?.totalLogCount ?? logs.length;

  const statusBadgeClass = (status: LogEntry['status']) => {
    switch (status) {
      case 'Success': return 'text-[#4ade80] bg-[#4ade80]/10';
      case 'Warning': return 'text-[#facc15] bg-[#facc15]/10';
      case 'Critical': return 'text-[#f87171] bg-[#f87171]/10 border border-[#f87171]/30';
      case 'Standby': return 'text-slate-400 bg-slate-400/10';
      default: return 'text-on-surface-variant bg-surface-variant';
    }
  };

  return (
    <>
      {/* SideNavBar Component */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-label-md text-label-md docked h-screen left-0 w-60 border-r border-outline-variant flat no shadows flex flex-col h-full py-lg shrink-0">
      {/* Header */}
      <div className="px-md mb-xl flex items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm text-on-surface">Main Operations</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Facility A1</p>
      </div>
      </div>
      {/* Main Tabs */}
      <div className="flex-1 px-sm space-y-xs">
      <button className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('dashboard')}>
      <span className="material-symbols-outlined">dashboard</span>
      <span>Dashboard</span>
      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('task-board')}>
      <span className="material-symbols-outlined">assignment</span>
      <span>Task Board</span>
      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('equipment')}>
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span>Equipment</span>
      </button>
      {/* Active Tab */}
      <button className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-primary font-bold border-r-2 border-primary bg-primary-container/10 active:translate-x-1 duration-150 w-full text-left">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>database</span>
      <span>Logs</span>
      </button>
      </div>
      {/* Footer Tabs */}
      <div className="px-sm mt-auto space-y-xs">
      <button className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('settings')}>
      <span className="material-symbols-outlined">settings</span>
      <span>Settings</span>
      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('profile')}>
      <span className="material-symbols-outlined">account_circle</span>
      <span>Account</span>
      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-surface-container-lowest">
      {/* TopNavBar Component */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary font-body-md text-body-md docked full-width top-0 z-50 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-lg py-sm h-16 shrink-0">
      {/* Left Area: Brand & Search */}
      <div className="flex items-center gap-lg flex-1">
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary tracking-tight">Greenhouse Ops</span>
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
      <input
        className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT pl-xl pr-sm py-xs text-on-surface font-body-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/50 transition-colors placeholder:text-outline"
        placeholder="Search logs..."
        type="text"
        value={state?.searchQuery ?? ''}
        onChange={(e) => {/* search wired via App */}}
      />
      </div>
      </div>
      {/* Right Area: Actions */}
      <div className="flex items-center gap-md">
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-100" aria-label="Notifications">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-100" aria-label="Help">
      <span className="material-symbols-outlined">help</span>
      </button>
      <div className="w-px h-6 bg-outline-variant mx-xs"></div>
      <button className="bg-[#DC2626] hover:bg-[#b91c1c] text-white px-md py-xs rounded-DEFAULT font-label-md tracking-wide transition-colors active:scale-95 duration-100 shadow-[0_0_15px_rgba(220,38,38,0.15)] flex items-center gap-xs">
      <span className="material-symbols-outlined text-sm">dangerous</span>
                          Emergency Stop
                      </button>
      <div className="w-8 h-8 rounded-full bg-surface-variant ml-sm flex items-center justify-center border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface-variant">person</span>
      </div>
      </div>
      </header>
      {/* Canvas Area */}
      <main className="flex-1 overflow-y-auto p-margin-desktop flex flex-col gap-lg">
      {/* Page Header & Filters */}
      <div className="flex flex-col gap-md">
      <div className="flex justify-between items-end">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Chronological Maintenance Log</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">System-wide operational tracking and equipment maintenance history.</p>
      </div>
      <button className="bg-transparent border border-[#1f2937] hover:border-outline text-on-surface px-md py-sm rounded-DEFAULT font-label-md transition-colors flex items-center gap-xs" onClick={() => onAction?.('export-csv')}>
      <span className="material-symbols-outlined text-sm">download</span>
                              Export CSV
                          </button>
      </div>
      {/* Filter Bar */}
      <div className="bg-surface border border-[#1f2937] rounded-lg p-md flex items-end gap-md">
      <div className="flex flex-col gap-xs flex-1 max-w-xs">
      <label className="font-label-md text-label-md text-on-surface-variant">Date Range</label>
      <div className="relative flex items-center gap-sm">
      <input className="w-full bg-surface-container-lowest border border-[#1f2937] rounded-DEFAULT px-sm py-xs text-on-surface font-body-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/50 transition-colors [color-scheme:dark]" type="date" />
      <span className="text-on-surface-variant font-label-sm">TO</span>
      <input className="w-full bg-surface-container-lowest border border-[#1f2937] rounded-DEFAULT px-sm py-xs text-on-surface font-body-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/50 transition-colors [color-scheme:dark]" type="date" />
      </div>
      </div>
      <div className="flex flex-col gap-xs flex-1 max-w-xs">
      <label className="font-label-md text-label-md text-on-surface-variant">Equipment Type</label>
      <select className="w-full bg-surface-container-lowest border border-[#1f2937] rounded-DEFAULT px-sm py-xs text-on-surface font-body-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/50 transition-colors appearance-none">
      <option value="all">All Equipment</option>
      <option value="hvac">HVAC Systems</option>
      <option value="irrigation">Irrigation Pumps</option>
      <option value="sensors">Sensor Nodes</option>
      </select>
      </div>
      <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-md py-xs h-[34px] rounded-DEFAULT font-label-md transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-container-lowest focus:ring-[#2563EB]" onClick={() => onAction?.('apply-filters')}>
                              Apply Filters
                          </button>
      </div>
      </div>
      {/* Data Table Container */}
      <div className="bg-surface border border-[#1f2937] rounded-lg overflow-hidden flex-1 flex flex-col">
      <div className="overflow-x-auto flex-1">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-high border-b border-[#1f2937]">
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant w-48">Date/Time (UTC)</th>
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant w-40">Equipment ID</th>
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant">Action Taken</th>
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant w-48">Performed By</th>
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant w-32">Status</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-[#1f2937]">
        {logs.map((log) => (
          <tr key={log.id} className={`hover:bg-surface-container-highest transition-colors ${log.status === 'Critical' ? 'bg-error-container/5 border-l-2 border-l-error' : ''}`}>
            <td className="py-sm px-md font-mono-data text-mono-data text-on-surface-variant">{log.timestamp}</td>
            <td className={`py-sm px-md font-mono-data text-mono-data ${log.status === 'Critical' ? 'text-error font-bold' : 'text-primary'}`}>{log.equipmentId}</td>
            <td className="py-sm px-md font-body-sm text-body-sm text-on-surface">{log.action}</td>
            <td className="py-sm px-md font-body-sm text-body-sm text-on-surface-variant">{log.performedBy}</td>
            <td className="py-sm px-md">
              <span className={`inline-flex items-center px-2 py-1 rounded-full font-label-sm ${statusBadgeClass(log.status)}`}>
                {log.status}
              </span>
            </td>
          </tr>
        ))}
        {logs.length === 0 && (
          <tr>
            <td className="py-sm px-md text-on-surface-variant text-center" colSpan={5}>No log entries found</td>
          </tr>
        )}
      </tbody>
      </table>
      </div>
      {/* Pagination Footer */}
      <div className="border-t border-[#1f2937] bg-surface-container-low px-md py-sm flex justify-between items-center">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1 to {logs.length} of {totalLogCount.toLocaleString()} entries</span>
      <div className="flex gap-xs">
      <button className="w-8 h-8 rounded-DEFAULT flex items-center justify-center text-on-surface-variant hover:bg-surface border border-[#1f2937] transition-colors disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined text-sm">chevron_left</span>
      </button>
      <button className="w-8 h-8 rounded-DEFAULT flex items-center justify-center text-on-surface hover:bg-surface border border-[#1f2937] transition-colors">
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
