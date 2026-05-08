// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Filtered Overview
//
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState, useMemo } from "react";
import type { AppState } from "../types/domain";

export interface FilteredOverviewProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: AppState;
}

function formatEventTime(dateStr: string): string {
  if (!dateStr) return "—";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return dateStr;
  }
}

export function FilteredOverview(props: FilteredOverviewProps = {}) {
  const { onNavigate, onAction, state } = props;
  const search = state?.searchQuery ?? "";
  const [zoneFilter, setZoneFilter] = useState("All Zones");
  const [statusFilter, setStatusFilter] = useState<string[]>(["critical", "in-progress"]);

  const tasks = state?.tasks ?? [];

  const displayRows = useMemo(() => {
    const filtered = tasks.filter((t) => {
      const matchesSearch =
        !search ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.zone.toLowerCase().includes(search.toLowerCase()) ||
        t.id.toLowerCase().includes(search.toLowerCase());
      const matchesZone = zoneFilter === "All Zones" || t.zone === zoneFilter;
      const taskEventStatus =
        t.priority === "critical"
          ? "critical"
          : t.status === "in-progress"
          ? "in-progress"
          : "resolved";
      const matchesStatus = statusFilter.length === 0 || statusFilter.includes(taskEventStatus);
      return matchesSearch && matchesZone && matchesStatus;
    });

    return filtered.map((t) => ({
      id: t.id,
      desc: t.title,
      zone: t.zone,
      status:
        t.priority === "critical"
          ? "critical"
          : t.status === "in-progress"
          ? "in-progress"
          : "resolved",
      time: formatEventTime(t.dueDate),
    }));
  }, [tasks, search, zoneFilter, statusFilter]);

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-lg h-16 bg-background border-b border-outline-variant">
        <div className="flex items-center gap-lg flex-1">
          <span className="font-h2 text-h2 text-on-surface font-extrabold tracking-tight">Greenhouse Ops</span>
          {/* Search Bar Prominent */}
          <div className="relative max-w-md w-full ml-xl">
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              value={search}
              onChange={(e) => onAction?.("set-search", e.target.value)}
              className="w-full bg-surface-container border border-outline-variant rounded-lg pl-xl pr-md h-10 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="Search events, zones, or equipment..."
              type="text"
              aria-label="Search events, zones, or equipment"
            />
          </div>
        </div>
        <div className="flex items-center gap-md">
          <button aria-label="Notifications" className="text-on-surface-variant hover:bg-surface-variant transition-colors p-sm rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button aria-label="Help" className="text-on-surface-variant hover:bg-surface-variant transition-colors p-sm rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">help</span>
          </button>
          <button
            onClick={() => onAction?.('emergency-stop')}
            className="bg-error-container text-on-error-container border border-error-container hover:bg-error/20 transition-colors px-md h-10 rounded-lg font-body-sm text-body-sm flex items-center gap-sm"
          >
            <span className="material-symbols-outlined text-[18px]">warning</span>
            Emergency Stop
          </button>
          <div
            onClick={() => onAction?.("toggle-profile")}
            className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-outline-variant ml-sm flex items-center justify-center cursor-pointer"
            role="button"
            aria-label="Open profile panel"
            tabIndex={0}
          >
            <span className="material-symbols-outlined text-outline">person</span>
          </div>
        </div>
      </nav>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] flex flex-col py-md bg-surface-container border-r border-outline-variant docked w-64 z-40">
        <div className="px-md mb-lg">
          <div className="flex items-center gap-md">
            <div className="w-12 h-12 rounded bg-surface border border-outline-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[24px]">dns</span>
            </div>
            <div>
              <h2 className="font-h3 text-h3 text-primary">RootFix Console</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Zone 04 - Active</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-sm flex flex-col gap-xs">
          <button onClick={() => onNavigate?.("dashboard")} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </button>
          {/* Active Tab */}
          <button onClick={() => onNavigate?.("task-board")} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg bg-secondary-container text-on-secondary-container font-semibold translate-x-1 transition-transform">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment</span>
            Task Board
          </button>
          <button onClick={() => onNavigate?.("equipment")} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined">precision_manufacturing</span>
            Equipment
          </button>
          <button onClick={() => onNavigate?.("logs")} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined">history</span>
            Logs
          </button>
        </nav>
        <div className="mt-auto px-sm flex flex-col gap-xs pt-md border-t border-outline-variant">
          <button onClick={() => onNavigate?.("settings")} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </button>
          <button onClick={() => onAction?.("toggle-profile")} className="w-full text-left flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined">person</span>
            Account
          </button>
        </div>
      </aside>
      {/* Main Canvas */}
      <main className="flex-1 ml-64 mt-16 p-lg flex flex-col gap-lg h-[calc(100vh-64px)] overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col gap-xs">
          <h1 className="font-h1 text-h1 text-on-surface">Event Operations</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Review and manage prioritized system events and anomalies.</p>
        </div>
        {/* Complex Filter Panel */}
        <section className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col gap-md">
          <div className="flex justify-between items-center border-b border-outline-variant pb-md">
            <div className="flex items-center gap-md font-h3 text-h3 text-on-surface">
              <span className="material-symbols-outlined text-outline">tune</span>
              Active Filters
            </div>
            <div className="flex gap-sm">
              <button
                onClick={() => {
                  setStatusFilter([]);
                  setZoneFilter("All Zones");
                  onAction?.("set-search", "");
                }}
                className="text-on-surface-variant font-body-sm text-body-sm px-md h-8 rounded hover:bg-surface-variant transition-colors"
              >
                Clear All
              </button>
              <button
                className="bg-primary-container text-on-primary-container font-body-sm text-body-sm px-md h-8 rounded flex items-center gap-xs disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={true}
                title="Save view is not available in this release"
              >
                <span className="material-symbols-outlined text-[16px]">save</span>
                Save View
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-md items-end">
            {/* Status Filter Group */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-sm">
              <label className="font-label-caps text-label-caps text-on-surface-variant">Status</label>
              <div className="flex flex-wrap gap-sm">
                {/* Critical Filter Chip */}
                <div
                  onClick={() =>
                    setStatusFilter((prev) =>
                      prev.includes("critical") ? prev.filter((s) => s !== "critical") : [...prev, "critical"]
                    )
                  }
                  className={`border rounded-full px-sm py-xs flex items-center gap-xs font-body-sm text-body-sm cursor-pointer transition-colors ${
                    statusFilter.includes("critical")
                      ? "bg-error-container border-error text-on-error-container"
                      : "bg-surface-container border-outline-variant text-on-surface-variant hover:bg-surface-variant"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-error"></div>
                  Critical
                  {statusFilter.includes("critical") && (
                    <span className="material-symbols-outlined text-[14px] ml-xs opacity-70 hover:opacity-100">close</span>
                  )}
                </div>
                {/* In Progress Filter Chip */}
                <div
                  onClick={() =>
                    setStatusFilter((prev) =>
                      prev.includes("in-progress") ? prev.filter((s) => s !== "in-progress") : [...prev, "in-progress"]
                    )
                  }
                  className={`border rounded-full px-sm py-xs flex items-center gap-xs font-body-sm text-body-sm cursor-pointer transition-colors ${
                    statusFilter.includes("in-progress")
                      ? "bg-tertiary-container border-tertiary text-on-tertiary-container"
                      : "bg-surface-container border-outline-variant text-on-surface-variant hover:bg-surface-variant"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                  In Progress
                  {statusFilter.includes("in-progress") && (
                    <span className="material-symbols-outlined text-[14px] ml-xs opacity-70 hover:opacity-100">close</span>
                  )}
                </div>
                {/* Resolved Filter Chip */}
                <div
                  onClick={() =>
                    setStatusFilter((prev) =>
                      prev.includes("resolved") ? prev.filter((s) => s !== "resolved") : [...prev, "resolved"]
                    )
                  }
                  className={`border rounded-full px-sm py-xs flex items-center gap-xs font-body-sm text-body-sm cursor-pointer transition-colors ${
                    statusFilter.includes("resolved")
                      ? "bg-secondary-container border-secondary text-on-secondary-container"
                      : "bg-surface-container border-outline-variant text-on-surface-variant hover:bg-surface-variant"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-outline"></div>
                  Resolved
                </div>
              </div>
            </div>
            {/* Zone Filter */}
            <div className="col-span-12 md:col-span-3 flex flex-col gap-sm">
              <label className="font-label-caps text-label-caps text-on-surface-variant">Facility Zone</label>
              <select
                value={zoneFilter}
                onChange={(e) => setZoneFilter(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant rounded-lg px-md h-10 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary appearance-none"
                aria-label="Facility zone filter"
              >
                <option>All Zones</option>
                <option>Zone A</option>
                <option>Zone B</option>
                <option>Zone C</option>
                <option>Zone D</option>
              </select>
            </div>
            {/* Time Filter */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-sm">
              <label className="font-label-caps text-label-caps text-on-surface-variant">Time Range</label>
              <div className="flex items-center gap-sm bg-surface-container border border-outline-variant rounded-lg px-md h-10 focus-within:border-primary">
                <span className="material-symbols-outlined text-outline text-[18px]">calendar_today</span>
                <input
                  className="w-full bg-transparent border-none p-0 font-body-sm text-body-sm text-on-surface focus:ring-0"
                  readOnly={true}
                  type="text"
                  value="Last 24 Hours"
                  aria-label="Time range"
                />
                <span className="material-symbols-outlined text-outline text-[18px]">expand_more</span>
              </div>
            </div>
          </div>
        </section>
        {/* Results Header */}
        <div className="flex justify-between items-center mt-sm">
          <span className="font-body-md text-body-md text-on-surface-variant">
            Showing {displayRows.length} of {displayRows.length} events
          </span>
          <div className="flex items-center gap-sm">
            <span className="font-body-sm text-body-sm text-on-surface-variant">Sort by:</span>
            <select className="bg-transparent border-none text-on-surface font-body-sm text-body-sm focus:ring-0 p-0 pr-lg cursor-pointer" aria-label="Sort by">
              <option>Priority (High to Low)</option>
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>
        </div>
        {/* Data Table (High Density) */}
        <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low font-label-caps text-label-caps text-on-surface-variant">
                <th className="py-sm px-md font-semibold w-24">Event ID</th>
                <th className="py-sm px-md font-semibold">Description</th>
                <th className="py-sm px-md font-semibold w-32">Zone</th>
                <th className="py-sm px-md font-semibold w-40">Status</th>
                <th className="py-sm px-md font-semibold w-32">Timestamp</th>
                <th className="py-sm px-md font-semibold w-16 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="font-body-sm text-body-sm">
              {displayRows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 px-md text-center text-on-surface-variant">
                    No events match the current filters
                  </td>
                </tr>
              ) : (
                displayRows.map((row) => (
                  <tr key={row.id} className="border-b border-outline-variant hover:bg-surface-variant transition-colors group">
                    <td className="py-md px-md font-mono-data text-mono-data text-primary">{row.id}</td>
                    <td className="py-md px-md text-on-surface font-medium">{row.desc}</td>
                    <td className="py-md px-md text-on-surface-variant">{row.zone}</td>
                    <td className="py-md px-md">
                      <div
                        className={`inline-flex items-center gap-xs rounded-full px-sm py-[2px] font-label-caps ${
                          row.status === "critical"
                            ? "bg-error-container/20 text-on-error-container border border-error-container/30"
                            : row.status === "in-progress"
                            ? "bg-tertiary-container/20 text-on-tertiary-container border border-tertiary-container/30"
                            : "bg-secondary-container/20 text-on-secondary-container border border-secondary-container/30"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            row.status === "critical" ? "bg-error" : row.status === "in-progress" ? "bg-tertiary" : "bg-secondary"
                          }`}
                        ></div>
                        {row.status === "critical" ? "Critical" : row.status === "in-progress" ? "In Progress" : "Resolved"}
                      </div>
                    </td>
                    <td className="py-md px-md font-mono-data text-mono-data text-on-surface-variant">{row.time}</td>
                    <td className="py-md px-md text-center">
                      <button
                        onClick={() => onNavigate?.("task-board")}
                        className="text-outline group-hover:text-primary transition-colors"
                        aria-label="View in task board"
                      >
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
