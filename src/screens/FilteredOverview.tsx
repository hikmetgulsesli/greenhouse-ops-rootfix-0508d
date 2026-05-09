// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Filtered Overview
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import type { BaseScreenProps } from '../types/domain';

export interface FilteredOverviewProps extends BaseScreenProps {
  onAction?: (action: string) => void;
}

export function FilteredOverview({ onNavigate, onAction, state }: FilteredOverviewProps = {}) {
  const filters = state?.filters;

  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface flex justify-between items-center w-full px-lg py-sm h-16 border-b border-outline-variant docked full-width top-0 z-50">
      <div className="flex items-center gap-md">
      <span className="font-headline-md text-headline-md font-bold text-primary">Greenhouse Ops</span>
      {/* Search Bar on Left */}
      <div className="hidden md:flex items-center bg-surface-container-low border border-outline-variant rounded-lg px-sm py-unit focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all ml-lg w-64">
      <span className="material-symbols-outlined text-on-surface-variant text-lg mr-sm" data-icon="search">search</span>
      <input
        className="bg-transparent border-none outline-none text-body-sm font-body-sm text-on-surface w-full placeholder-on-surface-variant p-0 focus:ring-0"
        placeholder="Search events, zones..."
        type="text"
        value={state?.searchQuery ?? ''}
        onChange={(e) => {/* search wired via App */}}
      />
      </div>
      </div>
      <div className="flex items-center gap-md">
      {/* Trailing Icon Actions */}
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded-full active:scale-95 duration-100 flex items-center justify-center" aria-label="Notifications">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded-full active:scale-95 duration-100 flex items-center justify-center" aria-label="Help">
      <span className="material-symbols-outlined" data-icon="help">help</span>
      </button>
      {/* Trailing Primary Action */}
      <button className="bg-[#DC2626] text-white px-md py-sm rounded border border-[#DC2626] font-label-md text-label-md uppercase hover:opacity-90 active:scale-95 transition-all">
                      Emergency Stop
                  </button>
      {/* Profile Image Placeholder */}
      <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant ml-sm flex items-center justify-center overflow-hidden flex-shrink-0">
      <span className="material-symbols-outlined text-on-surface-variant" data-icon="person">person</span>
      </div>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface-container-low hidden md:flex flex-col h-full py-lg docked h-screen left-0 w-60 border-r border-outline-variant flex-shrink-0">
      <div className="px-md mb-xl flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center text-on-primary-container font-bold flex-shrink-0">
                          A1
                      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Main Operations</h2>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Facility A1</p>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-unit px-sm">
      {/* Tab: Dashboard */}
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('dashboard')}>
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </button>
      {/* Tab: Task Board */}
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('task-board')}>
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
      <span className="font-label-md text-label-md">Task Board</span>
      </button>
      {/* Tab: Equipment */}
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('equipment')}>
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
      <span className="font-label-md text-label-md">Equipment</span>
      </button>
      {/* Tab: Logs (Active based on Intent: Filtered Operational View/Events) */}
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-primary font-bold border-r-2 border-primary bg-primary-container/10 hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('logs')}>
      <span className="material-symbols-outlined" data-icon="database" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>database</span>
      <span className="font-label-md text-label-md">Logs</span>
      </button>
      </div>
      <div className="mt-auto px-sm flex flex-col gap-unit pt-lg border-t border-outline-variant mx-md">
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('settings')}>
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('profile')}>
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      <span className="font-label-md text-label-md">Account</span>
      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-surface-container-lowest p-margin-desktop">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-xl gap-md">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-unit">Filtered View</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Showing active anomalies and operational logs based on current criteria.</p>
      </div>
      <div className="flex gap-md">
      <button className="bg-surface text-on-surface px-md py-sm border border-outline-variant rounded flex items-center gap-sm font-label-md text-label-md hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-lowest">
      <span className="material-symbols-outlined text-[18px]" data-icon="tune">tune</span>
                              Edit Filters
                          </button>
      <button className="bg-[#2563EB] text-white px-md py-sm rounded border border-transparent font-label-md text-label-md flex items-center gap-sm hover:opacity-90 active:scale-95 transition-all focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-surface-container-lowest" onClick={() => onAction?.('save-view')}>
      <span className="material-symbols-outlined text-[18px]" data-icon="bookmark">bookmark</span>
                              Save View
                          </button>
      </div>
      </div>
      {/* Active Filters Bar */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md mb-xl flex items-center gap-md flex-wrap">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Filters:</span>
      {filters?.status && filters.status !== 'all' && (
        <div className="flex items-center bg-[#690005]/20 border border-[#93000a] text-[#ffb4ab] px-sm py-unit rounded-full font-label-sm text-label-sm gap-xs">
          <span className="material-symbols-outlined text-[14px]">error</span>
          Status: {filters.status}
        </div>
      )}
      {filters?.zone && filters.zone !== 'all' && (
        <div className="flex items-center bg-surface-container border border-outline-variant text-on-surface px-sm py-unit rounded-full font-label-sm text-label-sm gap-xs">
          <span className="material-symbols-outlined text-[14px]">location_on</span>
          Zone: {filters.zone}
        </div>
      )}
      {(filters?.dateFrom || filters?.dateTo) && (
        <div className="flex items-center bg-surface-container border border-outline-variant text-on-surface px-sm py-unit rounded-full font-label-sm text-label-sm gap-xs">
          <span className="material-symbols-outlined text-[14px]">calendar_today</span>
          {filters.dateFrom || '...'} — {filters.dateTo || '...'}
        </div>
      )}
      <button className="text-primary font-label-sm text-label-sm hover:underline ml-auto" onClick={() => onAction?.('clear-all')}>Clear All</button>
      </div>
      {/* Data Table Container */}
      <div className="bg-surface rounded-lg border border-outline-variant overflow-hidden">
      <table className="w-full text-left border-collapse">
      <thead className="bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider border-b border-outline-variant">
      <tr>
      <th className="p-md font-medium w-12 text-center">Status</th>
      <th className="p-md font-medium">Event ID</th>
      <th className="p-md font-medium">Description</th>
      <th className="p-md font-medium">Zone</th>
      <th className="p-md font-medium text-right">Timestamp</th>
      <th className="p-md font-medium w-16"></th>
      </tr>
      </thead>
      <tbody className="font-mono-data text-mono-data text-on-surface divide-y divide-outline-variant/50">
        {/* Show filtered logs or fallback static rows when no state mapping exists */}
        {(state?.logs ?? []).slice(0, 4).map((log: { id: string; status: string; action: string; equipmentId: string; timestamp: string }, i: number) => (
          <tr key={log.id} className={`hover:bg-surface-container-high transition-colors group cursor-pointer ${log.status === 'Critical' ? 'bg-[#93000a]/10' : ''}`}>
            <td className="p-md text-center">
              <span className={`material-symbols-outlined text-[20px] ${log.status === 'Critical' ? 'text-[#ffb4ab]' : 'text-outline'}`} style={{fontVariationSettings: log.status === 'Critical' ? "'FILL' 1" : undefined}}>{log.status === 'Critical' ? 'warning' : 'info'}</span>
            </td>
            <td className={`p-md ${log.status === 'Critical' ? 'text-[#ffb4ab]' : ''}`}>{log.id}</td>
            <td className="p-md text-on-surface font-body-sm text-body-sm">{log.action}</td>
            <td className="p-md">
              <span className="bg-surface-container border border-outline-variant px-xs py-unit rounded font-label-sm text-label-sm">{log.equipmentId}</span>
            </td>
            <td className="p-md text-right text-on-surface-variant">{log.timestamp.split(' ')[1] ?? log.timestamp}</td>
            <td className="p-md text-center">
              <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-primary transition-all"><span className="material-symbols-outlined text-[20px]">open_in_new</span></button>
            </td>
          </tr>
        ))}
        {(state?.logs ?? []).length === 0 && (
          <tr>
            <td className="p-md text-center text-on-surface-variant" colSpan={6}>No filtered events</td>
          </tr>
        )}
      </tbody>
      </table>
      <div className="p-md border-t border-outline-variant flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low">
      <span>Showing filtered events</span>
      <div className="flex gap-sm">
      <button className="p-unit border border-outline-variant rounded hover:bg-surface-container-high disabled:opacity-50" disabled={true}><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
      <button className="p-unit border border-outline-variant rounded hover:bg-surface-container-high"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
