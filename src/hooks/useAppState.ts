import { useCallback, useEffect, useReducer } from 'react';
import type {
  AppState,
  ScreenName,
  Task,
  Equipment,
  LogEntry,
  AlertItem,
  Filters,
  AppSettings,
} from '../types/domain';
import { createDefaultState } from '../types/domain';
import { loadFromStorage, saveToStorage, clearStorage, isStorageAvailable } from '../utils/storage';

type Action =
  | { type: 'NAVIGATE'; screen: ScreenName }
  | { type: 'SET_SEARCH'; query: string }
  | { type: 'ADD_TASK'; task: Task }
  | { type: 'UPDATE_TASK_STATUS'; id: string; status: Task['status'] }
  | { type: 'UPDATE_EQUIPMENT_HEALTH'; id: string; health: number }
  | { type: 'UPDATE_EQUIPMENT_STATUS'; id: string; status: Equipment['status'] }
  | { type: 'ADD_LOG'; log: LogEntry }
  | { type: 'ACKNOWLEDGE_ALERT'; id: string }
  | { type: 'ACKNOWLEDGE_ALL_ALERTS' }
  | { type: 'UPDATE_FILTERS'; filters: Partial<Filters> }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<AppSettings> }
  | { type: 'SET_STORAGE_ERROR'; error: boolean }
  | { type: 'RESET_STORAGE' }
  | { type: 'RETRY_STORAGE' }
  | { type: 'HYDRATE'; state: AppState };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, currentScreen: action.screen };
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.query };
    case 'ADD_TASK':
      return { ...state, tasks: [action.task, ...state.tasks] };
    case 'UPDATE_TASK_STATUS':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.id ? { ...t, status: action.status } : t
        ),
      };
    case 'UPDATE_EQUIPMENT_HEALTH':
      return {
        ...state,
        equipment: state.equipment.map((e) =>
          e.id === action.id ? { ...e, health: action.health } : e
        ),
      };
    case 'UPDATE_EQUIPMENT_STATUS':
      return {
        ...state,
        equipment: state.equipment.map((e) =>
          e.id === action.id ? { ...e, status: action.status } : e
        ),
      };
    case 'ADD_LOG':
      return { ...state, logs: [action.log, ...state.logs] };
    case 'ACKNOWLEDGE_ALERT':
      return {
        ...state,
        alerts: state.alerts.map((a) =>
          a.id === action.id ? { ...a, acknowledged: true } : a
        ),
      };
    case 'ACKNOWLEDGE_ALL_ALERTS':
      return {
        ...state,
        alerts: state.alerts.map((a) => ({ ...a, acknowledged: true })),
      };
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.filters },
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {
          dateFrom: '',
          dateTo: '',
          equipmentType: 'all',
          status: 'all',
          zone: 'all',
        },
      };
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: { ...state.settings, ...action.settings },
      };
    case 'SET_STORAGE_ERROR':
      return { ...state, storageError: action.error };
    case 'RESET_STORAGE':
      return { ...createDefaultState(), storageError: false };
    case 'RETRY_STORAGE':
      return { ...state, storageError: false };
    case 'HYDRATE':
      return { ...action.state, storageError: false };
    default:
      return state;
  }
}

export function useAppState() {
  const [state, dispatch] = useReducer(reducer, createDefaultState());

  // Attempt to hydrate from localStorage on mount
  useEffect(() => {
    if (!isStorageAvailable()) {
      dispatch({ type: 'SET_STORAGE_ERROR', error: true });
      return;
    }
    const result = loadFromStorage<AppState>(createDefaultState());
    if (result.error) {
      dispatch({ type: 'SET_STORAGE_ERROR', error: true });
    } else if (result.data) {
      dispatch({ type: 'HYDRATE', state: result.data });
    }
  }, []);

  // Persist to localStorage on state changes (exclude transient UI state)
  useEffect(() => {
    if (state.storageError) return;
    const persistState = {
      ...state,
      currentScreen: 'dashboard' as ScreenName,
      searchQuery: '',
    };
    const result = saveToStorage(persistState);
    if (result.error) {
      dispatch({ type: 'SET_STORAGE_ERROR', error: true });
    }
  }, [state.tasks, state.equipment, state.logs, state.alerts, state.profile, state.settings, state.filters, state.totalLogCount]);

  const navigate = useCallback((screen: ScreenName) => {
    dispatch({ type: 'NAVIGATE', screen });
  }, []);

  const setSearch = useCallback((query: string) => {
    dispatch({ type: 'SET_SEARCH', query });
  }, []);

  const addTask = useCallback((task: Task) => {
    dispatch({ type: 'ADD_TASK', task });
  }, []);

  const updateTaskStatus = useCallback((id: string, status: Task['status']) => {
    dispatch({ type: 'UPDATE_TASK_STATUS', id, status });
  }, []);

  const updateEquipmentHealth = useCallback((id: string, health: number) => {
    dispatch({ type: 'UPDATE_EQUIPMENT_HEALTH', id, health });
  }, []);

  const updateEquipmentStatus = useCallback((id: string, status: Equipment['status']) => {
    dispatch({ type: 'UPDATE_EQUIPMENT_STATUS', id, status });
  }, []);

  const addLog = useCallback((log: LogEntry) => {
    dispatch({ type: 'ADD_LOG', log });
  }, []);

  const acknowledgeAlert = useCallback((id: string) => {
    dispatch({ type: 'ACKNOWLEDGE_ALERT', id });
  }, []);

  const acknowledgeAllAlerts = useCallback(() => {
    dispatch({ type: 'ACKNOWLEDGE_ALL_ALERTS' });
  }, []);

  const updateFilters = useCallback((filters: Partial<Filters>) => {
    dispatch({ type: 'UPDATE_FILTERS', filters });
  }, []);

  const clearFilters = useCallback(() => {
    dispatch({ type: 'CLEAR_FILTERS' });
  }, []);

  const updateSettings = useCallback((settings: Partial<AppSettings>) => {
    dispatch({ type: 'UPDATE_SETTINGS', settings });
  }, []);

  const resetStorage = useCallback(() => {
    clearStorage();
    dispatch({ type: 'RESET_STORAGE' });
  }, []);

  const retryStorage = useCallback(() => {
    if (!isStorageAvailable()) {
      dispatch({ type: 'SET_STORAGE_ERROR', error: true });
      return;
    }
    const result = loadFromStorage<AppState>(createDefaultState());
    if (result.error) {
      dispatch({ type: 'SET_STORAGE_ERROR', error: true });
    } else if (result.data) {
      dispatch({ type: 'HYDRATE', state: result.data });
    } else {
      dispatch({ type: 'RETRY_STORAGE' });
    }
  }, []);

  return {
    state,
    dispatch,
    navigate,
    setSearch,
    addTask,
    updateTaskStatus,
    updateEquipmentHealth,
    updateEquipmentStatus,
    addLog,
    acknowledgeAlert,
    acknowledgeAllAlerts,
    updateFilters,
    clearFilters,
    updateSettings,
    resetStorage,
    retryStorage,
  };
}
