// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Empty State
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import type { AppState } from "../types/domain";

export interface EmptyStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: AppState;
}

export function EmptyState(props: EmptyStateProps = {}) {
  const { onNavigate, onAction, state } = props;
  const search = state?.searchQuery ?? '';
  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-lg h-16 bg-background dark:bg-background border-b border-outline-variant dark:border-outline-variant font-body-md text-body-md text-primary dark:text-primary">
      <div className="flex items-center gap-xl">
      <span className="font-h2 text-h2 text-on-surface dark:text-on-surface tracking-tight">Greenhouse Ops</span>
      <div className="relative hidden md:flex items-center">
      <span className="material-symbols-outlined absolute left-sm text-on-surface-variant text-[20px]">search</span>
      <input value={search} onChange={(e) => onAction?.('set-search', e.target.value)} className="bg-surface-container border border-outline-variant rounded-lg pl-xl pr-sm py-xs h-8 text-body-sm font-body-sm text-on-surface focus:outline-none focus:border-primary-container w-64 placeholder:text-outline" placeholder="Search..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button onClick={() => onAction?.('emergency-stop')} className="bg-transparent border border-error text-error hover:bg-error-container hover:text-on-error-container transition-colors rounded-lg px-sm py-[4px] h-8 font-body-sm text-body-sm flex items-center justify-center">
                      Emergency Stop
                  </button>
      <div className="flex items-center gap-xs">
      <button className="p-xs rounded-full hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-xs rounded-full hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant">
      <span className="material-symbols-outlined">help</span>
      </button>
      </div>
      <div onClick={() => onAction?.('toggle-profile')} className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant ml-sm flex-shrink-0 cursor-pointer">
      <img alt="Operator Profile" className="w-full h-full object-cover" data-alt="A close up studio portrait of a serious male operator. The lighting is dramatic and moody, utilizing dark backgrounds and subtle blue rim light to convey a modern, technical, corporate atmosphere. The subject is in sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnM74xNW2uKmuiylXuPo1MEm6wET1tBk2mr-XLuaUaLkDUStnPhhZN8pzz2j0yLwd7lvCRIW5AXhuM-ZPawNX-1Vt6Huhz2Cu8Kyn0IxqwKBnMk6Z5k8LqmEZAaKTL5riXAC56so16uWyMfMp-KRPXAyA9gGayggFIgeIQBAeXWvyFDcsjxldinmlsh_F3v2aaMQ208q9d0tDGjl1B7LH1Rqo-xIafOVECJeTPiNRdsRl0LTe3v41Nng6oVcGHXZndE06NsMNcL-o" />
      </div>
      </div>
      </nav>
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] flex flex-col py-md w-64 bg-surface-container dark:bg-surface-container border-r border-outline-variant dark:border-outline-variant z-40">
      <div className="px-lg pb-md mb-xs border-b border-outline-variant">
      <h2 className="font-h3 text-h3 text-primary dark:text-primary">RootFix Console</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Zone 04 - Active</p>
      </div>
      <nav className="flex-1 px-sm space-y-[2px] mt-sm">
      <button onClick={() => onNavigate?.('dashboard')} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant font-body-sm text-body-sm transition-colors">
      <span className="material-symbols-outlined">dashboard</span>
                      Dashboard
                  </button>
      <button onClick={() => onNavigate?.('task-board')} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container font-semibold translate-x-1 transition-transform font-body-sm text-body-sm shadow-[inset_2px_0_0_0_#b4c5ff]">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
                      Task Board
                  </button>
      <button onClick={() => onNavigate?.('equipment')} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant font-body-sm text-body-sm transition-colors">
      <span className="material-symbols-outlined">precision_manufacturing</span>
                      Equipment
                  </button>
      <button onClick={() => onNavigate?.('logs')} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant font-body-sm text-body-sm transition-colors">
      <span className="material-symbols-outlined">history</span>
                      Logs
                  </button>
      </nav>
      <div className="px-sm space-y-[2px] mt-auto pt-sm border-t border-outline-variant">
      <button onClick={() => onNavigate?.('settings')} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant font-body-sm text-body-sm transition-colors">
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </button>
      <button onClick={() => onAction?.('toggle-profile')} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant font-body-sm text-body-sm transition-colors">
      <span className="material-symbols-outlined">person</span>
                      Account
                  </button>
      </div>
      </aside>
      <main className="ml-64 mt-16 flex-1 h-[calc(100vh-64px)] bg-background flex flex-col items-center justify-center p-lg relative overflow-y-auto">
      <div className="max-w-md w-full flex flex-col items-center text-center -mt-xl">
      <div className="relative w-32 h-32 mb-xl flex items-center justify-center">
      <div className="absolute inset-0 bg-surface-container rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] border border-outline-variant/30"></div>
      <div className="absolute inset-2 bg-surface-container-high rounded-full border border-outline-variant/50"></div>
      <span className="material-symbols-outlined text-[64px] text-primary relative z-10 opacity-90" style={{fontVariationSettings: "'wght' 200"}}>playlist_add</span>
      </div>
      <h1 className="font-h1 text-h1 text-on-surface mb-sm tracking-tight">Welcome to Greenhouse Ops</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl leading-relaxed">
                      Your workspace is currently quiet. There are no active tasks or logged events for the selected zone. Start managing your environment by setting up your initial parameters.
                  </p>
      <button onClick={() => onAction?.('new-task')} className="bg-primary-container text-on-primary-container hover:brightness-110 active:scale-[0.98] transition-all duration-200 px-lg py-sm h-10 rounded-lg font-h3 text-h3 flex items-center justify-center gap-sm shadow-[0_4px_12px_rgba(37,99,235,0.15)] border border-transparent">
      <span className="material-symbols-outlined text-[20px]">add</span>
                      Create Your First Task
                  </button>
      </div>
      </main>
    </>
  );
}
