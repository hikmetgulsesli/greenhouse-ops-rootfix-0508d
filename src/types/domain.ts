export type ScreenName =
  | 'dashboard'
  | 'task-board'
  | 'equipment'
  | 'logs'
  | 'settings'
  | 'profile'
  | 'empty'
  | 'storage-error'
  | 'filtered';

export type TaskPriority = 'Critical' | 'High' | 'Normal' | 'Low';
export type TaskStatus = 'todo' | 'in-progress' | 'delayed' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignee: string;
  assigneeInitials: string;
  dueDate: string;
  zone: string;
  activeDuration?: string;
}

export type EquipmentStatus = 'online' | 'offline' | 'maintenance';

export interface Equipment {
  id: string;
  name: string;
  type: string;
  status: EquipmentStatus;
  health: number;
  metrics: Record<string, string>;
  maintenanceNote?: string;
  errorCode?: string;
  schedule?: string;
}

export type LogStatus = 'Success' | 'Warning' | 'Critical' | 'Standby';

export interface LogEntry {
  id: string;
  timestamp: string;
  equipmentId: string;
  action: string;
  performedBy: string;
  status: LogStatus;
}

export type AlertSeverity = 'critical' | 'warning' | 'info';

export interface AlertItem {
  id: string;
  severity: AlertSeverity;
  title: string;
  description: string;
  timestamp: string;
  zone: string;
  acknowledged: boolean;
}

export interface UserProfile {
  name: string;
  role: string;
  id: string;
  initials: string;
  avatar?: string;
}

export interface AppSettings {
  units: 'metric' | 'imperial' | 'scientific';
  timezone: string;
  darkMode: boolean;
  notifications: {
    systemAlerts: boolean;
    taskUpdates: boolean;
  };
}

export interface Filters {
  dateFrom: string;
  dateTo: string;
  equipmentType: string;
  status: string;
  zone: string;
}

export interface AppState {
  currentScreen: ScreenName;
  tasks: Task[];
  equipment: Equipment[];
  logs: LogEntry[];
  alerts: AlertItem[];
  profile: UserProfile;
  settings: AppSettings;
  searchQuery: string;
  filters: Filters;
  storageError: boolean;
  totalLogCount: number;
}

export const INITIAL_TASKS: Task[] = [
  {
    id: 'TS-104',
    title: 'Replace LED Panel',
    description: 'Panel array B4 showing 15% efficiency drop. Requires immediate replacement to maintain DLI targets.',
    priority: 'High',
    status: 'todo',
    assignee: 'Operator',
    assigneeInitials: 'OP',
    dueDate: 'Due Today',
    zone: 'Zone B',
  },
  {
    id: 'TS-105',
    title: 'Calibrate CO2 Sensors',
    description: 'Zone C CO2 sensors require quarterly calibration per maintenance schedule.',
    priority: 'Normal',
    status: 'todo',
    assignee: 'J. Kovic',
    assigneeInitials: 'JD',
    dueDate: 'Tomorrow',
    zone: 'Zone C',
  },
  {
    id: 'TS-098',
    title: 'Repair Irrigation Pump 2',
    description: 'Main line pressure dropped below threshold. Pump assembly requires tear-down and seal replacement.',
    priority: 'Critical',
    status: 'in-progress',
    assignee: 'Engineer',
    assigneeInitials: 'EN',
    dueDate: 'Overdue',
    zone: 'Zone 04',
    activeDuration: 'Active 2h 15m',
  },
  {
    id: 'TS-085',
    title: 'Update Firmware - Node Cluster A',
    description: 'Vendor patch pending for Node Cluster A sensor firmware update.',
    priority: 'Normal',
    status: 'delayed',
    assignee: 'S. Yates',
    assigneeInitials: 'SY',
    dueDate: 'Postponed',
    zone: 'Zone A',
  },
];

export const INITIAL_EQUIPMENT: Equipment[] = [
  {
    id: 'HVAC-01',
    name: 'HVAC Unit 01',
    type: 'Climate Control',
    status: 'online',
    health: 98,
    metrics: {
      'Output Temp': '22.4 °C',
      'Fan Speed': '1850 RPM',
      'Power Draw': '4.2 kW',
    },
  },
  {
    id: 'PMP-B',
    name: 'Irrigation Pump B',
    type: 'Hydration System',
    status: 'maintenance',
    health: 45,
    metrics: {
      'Flow Rate': '0 L/m',
      'Line Pressure': '12 PSI',
    },
    maintenanceNote: 'Scheduled impeller replacement. ETA completion: 14:00.',
  },
  {
    id: 'CO2-INJ',
    name: 'CO2 Injector',
    type: 'Atmosphere',
    status: 'offline',
    health: 12,
    metrics: {
      'Tank Level': 'Empty',
      'Valve Status': 'Closed',
    },
    errorCode: 'E-404-TNK',
  },
  {
    id: 'LGT-03',
    name: 'Lighting Array 03',
    type: 'Supplemental',
    status: 'online',
    health: 100,
    metrics: {
      Intensity: '85%',
      Spectrum: 'Full Bloom',
    },
    schedule: '06:00 - 22:00',
  },
];

export const INITIAL_LOGS: LogEntry[] = [
  {
    id: 'LOG-001',
    timestamp: '2023-10-27 08:15:22',
    equipmentId: 'PMP-A1-04',
    action: 'Routine filter replacement and flow rate recalibration.',
    performedBy: 'System Automaton',
    status: 'Success',
  },
  {
    id: 'LOG-002',
    timestamp: '2023-10-27 07:42:10',
    equipmentId: 'HVAC-B2-01',
    action: 'Thermal sensor drift detected; compensation offset applied.',
    performedBy: 'J. Kovic (Ops)',
    status: 'Warning',
  },
  {
    id: 'LOG-003',
    timestamp: '2023-10-27 06:00:05',
    equipmentId: 'NODE-Z9-11',
    action: 'Firmware OTA update v2.4.1 deployed successfully.',
    performedBy: 'Network Admin',
    status: 'Success',
  },
  {
    id: 'LOG-004',
    timestamp: '2023-10-26 23:14:55',
    equipmentId: 'VLV-MAIN-00',
    action: 'Main irrigation valve failed to actuate closed. Emergency isolation triggered.',
    performedBy: 'Watchdog Protocol',
    status: 'Critical',
  },
  {
    id: 'LOG-005',
    timestamp: '2023-10-26 18:30:00',
    equipmentId: 'LGT-ARRAY-C',
    action: 'Scheduled deep-cleaning of LED array optics completed.',
    performedBy: 'Maintenance Team Alpha',
    status: 'Success',
  },
  {
    id: 'LOG-006',
    timestamp: '2023-10-26 14:22:11',
    equipmentId: 'GEN-BKUP-01',
    action: 'Weekly diagnostic run initiated. Awaiting load transfer sequence.',
    performedBy: 'System Automaton',
    status: 'Standby',
  },
];

export const INITIAL_ALERTS: AlertItem[] = [
  {
    id: 'ALERT-001',
    severity: 'critical',
    title: 'Pump P-02 Failure',
    description: 'Pressure drop detected in Zone 04 main irrigation line. Flow rate at 0 L/m. Immediate inspection required.',
    timestamp: '09:42:15',
    zone: 'Zone 04',
    acknowledged: false,
  },
  {
    id: 'ALERT-002',
    severity: 'warning',
    title: 'Temp Drift Detected',
    description: 'Zone 02 temperature is +1.5°C above optimal threshold. Vent systems compensating.',
    timestamp: '10:15:00',
    zone: 'Zone 02',
    acknowledged: false,
  },
];

export const DEFAULT_PROFILE: UserProfile = {
  name: 'Alex Rivera',
  role: 'Senior Technician',
  id: 'AR-9421-B',
  initials: 'AR',
  avatar: undefined,
};

export const DEFAULT_SETTINGS: AppSettings = {
  units: 'metric',
  timezone: 'UTC',
  darkMode: true,
  notifications: {
    systemAlerts: true,
    taskUpdates: true,
  },
};

export const DEFAULT_FILTERS: Filters = {
  dateFrom: '',
  dateTo: '',
  equipmentType: 'all',
  status: 'all',
  zone: 'all',
};

export function createDefaultState(): AppState {
  return {
    currentScreen: 'dashboard',
    tasks: [...INITIAL_TASKS],
    equipment: [...INITIAL_EQUIPMENT],
    logs: [...INITIAL_LOGS],
    alerts: [...INITIAL_ALERTS],
    profile: { ...DEFAULT_PROFILE },
    settings: { ...DEFAULT_SETTINGS },
    searchQuery: '',
    filters: { ...DEFAULT_FILTERS },
    storageError: false,
    totalLogCount: 1204,
  };
}
