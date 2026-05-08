import { useState, useCallback, useEffect } from 'react';
import type { AppState, Screen, Task, EquipmentItem, LogEntry, AlertItem } from '../types/domain';
import { createInitialState } from '../types/domain';
import { loadState, saveState, resetStorage, retryLoad } from '../utils/storage';

export interface UseAppStateReturn {
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
  resetStorageState: () => void;
  retryConnection: () => void;
  setStorageError: (value: boolean) => void;
}

let idCounter = 100;

function getNextId(existingTasks: Task[]): string {
  const maxId = existingTasks.reduce((max, t) => {
    const num = parseInt(t.id.replace(/\D/g, ''), 10);
    return Math.max(max, num);
  }, 100);
  idCounter = Math.max(idCounter, maxId + 1);
  return `T-${String(idCounter++).padStart(3, '0')}`;
}

export function useAppState(): UseAppStateReturn {
  const [state, setState] = useState<AppState>(() => {
    try {
      const persisted = retryLoad(() => loadState());
      if (persisted) return persisted;
    } catch {
      // Will set storageError after mount
    }
    return createInitialState();
  });

  const [storageErrorFlag, setStorageErrorFlag] = useState(false);

  useEffect(() => {
    try {
      retryLoad(() => loadState());
    } catch {
      setStorageErrorFlag(true);
    }
  }, []);

  const persist = useCallback((next: AppState) => {
    try {
      saveState(next);
    } catch {
      setStorageErrorFlag(true);
    }
  }, []);

  const navigate = useCallback((screen: Screen) => {
    setState((prev) => {
      const next = { ...prev, currentScreen: screen, profileOpen: false };
      persist(next);
      return next;
    });
  }, [persist]);

  const setSearchQuery = useCallback((query: string) => {
    setState((prev) => {
      const next = { ...prev, searchQuery: query };
      persist(next);
      return next;
    });
  }, [persist]);

  const toggleProfile = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, profileOpen: !prev.profileOpen };
      persist(next);
      return next;
    });
  }, [persist]);

  const closeProfile = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, profileOpen: false };
      persist(next);
      return next;
    });
  }, [persist]);

  const acknowledgeAlert = useCallback((id: string) => {
    setState((prev) => {
      const next = {
        ...prev,
        alerts: prev.alerts.map((a) => (a.id === id ? { ...a, acknowledged: true } : a)),
      };
      persist(next);
      return next;
    });
  }, [persist]);

  const acknowledgeAllAlerts = useCallback(() => {
    setState((prev) => {
      const next = {
        ...prev,
        alerts: prev.alerts.map((a) => ({ ...a, acknowledged: true })),
      };
      persist(next);
      return next;
    });
  }, [persist]);

  const dismissAlert = useCallback((id: string) => {
    setState((prev) => {
      const next = {
        ...prev,
        alerts: prev.alerts.filter((a) => a.id !== id),
      };
      persist(next);
      return next;
    });
  }, [persist]);

  const updateSettings = useCallback((settings: Partial<AppState['settings']>) => {
    setState((prev) => {
      const next = {
        ...prev,
        settings: { ...prev.settings, ...settings },
      };
      persist(next);
      return next;
    });
  }, [persist]);

  const addTask = useCallback((task: Omit<Task, 'id'>) => {
    setState((prev) => {
      const newTask: Task = { ...task, id: getNextId(prev.tasks) };
      const next = { ...prev, tasks: [...prev.tasks, newTask] };
      persist(next);
      return next;
    });
  }, [persist]);

  const updateTaskStatus = useCallback((id: string, status: Task['status']) => {
    setState((prev) => {
      const next = {
        ...prev,
        tasks: prev.tasks.map((t) => (t.id === id ? { ...t, status } : t)),
      };
      persist(next);
      return next;
    });
  }, [persist]);

  const setFilterStatus = useCallback((status: string) => {
    setState((prev) => {
      const next = { ...prev, filterStatus: status };
      persist(next);
      return next;
    });
  }, [persist]);

  const setFilterZone = useCallback((zone: string) => {
    setState((prev) => {
      const next = { ...prev, filterZone: zone };
      persist(next);
      return next;
    });
  }, [persist]);

  const resetStorageState = useCallback(() => {
    resetStorage();
    const next = createInitialState();
    setState(next);
    setStorageErrorFlag(false);
  }, []);

  const retryConnection = useCallback(() => {
    try {
      const persisted = retryLoad(() => loadState());
      if (persisted) {
        setState(persisted);
      } else {
        setState(createInitialState());
      }
      setStorageErrorFlag(false);
    } catch {
      setStorageErrorFlag(true);
    }
  }, []);

  const setStorageError = useCallback((value: boolean) => {
    setStorageErrorFlag(value);
  }, []);

  // Merge storage error into state view for screens that read it
  const mergedState: AppState = { ...state, storageError: storageErrorFlag };

  return {
    state: mergedState,
    navigate,
    setSearchQuery,
    toggleProfile,
    closeProfile,
    acknowledgeAlert,
    acknowledgeAllAlerts,
    dismissAlert,
    updateSettings,
    addTask,
    updateTaskStatus,
    setFilterStatus,
    setFilterZone,
    resetStorageState,
    retryConnection,
    setStorageError,
  };
}
