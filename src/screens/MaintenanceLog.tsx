// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Maintenance Log
//
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState, useMemo } from "react";
import type { AppState } from "../types/domain";

export interface MaintenanceLogProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: AppState;
}

function formatLogDate(isoString: string): string {
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
  } catch {
    return isoString;
  }
}

export function MaintenanceLog(props: MaintenanceLogProps = {}) {
  const { onNavigate, onAction, state } = props;
  const search = state?.searchQuery ?? "";
  const [filterType, setFilterType] = useState("All Equipment");
  const logs = state?.logs?.length ? state.logs : [];

  const filtered = useMemo(() => {
    let result = logs;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.action.toLowerCase().includes(q) ||
          l.operator.toLowerCase().includes(q) ||
          l.id.toLowerCase().includes(q) ||
          l.zone.toLowerCase().includes(q)
      );
    }
    if (filterType !== "All Equipment") {
      const typeMap: Record<string, string[]> = {
        Pumps: ["Pump", "pump"],
        Sensors: ["Sensor", "sensor"],
        Valves: ["Valve", "valve"],
      };
      const keywords = typeMap[filterType] ?? [];
      if (keywords.length) {
        result = result.filter((l) =>
          keywords.some((k) => l.action.includes(k))
        );
      }
    }
    return result;
  }, [logs, search, filterType]);

  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-lg h-16 bg-background border-b border-outline-variant">
        <div className="flex items-center gap-lg">
          <span className="font-h2 text-h2 text-on-surface font-extrabold tracking-tight">Greenhouse Ops</span>
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" style={{ fontSize: "18px" }}>search</span>
            <input
              value={search}
              onChange={(e) => onAction?.("set-search", e.target.value)}
              className="bg-surface-container border border-outline-variant rounded-full py-1.5 pl-10 pr-4 text-body-sm text-on-surface focus:outline-none focus:border-primary w-64 transition-colors"
              placeholder="Search operations..."
              type="text"
              aria-label="Search operations"
            />
          </div>
        </div>
        <div className="flex items-center gap-md text-primary">
          <button aria-label="Notifications" className="hover:bg-surface-variant p-2 rounded-full transition-colors flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-95">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button aria-label="Help" className="hover:bg-surface-variant p-2 rounded-full transition-colors flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-95">
            <span className="material-symbols-outlined">help</span>
          </button>
          <button
            onClick={() => onAction?.('emergency-stop')}
            className="ml-sm bg-error-container text-error border border-error-container hover:border-error px-4 py-2 rounded-xl font-body-sm text-body-sm font-semibold transition-colors flex items-center gap-xs shadow-[0_0_8px_rgba(147,0,10,0.2)]"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>warning</span>
            Emergency Stop
          </button>
          <div
            onClick={() => onAction?.("toggle-profile")}
            className="ml-sm w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden cursor-pointer"
            role="button"
            aria-label="Open profile panel"
            tabIndex={0}
          >
            <img
              alt="Operator Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtl1lyeiVpd3Udb0v7xCHfEEKgsS9CpNyJ1Atx6IC6ml_ikX-r2cmW2U44Yum48MILHvfWDHDRg4AT17b3RzHXofy9tZ5sQWXP8KG2m-ReJIPsppFWUYWWcT6JX4IbTYwAZHDwfiZiPXZjFiW9bPhujPiXECq0x8r_Gv7vToe-nin_xl_zGA-3P2qBCXyiw-3VPH8Yz-OBi27KDXMovzL43-dX8gNy-6flSOxRgK6o_oRhokbS69vXp9tcl_OdtaoWuRqqmSxS1ow"
            />
          </div>
        </div>
      </header>
      <div className="flex flex-1 pt-16">
        {/* SideNavBar */}
        <nav className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-surface-container border-r border-outline-variant flex flex-col py-md z-40">
          <div className="px-md mb-xl flex items-center gap-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-variant border border-outline-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">hub</span>
            </div>
            <div>
              <h2 className="font-h3 text-h3 text-primary">RootFix Console</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Zone 04 - Active</p>
            </div>
          </div>
          <div className="flex-1 px-sm flex flex-col gap-xs">
            <button onClick={() => onNavigate?.("dashboard")} className="w-full text-left flex items-center gap-md px-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-body-sm text-body-sm">Dashboard</span>
            </button>
            <button onClick={() => onNavigate?.("task-board")} className="w-full text-left flex items-center gap-md px-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">assignment</span>
              <span className="font-body-sm text-body-sm">Task Board</span>
            </button>
            <button onClick={() => onNavigate?.("equipment")} className="w-full text-left flex items-center gap-md px-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">precision_manufacturing</span>
              <span className="font-body-sm text-body-sm">Equipment</span>
            </button>
            <button onClick={() => onNavigate?.("logs")} className="w-full text-left flex items-center gap-md px-md py-2.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold translate-x-1 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
              <span className="font-body-sm text-body-sm">Logs</span>
            </button>
          </div>
          <div className="px-sm flex flex-col gap-xs mt-auto pt-md border-t border-outline-variant">
            <button onClick={() => onNavigate?.("settings")} className="w-full text-left flex items-center gap-md px-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-body-sm text-body-sm">Settings</span>
            </button>
            <button onClick={() => onAction?.("toggle-profile")} className="w-full text-left flex items-center gap-md px-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">person</span>
              <span className="font-body-sm text-body-sm">Account</span>
            </button>
          </div>
        </nav>
        {/* Main Content Area */}
        <main className="flex-1 ml-64 p-margin overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-gutter">
            {/* Page Header */}
            <div className="flex items-end justify-between pb-sm">
              <div>
                <h1 className="font-h1 text-h1 text-on-surface">Maintenance Log</h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Chronological record of system maintenance and diagnostic events.</p>
              </div>
              <div className="flex gap-sm">
                <button
                  onClick={() => onAction?.("export-csv")}
                  className="bg-surface-container border border-outline-variant text-on-surface px-4 py-2 rounded-xl hover:bg-surface-variant transition-colors flex items-center gap-xs font-body-sm text-body-sm"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>download</span>
                  Export
                </button>
              </div>
            </div>
            {/* Filter Bar (Bento style card) */}
            <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-wrap gap-md items-end">
              <div className="flex-1 min-w-[200px]">
                <label className="block font-body-sm text-body-sm text-on-surface-variant mb-1">Date Range</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" style={{ fontSize: "18px" }}>calendar_today</span>
                  <input
                    className="w-full bg-surface-container border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-body-sm text-on-surface focus:outline-none focus:border-primary cursor-pointer hover:bg-surface-variant transition-colors"
                    readOnly={true}
                    type="text"
                    value="May 5, 2024 - May 8, 2024"
                    aria-label="Date range"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block font-body-sm text-body-sm text-on-surface-variant mb-1">Equipment Type</label>
                <div className="relative">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant rounded-lg py-2 pl-4 pr-10 text-body-sm text-on-surface appearance-none focus:outline-none focus:border-primary hover:bg-surface-variant transition-colors"
                    aria-label="Equipment type filter"
                  >
                    <option>All Equipment</option>
                    <option>Pumps</option>
                    <option>Sensors</option>
                    <option>Valves</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" style={{ fontSize: "18px" }}>arrow_drop_down</span>
                </div>
              </div>
              <div className="flex-2 min-w-[300px]">
                <label className="block font-body-sm text-body-sm text-on-surface-variant mb-1">Search Keywords</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" style={{ fontSize: "18px" }}>search</span>
                  <input
                    value={search}
                    onChange={(e) => onAction?.("set-search", e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-body-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                    placeholder="Search by ID, action, or personnel..."
                    type="text"
                    aria-label="Search keywords"
                  />
                </div>
              </div>
              <button
                className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-body-sm text-body-sm hover:opacity-90 transition-opacity h-[38px]"
                onClick={() => {
                  // Filters apply live; button provides visual confirmation
                  onAction?.("set-search", search);
                }}
              >
                Apply Filters
              </button>
            </div>
            {/* Data Table Container */}
            <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden flex flex-col">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant bg-surface-container-low">
                      <th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">Date / Time</th>
                      <th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">Equipment ID</th>
                      <th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">Action Taken</th>
                      <th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">Performed By</th>
                      <th className="py-3 px-md font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant font-body-sm text-body-sm">
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-8 px-md text-center text-on-surface-variant font-body-sm">No matching records found</td>
                      </tr>
                    ) : (
                      filtered.map((log) => (
                        <tr key={log.id} className="hover:bg-surface-variant transition-colors">
                          <td className="py-3 px-md font-mono-data text-mono-data text-on-surface">{formatLogDate(log.timestamp)}</td>
                          <td className="py-3 px-md font-mono-data text-mono-data text-secondary">{log.id}</td>
                          <td className="py-3 px-md text-on-surface">{log.action}</td>
                          <td className="py-3 px-md text-on-surface-variant">{log.operator}</td>
                          <td className="py-3 px-md">
                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${log.status === "success" ? "bg-secondary-container/20 text-secondary border-secondary/20" : log.status === "failed" ? "bg-error-container/20 text-error border-error/20" : "bg-primary-container/20 text-primary border-primary/20"}`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${log.status === "success" ? "bg-secondary" : log.status === "failed" ? "bg-error" : "bg-primary"}`}></div>
                              {log.status === "success" ? "Success" : log.status === "failed" ? "Failed" : "Complete"}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {/* Pagination Footer */}
              <div className="border-t border-outline-variant bg-surface p-sm px-md flex items-center justify-between text-body-sm text-on-surface-variant">
                <span>Showing 1 to {filtered.length} of {filtered.length} entries</span>
                <div className="flex gap-1">
                  <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-variant disabled:opacity-50" disabled={true} aria-label="Previous page">
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>chevron_left</span>
                  </button>
                  <button className="w-8 h-8 rounded flex items-center justify-center bg-surface-variant text-primary font-semibold" aria-label="Page 1" aria-current="page">1</button>
                  <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-variant" disabled={true} aria-label="Page 2">2</button>
                  <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-variant" disabled={true} aria-label="Page 3">3</button>
                  <span className="w-8 h-8 flex items-center justify-center">...</span>
                  <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-variant" disabled={true} aria-label="Next page">
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>chevron_right</span>
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
