import { createContext, useContext } from 'react';
import type { AppState, Screen, Task, EquipmentItem, LogEntry, AlertItem } from '../types/domain';

export interface AppContextValue {
  state: AppState;
  navigate: (screen: Screen) => void;
  setSearchQuery: (query: string) => void;
  toggleProfile: () => void;
  closeProfile: () => void;
  acknowledgeAlert: (id: string) => void;
  acknowledgeAllAlerts: () => void;
  dismissAlert: (id: string) => void;
  updateSettings: (settings: Partial<AppState['settings']>) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTaskStatus: (id: string, status: Task['status']) => void;
  setFilterStatus: (status: string) => void;
  setFilterZone: (zone: string) => void;
  resetStorage: () => void;
  retryConnection: () => void;
  setStorageError: (value: boolean) => void;
}

export const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return ctx;
}
