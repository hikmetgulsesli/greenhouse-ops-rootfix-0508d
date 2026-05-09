// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Filtered Overview
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface FilteredOverviewProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: unknown;
}

export function FilteredOverview(_props: FilteredOverviewProps = {}) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface flex justify-between items-center w-full px-lg py-sm h-16 border-b border-outline-variant docked full-width top-0 z-50">
      <div className="flex items-center gap-md">
      <span className="font-headline-md text-headline-md font-bold text-primary">Greenhouse Ops</span>
      {/* Search Bar on Left */}
      <div className="hidden md:flex items-center bg-surface-container-low border border-outline-variant rounded-lg px-sm py-unit focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all ml-lg w-64">
      <span className="material-symbols-outlined text-on-surface-variant text-lg mr-sm" data-icon="search">search</span>
      <input className="bg-transparent border-none outline-none text-body-sm font-body-sm text-on-surface w-full placeholder-on-surface-variant p-0 focus:ring-0" placeholder="Search events, zones..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      {/* Trailing Icon Actions */}
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded-full active:scale-95 duration-100 flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-sm rounded-full active:scale-95 duration-100 flex items-center justify-center">
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
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      {/* Tab: Task Board */}
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
      <span className="font-label-md text-label-md">Task Board</span>
      </a>
      {/* Tab: Equipment */}
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
      <span className="font-label-md text-label-md">Equipment</span>
      </a>
      {/* Tab: Logs (Active based on Intent: Filtered Operational View/Events) */}
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-primary font-bold border-r-2 border-primary bg-primary-container/10 hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="database" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>database</span>
      <span className="font-label-md text-label-md">Logs</span>
      </a>
      </div>
      <div className="mt-auto px-sm flex flex-col gap-unit pt-lg border-t border-outline-variant mx-md">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      <span className="font-label-md text-label-md">Account</span>
      </a>
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
      <button className="bg-[#2563EB] text-white px-md py-sm rounded border border-transparent font-label-md text-label-md flex items-center gap-sm hover:opacity-90 active:scale-95 transition-all focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-surface-container-lowest">
      <span className="material-symbols-outlined text-[18px]" data-icon="bookmark">bookmark</span>
                              Save View
                          </button>
      </div>
      </div>
      {/* Active Filters Bar */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md mb-xl flex items-center gap-md flex-wrap">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Filters:</span>
      <div className="flex items-center bg-[#690005]/20 border border-[#93000a] text-[#ffb4ab] px-sm py-unit rounded-full font-label-sm text-label-sm gap-xs">
      <span className="material-symbols-outlined text-[14px]" data-icon="error">error</span>
                          Status: Critical
                          <button className="hover:text-white transition-colors flex items-center justify-center ml-xs"><span className="material-symbols-outlined text-[14px]" data-icon="close">close</span></button>
      </div>
      <div className="flex items-center bg-surface-container border border-outline-variant text-on-surface px-sm py-unit rounded-full font-label-sm text-label-sm gap-xs">
      <span className="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span>
                          Zone: 04
                          <button className="hover:text-on-surface-variant transition-colors flex items-center justify-center ml-xs"><span className="material-symbols-outlined text-[14px]" data-icon="close">close</span></button>
      </div>
      <div className="flex items-center bg-surface-container border border-outline-variant text-on-surface px-sm py-unit rounded-full font-label-sm text-label-sm gap-xs">
      <span className="material-symbols-outlined text-[14px]" data-icon="calendar_today">calendar_today</span>
                          Last 24 Hours
                          <button className="hover:text-on-surface-variant transition-colors flex items-center justify-center ml-xs"><span className="material-symbols-outlined text-[14px]" data-icon="close">close</span></button>
      </div>
      <button className="text-primary font-label-sm text-label-sm hover:underline ml-auto">Clear All</button>
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
      {/* Row 1 */}
      <tr className="hover:bg-surface-container-high transition-colors group cursor-pointer bg-[#93000a]/10">
      <td className="p-md text-center">
      <span className="material-symbols-outlined text-[#ffb4ab] text-[20px]" data-icon="warning" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      </td>
      <td className="p-md text-[#ffb4ab]">EVT-8921</td>
      <td className="p-md text-on-surface font-body-sm text-body-sm">Pressure valve failure in main irrigation line. Immediate bypass required.</td>
      <td className="p-md">
      <span className="bg-surface-container border border-outline-variant px-xs py-unit rounded font-label-sm text-label-sm">Z-04</span>
      </td>
      <td className="p-md text-right text-on-surface-variant">10:42:05 AM</td>
      <td className="p-md text-center">
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-primary transition-all"><span className="material-symbols-outlined text-[20px]" data-icon="open_in_new">open_in_new</span></button>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-surface-container-high transition-colors group cursor-pointer">
      <td className="p-md text-center">
      <span className="material-symbols-outlined text-outline text-[20px]" data-icon="info">info</span>
      </td>
      <td className="p-md">EVT-8920</td>
      <td className="p-md text-on-surface font-body-sm text-body-sm">Humidity sensor recalibration initiated manually.</td>
      <td className="p-md">
      <span className="bg-surface-container border border-outline-variant px-xs py-unit rounded font-label-sm text-label-sm">Z-04</span>
      </td>
      <td className="p-md text-right text-on-surface-variant">09:15:22 AM</td>
      <td className="p-md text-center">
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-primary transition-all"><span className="material-symbols-outlined text-[20px]" data-icon="open_in_new">open_in_new</span></button>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-high transition-colors group cursor-pointer bg-[#93000a]/10">
      <td className="p-md text-center">
      <span className="material-symbols-outlined text-[#ffb4ab] text-[20px]" data-icon="warning" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      </td>
      <td className="p-md text-[#ffb4ab]">EVT-8915</td>
      <td className="p-md text-on-surface font-body-sm text-body-sm">CO2 levels dropped below critical threshold. Venting stuck.</td>
      <td className="p-md">
      <span className="bg-surface-container border border-outline-variant px-xs py-unit rounded font-label-sm text-label-sm">Z-04</span>
      </td>
      <td className="p-md text-right text-on-surface-variant">08:02:11 AM</td>
      <td className="p-md text-center">
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-primary transition-all"><span className="material-symbols-outlined text-[20px]" data-icon="open_in_new">open_in_new</span></button>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="hover:bg-surface-container-high transition-colors group cursor-pointer">
      <td className="p-md text-center">
      <span className="material-symbols-outlined text-outline text-[20px]" data-icon="info">info</span>
      </td>
      <td className="p-md">EVT-8910</td>
      <td className="p-md text-on-surface font-body-sm text-body-sm">Routine diagnostic scan completed. No anomalies detected in subsystem B.</td>
      <td className="p-md">
      <span className="bg-surface-container border border-outline-variant px-xs py-unit rounded font-label-sm text-label-sm">Z-04</span>
      </td>
      <td className="p-md text-right text-on-surface-variant">06:00:00 AM</td>
      <td className="p-md text-center">
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-primary transition-all"><span className="material-symbols-outlined text-[20px]" data-icon="open_in_new">open_in_new</span></button>
      </td>
      </tr>
      </tbody>
      </table>
      <div className="p-md border-t border-outline-variant flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low">
      <span>Showing 1-4 of 12 filtered events</span>
      <div className="flex gap-sm">
      <button className="p-unit border border-outline-variant rounded hover:bg-surface-container-high disabled:opacity-50"><span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span></button>
      <button className="p-unit border border-outline-variant rounded hover:bg-surface-container-high"><span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span></button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
