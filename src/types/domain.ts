export type Screen =
  | 'dashboard'
  | 'task-board'
  | 'equipment'
  | 'logs'
  | 'settings'
  | 'profile'
  | 'filtered'
  | 'empty'
  | 'storage-error';

export interface Task {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'complete';
  priority: 'low' | 'medium' | 'high' | 'critical';
  zone: string;
  assignee: string;
  dueDate: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'maintenance' | 'error';
  zone: string;
  lastMaintenance: string;
  health: number;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  action: string;
  operator: string;
  status: 'success' | 'failed' | 'complete';
  zone: string;
}

export interface AlertItem {
  id: string;
  type: 'error' | 'warning' | 'info';
  title: string;
  message: string;
  time: string;
  acknowledged: boolean;
}

export interface AppState {
  currentScreen: Screen;
  profileOpen: boolean;
  storageError: boolean;
  searchQuery: string;
  tasks: Task[];
  equipment: EquipmentItem[];
  logs: LogEntry[];
  alerts: AlertItem[];
  filterStatus: string;
  filterZone: string;
  settings: {
    theme: 'dark' | 'light';
    notifications: boolean;
    compactMode: boolean;
  };
}

export const initialTasks: Task[] = [
  { id: 'T-001', title: 'Replace nutrient filter', status: 'pending', priority: 'high', zone: 'Zone A', assignee: 'J. Smith', dueDate: '2024-05-10' },
  { id: 'T-002', title: 'Calibrate humidity sensors', status: 'in-progress', priority: 'medium', zone: 'Zone B', assignee: 'A. Chen', dueDate: '2024-05-09' },
  { id: 'T-003', title: 'Inspect irrigation pump P-02', status: 'pending', priority: 'critical', zone: 'Zone C', assignee: 'M. Rivera', dueDate: '2024-05-08' },
  { id: 'T-004', title: 'Clean light array reflectors', status: 'complete', priority: 'low', zone: 'Zone A', assignee: 'J. Smith', dueDate: '2024-05-06' },
  { id: 'T-005', title: 'Update climate control firmware', status: 'in-progress', priority: 'high', zone: 'Zone D', assignee: 'System', dueDate: '2024-05-11' },
];

export const initialEquipment: EquipmentItem[] = [
  { id: 'E-001', name: 'HVAC Unit H-01', status: 'online', zone: 'Zone A', lastMaintenance: '2024-04-15', health: 98 },
  { id: 'E-002', name: 'Irrigation Pump P-02', status: 'error', zone: 'Zone C', lastMaintenance: '2024-03-20', health: 34 },
  { id: 'E-003', name: 'Light Array North', status: 'online', zone: 'Zone B', lastMaintenance: '2024-04-28', health: 91 },
  { id: 'E-004', name: 'Nutrient Mixer M-03', status: 'maintenance', zone: 'Zone A', lastMaintenance: '2024-05-01', health: 72 },
  { id: 'E-005', name: 'Sensor Array S-11', status: 'offline', zone: 'Zone D', lastMaintenance: '2024-02-10', health: 12 },
];

export const initialLogs: LogEntry[] = [
  { id: 'L-001', timestamp: '11:05:22', action: 'Manual override: Valve V-04', operator: 'J. Smith', status: 'success', zone: 'Zone A' },
  { id: 'L-002', timestamp: '10:42:01', action: 'Automated task: Nutrient Mix B', operator: 'System', status: 'failed', zone: 'Zone C' },
  { id: 'L-003', timestamp: '09:30:45', action: 'Diagnostic run: Lighting Array North', operator: 'A. Chen', status: 'complete', zone: 'Zone B' },
  { id: 'L-004', timestamp: '08:15:12', action: 'Scheduled maintenance: HVAC H-01', operator: 'M. Rivera', status: 'success', zone: 'Zone A' },
  { id: 'L-005', timestamp: '07:00:00', action: 'System backup completed', operator: 'System', status: 'success', zone: 'All' },
];

export const initialAlerts: AlertItem[] = [
  { id: 'A-001', type: 'error', title: 'Pump P-02 Failure', message: 'Pressure drop detected in Zone 4 irrigation line. Immediate inspection required.', time: '10:42 AM', acknowledged: false },
  { id: 'A-002', type: 'warning', title: 'Temperature Deviation', message: 'Sector B ambient temperature exceeds target by 2.4°C.', time: '09:15 AM', acknowledged: false },
  { id: 'A-003', type: 'info', title: 'Routine Calibration Pending', message: 'Sensors S-11 through S-15 due for monthly calibration.', time: '06:00 AM', acknowledged: false },
];

export function createInitialState(): AppState {
  return {
    currentScreen: 'dashboard',
    profileOpen: false,
    storageError: false,
    searchQuery: '',
    tasks: [...initialTasks],
    equipment: [...initialEquipment],
    logs: [...initialLogs],
    alerts: [...initialAlerts],
    filterStatus: 'all',
    filterZone: 'all',
    settings: {
      theme: 'dark',
      notifications: true,
      compactMode: false,
    },
  };
}
