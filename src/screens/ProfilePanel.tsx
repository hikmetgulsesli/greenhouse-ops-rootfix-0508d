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
      {/* Dashboard Background (Simulated behind the overlay) */}
      <div className="absolute inset-0 bg-dashboard-placeholder z-0 flex flex-col" data-alt="A modern industrial control room dashboard view, blurred in the background. Shows various high-tech screens with graphs and data in a dark, minimalist setting with subtle blue glows.">
      {/* TopNavBar Structure (from JSON) */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary docked full-width top-0 z-50 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-lg py-sm h-16">
      <div className="flex items-center gap-md">
      <span className="material-symbols-outlined text-on-surface hover:bg-surface-container-high transition-colors p-sm rounded cursor-pointer">menu</span>
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Greenhouse Ops</span>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="bg-surface-container border border-outline-variant rounded pl-xl pr-md py-sm text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all w-64" placeholder="Search..." type="text" />
      </div>
      <span className="material-symbols-outlined text-on-surface hover:bg-surface-container-high transition-colors p-sm rounded cursor-pointer">notifications</span>
      <span className="material-symbols-outlined text-on-surface hover:bg-surface-container-high transition-colors p-sm rounded cursor-pointer">help</span>
      <button className="bg-surface border border-outline-variant hover:bg-surface-container-high text-error font-label-md text-label-md px-md py-sm rounded transition-colors ml-sm flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">warning</span> Emergency Stop
                      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar Structure (from JSON) */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary docked h-full left-0 w-60 border-r border-outline-variant flat no shadows flex flex-col py-lg hidden md:flex">
      <div className="px-md mb-lg">
      <div className="font-headline-sm text-headline-sm text-on-surface">Main Operations</div>
      <div className="text-on-surface-variant font-label-sm text-label-sm mt-xs">Facility A1</div>
      </div>
      <div className="flex-1 flex flex-col gap-sm px-sm">
      <div className="flex items-center gap-md px-md py-sm rounded cursor-pointer text-on-surface-variant hover:bg-surface-container-highest transition-all">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </div>
      <div className="flex items-center gap-md px-md py-sm rounded cursor-pointer text-on-surface-variant hover:bg-surface-container-highest transition-all">
      <span className="material-symbols-outlined">assignment</span>
      <span className="font-label-md text-label-md">Task Board</span>
      </div>
      <div className="flex items-center gap-md px-md py-sm rounded cursor-pointer text-on-surface-variant hover:bg-surface-container-highest transition-all">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span className="font-label-md text-label-md">Equipment</span>
      </div>
      <div className="flex items-center gap-md px-md py-sm rounded cursor-pointer text-on-surface-variant hover:bg-surface-container-highest transition-all">
      <span className="material-symbols-outlined">database</span>
      <span className="font-label-md text-label-md">Logs</span>
      </div>
      </div>
      <div className="mt-auto flex flex-col gap-sm px-sm border-t border-outline-variant pt-md">
      <div className="flex items-center gap-md px-md py-sm rounded cursor-pointer text-on-surface-variant hover:bg-surface-container-highest transition-all">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </div>
      <div className="flex items-center gap-md px-md py-sm rounded cursor-pointer text-primary font-bold border-r-2 border-primary bg-primary-container/10">
      <span className="material-symbols-outlined">account_circle</span>
      <span className="font-label-md text-label-md">Account</span>
      </div>
      </div>
      </nav>
      <main className="flex-1 p-lg"></main>
      </div>
      </div>
      {/* Overlay Backdrop */}
      <div className="absolute inset-0 bg-[#0c0e16]/60 backdrop-blur-sm z-40"></div>
      {/* Profile Panel Slide-out */}
      <aside className="absolute top-0 right-0 h-full w-full max-w-[400px] bg-[#11131b] border-l border-[#1f2937] shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0">
      {/* Header */}
      <div className="flex justify-between items-center p-lg border-b border-[#1f2937]">
      <h2 className="font-headline-md text-headline-md text-[#e1e2ed]">Profile Settings</h2>
      <button className="text-[#8d90a0] hover:text-[#e1e2ed] transition-colors p-xs rounded hover:bg-[#282a32]">
      <span className="material-symbols-outlined">close</span>
      </button>
      </div>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-lg flex flex-col gap-xl">
      {/* User Info Card */}
      <div className="bg-[#191b23] border border-[#1f2937] rounded-lg p-lg flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-[#282a32] border-2 border-[#1f2937] mb-md overflow-hidden relative group">
      <img alt="Alex Rivera Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a senior technician named Alex Rivera. He is wearing modern, dark technical attire appropriate for an industrial or greenhouse setting. The lighting is crisp and cool, casting a subtle blue-toned rim light against a dark background, fitting a high-tech dark mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuIZPWUqYl8V2-ikJvftLczOJ9HlPRUiHdTSVLwup2A4Uqcw2RUB2Y9XJDL72Pc3KStgGPWJ6l3ZioDmXo1GdI8feCFlV5hZ2TFotZoJ6zY25pfrCF_tvxkowC6ev1X7hwIT1oivGAH-hQWesIIHPPutL9Zqp2A01FPYMYR7wQz72ppo1tp7tByFZskIvwNHbTsdZbGd3p407yTsXXL1FJQXCM99BkdtSURS1YyPttb6EhPOToZ_MrUZlBqVY6C37B_wrvBi1Mq94" />
      <div className="absolute inset-0 bg-[#0c0e16]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm">
      <span className="material-symbols-outlined text-[#e1e2ed]">photo_camera</span>
      </div>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-[#e1e2ed] mb-unit">Alex Rivera</h3>
      <span className="font-label-md text-label-md text-[#b4c5ff] bg-[#2563eb]/10 px-md py-xs rounded-full border border-[#2563eb]/20">Senior Technician</span>
      <div className="mt-md font-mono-data text-mono-data text-[#8d90a0] flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">badge</span> ID: AR-9421-B
                      </div>
      </div>
      {/* Preferences Section */}
      <div>
      <h4 className="font-label-md text-label-md text-[#8d90a0] uppercase tracking-wider mb-md border-b border-[#1f2937] pb-sm">Notifications</h4>
      <div className="flex flex-col gap-sm">
      {/* Toggle 1 */}
      <div className="flex items-center justify-between p-md bg-[#191b23] border border-[#1f2937] rounded hover:border-[#434655] transition-colors">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-[#282a32] flex items-center justify-center text-[#ffb4ab]">
      <span className="material-symbols-outlined">warning</span>
      </div>
      <div>
      <div className="font-body-lg text-body-lg text-[#e1e2ed] mb-unit">System Alerts</div>
      <div className="font-body-sm text-body-sm text-[#8d90a0]">Critical threshold warnings</div>
      </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-[#32343d] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#e1e2ed] after:border-[#434655] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2563eb]"></div>
      </label>
      </div>
      {/* Toggle 2 */}
      <div className="flex items-center justify-between p-md bg-[#191b23] border border-[#1f2937] rounded hover:border-[#434655] transition-colors">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-[#282a32] flex items-center justify-center text-[#b4c5ff]">
      <span className="material-symbols-outlined">assignment_turned_in</span>
      </div>
      <div>
      <div className="font-body-lg text-body-lg text-[#e1e2ed] mb-unit">Task Updates</div>
      <div className="font-body-sm text-body-sm text-[#8d90a0]">New assignments and completions</div>
      </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-[#32343d] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#e1e2ed] after:border-[#434655] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2563eb]"></div>
      </label>
      </div>
      </div>
      </div>
      {/* Quick Links / Account Actions */}
      <div>
      <h4 className="font-label-md text-label-md text-[#8d90a0] uppercase tracking-wider mb-md border-b border-[#1f2937] pb-sm">Account Options</h4>
      <div className="flex flex-col gap-unit">
      <button className="flex items-center gap-md p-md rounded hover:bg-[#282a32] text-[#e1e2ed] transition-colors text-left w-full">
      <span className="material-symbols-outlined text-[#8d90a0]">manage_accounts</span>
      <span className="font-body-md text-body-md">Edit Profile Details</span>
      <span className="material-symbols-outlined ml-auto text-[#434655]">chevron_right</span>
      </button>
      <button className="flex items-center gap-md p-md rounded hover:bg-[#282a32] text-[#e1e2ed] transition-colors text-left w-full">
      <span className="material-symbols-outlined text-[#8d90a0]">security</span>
      <span className="font-body-md text-body-md">Security &amp; Access</span>
      <span className="material-symbols-outlined ml-auto text-[#434655]">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      {/* Footer Action */}
      <div className="p-lg border-t border-[#1f2937] bg-[#11131b]">
      <button className="w-full bg-transparent border border-[#1f2937] hover:bg-[#1f2937] text-[#e1e2ed] font-label-md text-label-md py-md rounded transition-all flex items-center justify-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">logout</span>
                      Sign Out
                  </button>
      </div>
      </aside>
    </>
  );
}
