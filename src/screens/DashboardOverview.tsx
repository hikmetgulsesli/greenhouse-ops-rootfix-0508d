// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Dashboard Overview
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import type { BaseScreenProps, AlertItem, LogEntry } from '../types/domain';

export interface DashboardOverviewProps extends BaseScreenProps {
  onAction?: (action: string, id?: string) => void;
}

export function DashboardOverview({ onNavigate, onAction, state }: DashboardOverviewProps = {}) {
  const tasks = state?.tasks ?? [];
  const equipment = state?.equipment ?? [];
  const alerts = state?.alerts ?? [];
  const logs = state?.logs ?? [];

  const totalTasks = tasks.length;
  const activeEquipment = equipment.filter((e) => e.status === 'online').length;
  const totalEquipment = equipment.length;
  const pendingMaintenance = equipment.filter((e) => e.status === 'maintenance').length;
  const systemHealth = totalEquipment > 0
    ? Math.round(equipment.reduce((sum, e) => sum + e.health, 0) / totalEquipment)
    : 100;

  const unacknowledgedAlerts = alerts.filter((a) => !a.acknowledged);

  const severityIcon: Record<string, string> = {
    critical: 'water_drop',
    warning: 'thermostat',
    info: 'info',
  };

  const severityTitleClass: Record<string, string> = {
    critical: 'text-error',
    warning: 'text-tertiary',
    info: 'text-primary',
  };

  const severityBgClass: Record<string, string> = {
    critical: 'bg-error/10 border-error/30',
    warning: 'bg-tertiary/10 border-tertiary/30',
    info: 'bg-primary/10 border-primary/30',
  };

  const severityIconBgClass: Record<string, string> = {
    critical: 'bg-error/20 text-error',
    warning: 'bg-tertiary/20 text-tertiary',
    info: 'bg-primary/20 text-primary',
  };

  const recentLogs = logs.slice(0, 3);

  const statusBadgeClass = (status: LogEntry['status']) => {
    switch (status) {
      case 'Success': return 'text-primary bg-primary/10';
      case 'Warning': return 'text-tertiary bg-tertiary/10';
      case 'Critical': return 'text-error bg-error/10';
      case 'Standby': return 'text-secondary-fixed bg-secondary-fixed/10';
      default: return 'text-on-surface-variant bg-surface-variant';
    }
  };

  const statusDotClass = (status: LogEntry['status']) => {
    switch (status) {
      case 'Success': return 'bg-primary';
      case 'Warning': return 'bg-tertiary';
      case 'Critical': return 'bg-error';
      case 'Standby': return 'bg-secondary-fixed';
      default: return 'bg-on-surface-variant';
    }
  };

  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface flex justify-between items-center w-full px-lg py-sm h-16 border-b border-outline-variant docked full-width top-0 z-50">
      <div className="flex items-center gap-md">
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Greenhouse Ops</h1>
      </div>
      <div className="flex items-center gap-md">
      {/* Search Bar (on_left configuration logic adapted for top nav layout) */}
      <div className="hidden md:flex items-center bg-surface-container-low border border-outline-variant rounded-full px-sm py-xs focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container transition-all">
      <span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-xs">search</span>
      <input
        className="bg-transparent border-none text-body-md font-body-md text-on-surface placeholder-on-surface-variant focus:ring-0 p-0 w-48"
        placeholder="Search operations..."
        type="text"
        value={state?.searchQuery ?? ''}
        onChange={(e) => {/* search wired via App */}}
      />
      </div>
      {/* Actions */}
      <button className="bg-error text-on-error px-md py-xs rounded hover:bg-error/90 active:scale-95 duration-100 font-label-md text-label-md flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">warning</span>
                      Emergency Stop
                  </button>
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-100 p-xs rounded-full flex items-center justify-center" aria-label="Notifications">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-100 p-xs rounded-full flex items-center justify-center" aria-label="Help">
      <span className="material-symbols-outlined">help</span>
      </button>
      <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant ml-sm">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A close-up portrait of a professional operator in a high-tech control room environment. The lighting is slightly dim, cool-toned, with subtle blue and green light reflections hinting at screen arrays off-camera. The mood is focused and serious, fitting an industrial minimal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs9SR2yjhPlXUNJYPNJKRixTWFb1-NFdbieWK3GWe9SwSMCM0Z6JwQ0sOmlD1jB6j3mmmNU_DKThEqsLPu7e49QdFY4b1G_i9ypN9M0dxdMQOZMe3rfjO2mE-nubBoncQTr_HZRcsyj0bwCZjZum1oewhoveBResDfGvfhGiwBKYiPHGLOdiz71bEXmVDfJyaXV4rx0svMSJ6XbDOv-e4yvqiEFrJVF03fhf4aB8b7tnstjL3zGezHEWAfAvQ4BlrB0srMGygfplM" />
      </div>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full py-lg bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant docked left-0 w-60 z-40">
      <div className="px-lg mb-lg flex items-center gap-sm">
      <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center border border-outline-variant text-primary">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Main Operations</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Facility A1</p>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-xs px-sm">
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-primary font-bold border-r-2 border-primary bg-primary-container/10 hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md w-full text-left">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                          Dashboard
                      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md w-full text-left" onClick={() => onNavigate?.('task-board')}>
      <span className="material-symbols-outlined text-[20px]">assignment</span>
                          Task Board
                      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md w-full text-left" onClick={() => onNavigate?.('equipment')}>
      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                          Equipment
                      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md w-full text-left" onClick={() => onNavigate?.('logs')}>
      <span className="material-symbols-outlined text-[20px]">database</span>
                          Logs
                      </button>
      </div>
      <div className="mt-auto flex flex-col gap-xs px-sm pt-md border-t border-outline-variant">
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md w-full text-left" onClick={() => onNavigate?.('settings')}>
      <span className="material-symbols-outlined text-[20px]">settings</span>
                          Settings
                      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 font-label-md text-label-md w-full text-left" onClick={() => onNavigate?.('profile')}>
      <span className="material-symbols-outlined text-[20px]">account_circle</span>
                          Account
                      </button>
      </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-gutter md:p-margin-desktop bg-surface-container-lowest flex flex-col gap-lg">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Summary Cards Row (Spans full width) */}
      <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-gutter">
      {/* Total Tasks */}
      <div className="bg-surface rounded-lg p-md border border-outline-variant flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant">Total Tasks</span>
      <span className="material-symbols-outlined text-primary text-[20px]">task_alt</span>
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface font-mono-data mt-auto">{totalTasks}</div>
      </div>
      {/* Active Equipment */}
      <div className="bg-surface rounded-lg p-md border border-outline-variant flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant">Active Equipment</span>
      <span className="material-symbols-outlined text-primary text-[20px]">power</span>
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface font-mono-data mt-auto">{activeEquipment}<span className="text-on-surface-variant text-body-lg">/{totalEquipment}</span></div>
      </div>
      {/* System Health */}
      <div className="bg-surface rounded-lg p-md border border-outline-variant flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant">System Health</span>
      <span className="material-symbols-outlined text-primary text-[20px]">monitor_heart</span>
      </div>
      <div className="flex items-end gap-sm mt-auto">
      <div className="font-headline-lg text-headline-lg text-primary font-mono-data">{systemHealth}%</div>
      <div className="h-2 flex-1 bg-surface-container-highest rounded-full mb-2 overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{ width: `${systemHealth}%` }}></div>
      </div>
      </div>
      </div>
      {/* Pending Maintenance */}
      <div className="bg-surface rounded-lg p-md border border-outline-variant flex flex-col gap-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant">Pending Maintenance</span>
      <span className="material-symbols-outlined text-tertiary text-[20px]">build</span>
      </div>
      <div className="font-headline-lg text-headline-lg text-tertiary font-mono-data mt-auto">{pendingMaintenance.toString().padStart(2, '0')}</div>
      </div>
      </div>
      {/* Main Telemetry & Alerts Area */}
      <div className="md:col-span-8 flex flex-col gap-gutter">
      {/* System Alerts */}
      <div className="bg-surface rounded-lg border border-outline-variant flex flex-col h-full">
      <div className="p-md border-b border-surface-container-high flex justify-between items-center bg-surface-container-low/50 rounded-t-lg">
      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-xs">
      <span className="material-symbols-outlined text-error text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                                      System Alerts
                                  </h3>
      {unacknowledgedAlerts.length > 0 && (
        <button className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors" onClick={() => onAction?.('acknowledge-all')}>
          Acknowledge All
        </button>
      )}
      </div>
      <div className="p-md flex flex-col gap-sm">
        {unacknowledgedAlerts.length === 0 ? (
          <div className="text-center py-lg text-on-surface-variant font-body-md">All alerts acknowledged</div>
        ) : (
          unacknowledgedAlerts.map((alert) => (
            <div key={alert.id} className={`rounded-lg p-md flex items-start gap-md ${severityBgClass[alert.severity]}`}>
              <div className={`p-sm rounded flex items-center justify-center shrink-0 ${severityIconBgClass[alert.severity]}`}>
                <span className="material-symbols-outlined text-[24px]">{severityIcon[alert.severity]}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className={`font-body-lg font-bold ${severityTitleClass[alert.severity]}`}>{alert.title}</h4>
                  <span className="font-mono-data text-label-sm text-on-surface-variant">{alert.timestamp}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">{alert.description}</p>
                {alert.severity === 'critical' && (
                  <div className="mt-sm flex gap-sm">
                    <button className="bg-error text-on-error px-sm py-xs rounded font-label-md text-label-md hover:bg-error/90 transition-colors" onClick={() => onAction?.('isolate-pump')}>
                      Isolate Pump
                    </button>
                    <button className="bg-transparent border border-error/50 text-error px-sm py-xs rounded font-label-md text-label-md hover:bg-error/10 transition-colors">
                      View Diagnostics
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      </div>
      {/* Recent Activity Table */}
      <div className="bg-surface rounded-lg border border-outline-variant flex flex-col">
      <div className="p-md border-b border-surface-container-high bg-surface-container-low/50 rounded-t-lg">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Activity</h3>
      </div>
      <div className="w-full overflow-x-auto">
      <table className="w-full text-left">
      <thead className="bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">
      <tr>
      <th className="px-md py-sm font-medium">Time</th>
      <th className="px-md py-sm font-medium">Event</th>
      <th className="px-md py-sm font-medium">Location</th>
      <th className="px-md py-sm font-medium">Status</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm text-on-surface">
        {recentLogs.map((log, i) => (
          <tr key={log.id} className={`border-b border-surface-container-high hover:bg-surface-container-low transition-colors ${i === recentLogs.length - 1 ? '' : ''}`}>
            <td className="px-md py-sm font-mono-data text-on-surface-variant">{log.timestamp.split(' ')[1] ?? log.timestamp}</td>
            <td className="px-md py-sm">{log.action}</td>
            <td className="px-md py-sm">{log.equipmentId}</td>
            <td className="px-md py-sm">
              <span className={`inline-flex items-center gap-xs px-sm py-xs rounded-full font-label-sm ${statusBadgeClass(log.status)}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${statusDotClass(log.status)}`}></span> {log.status}
              </span>
            </td>
          </tr>
        ))}
        {recentLogs.length === 0 && (
          <tr>
            <td className="px-md py-sm text-on-surface-variant" colSpan={4}>No recent activity</td>
          </tr>
        )}
      </tbody>
      </table>
      </div>
      </div>
      </div>
      {/* Side Widget Area */}
      <div className="md:col-span-4 flex flex-col gap-gutter">
      {/* Zone 04 Environment Widget */}
      <div className="bg-surface rounded-lg border border-outline-variant flex flex-col relative overflow-hidden">
      {/* Abstract Glassmorphism Background Element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="p-md border-b border-surface-container-high flex justify-between items-center z-10 relative">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Zone 04 Environment</h3>
      <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="More options">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </div>
      <div className="p-md flex flex-col gap-md z-10 relative">
      {/* Temp Gauge */}
      <div className="bg-surface-container-low rounded p-md flex items-center justify-between border border-surface-container-high">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary text-[24px]">device_thermostat</span>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Temperature</span>
      <span className="font-mono-data text-headline-md text-on-surface">24.5°C</span>
      </div>
      </div>
      <div className="text-right">
      <span className="font-label-sm text-label-sm text-primary flex items-center justify-end gap-xs">
      <span className="material-symbols-outlined text-[16px]">arrow_drop_up</span>
                                              0.2°
                                          </span>
      <span className="font-label-sm text-label-sm text-on-surface-variant block mt-xs">Target: 24.0°</span>
      </div>
      </div>
      {/* Humidity Gauge */}
      <div className="bg-surface-container-low rounded p-md flex items-center justify-between border border-surface-container-high">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary text-[24px]">humidity_percentage</span>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-md text-on-surface-variant">Humidity</span>
      <span className="font-mono-data text-headline-md text-on-surface">68%</span>
      </div>
      </div>
      <div className="text-right">
      <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-end gap-xs">
      <span className="material-symbols-outlined text-[16px]">horizontal_rule</span>
                                              Stable
                                          </span>
      <span className="font-label-sm text-label-sm text-on-surface-variant block mt-xs">Target: 65%</span>
      </div>
      </div>
      {/* Mini Chart Placeholder */}
      <div className="mt-sm h-24 bg-surface-container-lowest border border-surface-container-high rounded relative flex items-end px-2 pb-2 pt-4">
      <div className="absolute top-2 left-2 font-label-sm text-label-sm text-on-surface-variant">24h Trend</div>
      <div className="w-full flex justify-between items-end h-full gap-1">
      {/* Pseudo bars for chart */}
      <div className="w-full bg-primary/20 hover:bg-primary/40 rounded-t h-[40%] transition-colors"></div>
      <div className="w-full bg-primary/20 hover:bg-primary/40 rounded-t h-[45%] transition-colors"></div>
      <div className="w-full bg-primary/20 hover:bg-primary/40 rounded-t h-[50%] transition-colors"></div>
      <div className="w-full bg-primary/40 hover:bg-primary/60 rounded-t h-[65%] transition-colors"></div>
      <div className="w-full bg-primary/60 hover:bg-primary/80 rounded-t h-[60%] transition-colors"></div>
      <div className="w-full bg-primary/40 hover:bg-primary/60 rounded-t h-[55%] transition-colors"></div>
      <div className="w-full bg-primary/80 hover:bg-primary rounded-t h-[75%] transition-colors"></div>
      <div className="w-full bg-primary hover:bg-primary-fixed rounded-t h-[70%] transition-colors relative">
      <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-primary rounded-full transform -translate-x-1/2 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
