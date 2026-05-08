// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Profile Panel
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface ProfilePanelProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: unknown;
}

export function ProfilePanel(_props: ProfilePanelProps = {}) {
  return (
    <>
      {/* Simulated App Background Environment (to provide context for the overlay) */}
      <div className="absolute inset-0 z-0 flex flex-col pointer-events-none opacity-40">
      <div className="h-16 border-b border-outline-variant bg-surface-container flex items-center px-lg">
      <div className="w-32 h-6 bg-surface-variant rounded"></div>
      </div>
      <div className="flex-1 flex">
      <div className="w-64 border-r border-outline-variant bg-surface-container-low p-md space-y-sm">
      <div className="w-full h-8 bg-surface-variant rounded"></div>
      <div className="w-full h-8 bg-surface-variant rounded"></div>
      <div className="w-full h-8 bg-surface-variant rounded"></div>
      </div>
      <div className="flex-1 p-xl grid grid-cols-3 gap-lg">
      <div className="h-48 bg-surface-container rounded-xl border border-outline-variant"></div>
      <div className="h-48 bg-surface-container rounded-xl border border-outline-variant"></div>
      <div className="h-48 bg-surface-container rounded-xl border border-outline-variant"></div>
      </div>
      </div>
      </div>
      {/* Overlay Backdrop */}
      <div aria-hidden={true} className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"></div>
      {/* Side Drawer Panel */}
      <aside aria-label="Profile Panel" aria-modal="true" className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-surface-container-high border-l border-outline-variant shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out" role="dialog">
      {/* Header */}
      <header className="flex items-center justify-between px-lg py-md border-b border-outline-variant bg-surface-container-highest">
      <h2 className="font-h2 text-h2 text-on-surface">Profile</h2>
      <button aria-label="Close panel" className="p-xs rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant hover:text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-highest">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'wght' 300"}}>close</span>
      </button>
      </header>
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto flex flex-col">
      {/* Operator Identity Section */}
      <section className="p-xl flex flex-col items-center border-b border-outline-variant bg-surface-container">
      <div className="relative mb-md">
      <div className="w-24 h-24 rounded-full border-2 border-primary-container p-xs bg-surface-variant flex items-center justify-center overflow-hidden shadow-sm">
      <img alt="Operator Profile Picture" className="w-full h-full object-cover rounded-full" data-alt="A professional, well-lit headshot of a male greenhouse operator in his mid-30s. He has a calm, focused expression and short dark hair. He is wearing a dark, utilitarian technical work jacket over a layered dark blue shirt. The background is a slightly blurred, high-tech industrial environment with muted cool grey tones, reflecting a modern, dark-themed agricultural facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7BQtHGLnGae4RD5OLgJUjOvvR2aQ6erQ9DrVUA11txk9oHVAm_bS4WH7Dc3m8srnoA_8ZtCnntYFjatfx6cmIoB0CFOWrCNapgQh4WfwOUsSkixb_-IpybZZG-kjT4CMldnZBfdm5IYHwtmQzlyGmQ4ZTVd9gVtWeA-JObZ2DOD_pIqeasIOh2NGRjdXAFpA-rh6j5thtvdHCTzdkvdMRCwXoJByGcn5mN-9o3K62jpO9kiRlxyjPeCwXEUtBDlENHPDbG8oRPg8" />
      </div>
      {/* Status Indicator */}
      <div className="absolute bottom-1 right-1 w-5 h-5 bg-surface-container rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-[#4ade80] rounded-full shadow-[0_0_8px_rgba(74,222,128,0.4)]"></div>
      </div>
      </div>
      <h1 className="font-h1 text-h1 text-on-surface mb-xs">Alex Rivera</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Senior Technician</p>
      <div className="mt-md px-md py-xs rounded-full bg-surface-variant border border-outline-variant flex items-center gap-xs">
      <span className="material-symbols-outlined text-primary text-[16px]">badge</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant tracking-wider">ID: OPR-492-X</span>
      </div>
      </section>
      {/* Preferences / Settings Section */}
      <section className="p-lg flex-1">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-md uppercase tracking-widest pl-xs">Notifications</h3>
      <div className="space-y-sm">
      {/* Toggle: System Alerts */}
      <label className="flex items-center justify-between p-md rounded-xl bg-surface border border-outline-variant hover:border-outline cursor-pointer transition-all group">
      <div className="flex items-start gap-md">
      <div className="mt-xs p-xs rounded-lg bg-surface-variant text-on-surface-variant group-hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      </div>
      <div>
      <div className="font-body-md text-body-md text-on-surface font-medium mb-1">System Alerts</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant max-w-[200px]">Critical infrastructure and environmental warnings.</div>
      </div>
      </div>
      <div className="relative inline-flex items-center cursor-pointer ml-md shrink-0">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-outline after:border-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary-fixed"></div>
      </div>
      </label>
      {/* Toggle: Task Updates */}
      <label className="flex items-center justify-between p-md rounded-xl bg-surface border border-outline-variant hover:border-outline cursor-pointer transition-all group">
      <div className="flex items-start gap-md">
      <div className="mt-xs p-xs rounded-lg bg-surface-variant text-on-surface-variant group-hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
      </div>
      <div>
      <div className="font-body-md text-body-md text-on-surface font-medium mb-1">Task Updates</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant max-w-[200px]">Changes to assigned operational tasks and schedules.</div>
      </div>
      </div>
      <div className="relative inline-flex items-center cursor-pointer ml-md shrink-0">
      <input className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-outline after:border-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary-fixed"></div>
      </div>
      </label>
      </div>
      </section>
      </div>
      {/* Footer / Actions */}
      <footer className="p-lg border-t border-outline-variant bg-surface-container-highest mt-auto">
      <button className="w-full flex items-center justify-center gap-sm px-md h-10 rounded-lg bg-transparent border border-outline-variant text-on-surface hover:bg-surface-variant hover:border-outline transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-highest">
      <span className="material-symbols-outlined text-[20px]">logout</span>
      <span className="font-body-md text-body-md font-medium">Sign Out</span>
      </button>
      </footer>
      </aside>
    </>
  );
}
