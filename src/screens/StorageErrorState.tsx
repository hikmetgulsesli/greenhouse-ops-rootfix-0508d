// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Storage Error State
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import type { BaseScreenProps } from '../types/domain';

export interface StorageErrorStateProps extends BaseScreenProps {
  onAction?: (action: string) => void;
}

export function StorageErrorState({ onNavigate, onAction, state }: StorageErrorStateProps = {}) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary font-body-md text-body-md docked full-width top-0 z-50 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-lg py-sm h-16 shrink-0">
      <div className="flex items-center gap-md">
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Greenhouse Ops</span>
      </div>
      {/* Search Bar (on_left configuration visually centered/left-aligned in remaining space) */}
      <div className="flex-1 max-w-md mx-lg relative hidden md:block">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input
        className="w-full bg-surface-container-low border border-outline-variant rounded pl-10 pr-sm py-sm text-body-md text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
        placeholder="Search operations..."
        type="text"
        value={state?.searchQuery ?? ''}
        onChange={(e) => {/* search wired via App */}}
      />
      </div>
      <div className="flex items-center gap-sm">
      <button className="hover:bg-surface-container-high transition-colors active:scale-95 duration-100 p-sm rounded-full text-on-surface-variant" aria-label="Notifications">
      <span className="material-symbols-outlined" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>notifications</span>
      </button>
      <button className="hover:bg-surface-container-high transition-colors active:scale-95 duration-100 p-sm rounded-full text-on-surface-variant" aria-label="Help">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button className="bg-error text-on-error hover:bg-error/90 transition-colors active:scale-95 duration-100 px-md py-sm rounded font-label-md text-label-md ml-sm flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">warning</span>
                      Emergency Stop
                  </button>
      <div className="ml-sm w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A close-up, dimly lit portrait of an industrial operator in a high-tech control room environment. Soft, cool blue screen light illuminates their face against a deep black background. The mood is serious, focused, and professional. The aesthetic is modern, high-tech, and minimalist." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV-tes8Y0P56ONhj3-05vOglxB6SGEaT6d_kpVc64RAq5oA52qSe5UqvCVoYvrBqyBwEOSoZy6b4eryXKmPwmIL8t6zswbtrKpitT0eLWRNcwz0Z2JvVSqpWch0MZYBPH5HVlIEq11TzqpSHxDiUBX5avgSRn5GUBNgAQABGQUmNc08eEgq8t40z_IM0vdDrRm--rF6rLThgckyWSro1shWLv6gb9zOdIXJz1sWKBPKpX_fbUV75N0LRJ7OxAk-smglkzN9Rl-CE8" />
      </div>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden relative">
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-label-md text-label-md docked h-screen left-0 w-60 border-r border-outline-variant flat no shadows flex flex-col h-full py-lg shrink-0 hidden md:flex">
      <div className="px-md mb-xl flex items-center gap-sm">
      <div className="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center text-primary border border-primary/30">
      <span className="material-symbols-outlined" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Main Operations</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Facility A1</p>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-xs px-sm">
      <button className="flex items-center gap-sm px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('dashboard')}>
      <span className="material-symbols-outlined">dashboard</span>
                          Dashboard
                      </button>
      <button className="flex items-center gap-sm px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('task-board')}>
      <span className="material-symbols-outlined">assignment</span>
                          Task Board
                      </button>
      <button className="flex items-center gap-sm px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('equipment')}>
      <span className="material-symbols-outlined">precision_manufacturing</span>
                          Equipment
                      </button>
      <button className="flex items-center gap-sm px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('logs')}>
      <span className="material-symbols-outlined">database</span>
                          Logs
                      </button>
      </div>
      <div className="mt-auto flex flex-col gap-xs px-sm pt-md border-t border-outline-variant">
      <button className="flex items-center gap-sm px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('settings')}>
      <span className="material-symbols-outlined">settings</span>
                          Settings
                      </button>
      <button className="flex items-center gap-sm px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('profile')}>
      <span className="material-symbols-outlined">account_circle</span>
                          Account
                      </button>
      </div>
      </nav>
      {/* Main Content Area with Dimmed Overlay */}
      <main className="flex-1 relative overflow-hidden bg-surface-container-lowest">
      {/* Simulated background content (blurred/dimmed) */}
      <div className="absolute inset-0 opacity-20 p-margin-desktop blur-sm pointer-events-none">
      <div className="grid grid-cols-12 gap-gutter h-full">
      <div className="col-span-8 bg-surface border border-outline-variant rounded-lg p-lg"></div>
      <div className="col-span-4 flex flex-col gap-gutter">
      <div className="h-1/3 bg-surface border border-outline-variant rounded-lg p-lg"></div>
      <div className="flex-1 bg-surface border border-outline-variant rounded-lg p-lg"></div>
      </div>
      </div>
      </div>
      {/* Error Modal Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface-container-lowest/80 backdrop-blur-sm">
      <div className="bg-surface border border-outline-variant rounded-xl shadow-2xl max-w-2xl w-full flex flex-col overflow-hidden relative">
      {/* Danger top accent bar */}
      <div className="h-1 w-full bg-error absolute top-0 left-0"></div>
      <div className="p-xl flex flex-col gap-lg">
      {/* Header Section */}
      <div className="flex items-start gap-md">
      <div className="w-12 h-12 rounded-full bg-error-container/20 border border-error/30 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-error text-[28px]" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>cloud_off</span>
      </div>
      <div>
      <h1 className="font-headline-lg text-headline-lg text-error mb-xs">Data Connection Interrupted</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">The console cannot read configuration data from local persistence. Critical sensor telemetry logging has been suspended.</p>
      </div>
      </div>
      {/* System Exception Log Block */}
      <div className="bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="bg-surface-container px-md py-sm border-b border-outline-variant flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">System Exception Log</span>
      <span className="material-symbols-outlined text-on-surface-variant text-[16px]">terminal</span>
      </div>
      <div className="p-md bg-[#0a0a0f] overflow-x-auto">
      <pre className="font-mono-data text-mono-data text-on-surface-variant leading-relaxed"><span className="text-error">[CRITICAL]</span> 2023-10-27T08:42:11Z - StorageAccessError
        at persistence.local.readConfig (storage.js:142)
        at async initConsoleView (main.js:28)
      <span className="text-tertiary">Details:</span> Failed to acquire lock on 'gh_ops_config.db'.
               Device resource busy or unavailable.
      <span className="text-secondary-fixed">Suggestion:</span> Verify hardware connection to storage volume /mnt/data_01.</pre>
      </div>
      </div>
      {/* Status Indicators (Contextual) */}
      <div className="flex gap-md">
      <div className="flex items-center gap-sm px-sm py-xs rounded bg-surface-variant border border-outline-variant">
      <div className="w-2 h-2 rounded-full bg-error animate-pulse"></div>
      <span className="font-label-sm text-label-sm text-on-surface">Telemetry: Offline</span>
      </div>
      <div className="flex items-center gap-sm px-sm py-xs rounded bg-surface-variant border border-outline-variant">
      <div className="w-2 h-2 rounded-full bg-secondary-fixed"></div>
      <span className="font-label-sm text-label-sm text-on-surface">Control Link: Standby</span>
      </div>
      </div>
      {/* Actions */}
      <div className="flex items-center justify-end gap-md pt-md border-t border-outline-variant mt-sm">
      <button className="font-label-md text-label-md px-lg py-sm rounded border border-outline-variant text-error hover:bg-error-container/10 hover:border-error transition-colors focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface" onClick={() => onAction?.('reset-local-storage')}>
                                      Reset Local Storage
                                  </button>
      <button className="font-label-md text-label-md px-lg py-sm rounded bg-primary-container text-white hover:bg-primary-container/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface shadow-[0_0_15px_rgba(37,99,235,0.15)] flex items-center gap-sm" onClick={() => onAction?.('retry-connection')}>
      <span className="material-symbols-outlined text-[18px]">refresh</span>
                                      Retry Connection
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
