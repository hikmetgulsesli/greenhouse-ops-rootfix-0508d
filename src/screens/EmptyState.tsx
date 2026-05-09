// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Empty State
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import type { BaseScreenProps, ScreenName } from '../types/domain';

export interface EmptyStateProps extends BaseScreenProps {
  onAction?: (action: string) => void;
}

export function EmptyState({ onNavigate, onAction }: EmptyStateProps = {}) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary docked full-width top-0 z-50 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-lg py-sm h-16">
      <div className="flex items-center gap-sm">
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Greenhouse Ops</span>
      </div>
      <div className="flex items-center gap-md">
      <div className="flex items-center gap-sm">
      <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors active:scale-95 duration-100 text-on-surface-variant flex items-center justify-center" aria-label="Notifications">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors active:scale-95 duration-100 text-on-surface-variant flex items-center justify-center" aria-label="Help">
      <span className="material-symbols-outlined" data-icon="help">help</span>
      </button>
      </div>
      <button className="bg-error text-on-error px-4 py-2 rounded font-label-md text-label-md font-bold hover:bg-error-container transition-colors active:scale-95 duration-100 flex items-center justify-center">
                      Emergency Stop
                  </button>
      <div className="h-8 w-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a user, stylized in a moody, industrial dark mode setting. The lighting is low-key with subtle blue rim light, fitting an advanced dashboard UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfOI00Wy-K6qWJY6sigYd1rT7FqE4-_Njf2-n4AQY8jWppQBJvCPZRCF-CLXfjIabneXk7nLlqHRBAsqmnDDyYuM4wTxkgmwkuHY_2AcJiUB9Y582UVR4fr3sjLm9CFo8sQK2cibaPedhrQiPqD0607WLiK68xm4fsbTC8FqJFeXUHzIe9AfK0L8FHkKSMlrLKenqXGUwCKQHSnoE4Io3zvLCEw4Bjh813o_7T2cPCYt5riuJJFU7Liz2X0tCqWSKUyYx4kNVQMt0" />
      </div>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="hidden md:flex bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary docked h-screen left-0 w-60 border-r border-outline-variant flat no shadows flex-col py-lg shrink-0 overflow-y-auto">
      <div className="px-md mb-lg">
      <div className="flex items-center gap-sm mb-sm">
      <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center overflow-hidden">
      <span className="material-symbols-outlined text-primary" data-icon="grass">grass</span>
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Main Operations</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Facility A1</p>
      </div>
      </div>
      </div>
      <div className="flex-1 px-sm space-y-1">
      <button className="flex items-center gap-sm px-md py-sm rounded-r-full text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('dashboard')}>
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </button>
      <button className="flex items-center gap-sm px-md py-sm rounded-r-full text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('task-board')}>
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
      <span className="font-label-md text-label-md">Task Board</span>
      </button>
      <button className="flex items-center gap-sm px-md py-sm rounded-r-full text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('equipment')}>
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
      <span className="font-label-md text-label-md">Equipment</span>
      </button>
      <button className="flex items-center gap-sm px-md py-sm rounded-r-full text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('logs')}>
      <span className="material-symbols-outlined" data-icon="database">database</span>
      <span className="font-label-md text-label-md">Logs</span>
      </button>
      </div>
      <div className="mt-auto px-sm pt-lg border-t border-outline-variant/30 space-y-1">
      <button className="flex items-center gap-sm px-md py-sm rounded-r-full text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('settings')}>
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </button>
      <button className="flex items-center gap-sm px-md py-sm rounded-r-full text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('profile')}>
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      <span className="font-label-md text-label-md">Account</span>
      </button>
      </div>
      </nav>
      {/* Main Content Area: Empty State */}
      <main className="flex-1 flex items-center justify-center p-lg md:p-xl overflow-y-auto bg-surface-container-lowest">
      <div className="max-w-md w-full flex flex-col items-center text-center">
      {/* Illustration/Icon */}
      <div className="w-48 h-48 mb-lg relative flex items-center justify-center">
      <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse opacity-50 blur-xl"></div>
      <div className="relative w-32 h-32 bg-surface border border-outline-variant rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.05)]">
      <span className="material-symbols-outlined text-6xl text-outline-variant" data-icon="inventory_2" style={{fontSize: "64px", fontVariationSettings: "'FILL' 0"}}>inventory_2</span>
      </div>
      </div>
      {/* Text Content */}
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-sm tracking-tight">Welcome to Greenhouse Ops</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-sm">
                          Your workspace is currently quiet. Start by setting up your first task or scanning equipment.
                      </p>
      {/* Action Area */}
      <div className="flex flex-col sm:flex-row gap-md w-full justify-center">
      <button className="bg-[#2563EB] text-[#ffffff] font-label-md text-label-md py-3 px-6 rounded hover:bg-[#1d4ed8] focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0c0e16] focus:ring-[#2563EB] transition-all flex items-center justify-center gap-sm shadow-[0_0_15px_rgba(37,99,235,0.15)] active:scale-95 duration-100" onClick={() => onAction?.('create-first-task')}>
      <span className="material-symbols-outlined" data-icon="add" style={{fontSize: "18px"}}>add</span>
                              Create Your First Task
                          </button>
      <button className="bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-3 px-6 rounded hover:bg-surface-container-low transition-all flex items-center justify-center gap-sm active:scale-95 duration-100" onClick={() => onAction?.('scan-equipment')}>
      <span className="material-symbols-outlined" data-icon="qr_code_scanner" style={{fontSize: "18px"}}>qr_code_scanner</span>
                              Scan Equipment
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
