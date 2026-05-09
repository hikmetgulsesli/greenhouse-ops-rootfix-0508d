import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppState } from './useAppState';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('useAppState', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.restoreAllMocks();
  });

  it('initializes with default state', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.currentScreen).toBe('dashboard');
    expect(result.current.state.tasks.length).toBeGreaterThan(0);
    expect(result.current.state.equipment.length).toBeGreaterThan(0);
    expect(result.current.state.logs.length).toBeGreaterThan(0);
    expect(result.current.state.alerts.length).toBeGreaterThan(0);
    expect(result.current.state.storageError).toBe(false);
  });

  it('navigates between screens', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.navigate('task-board');
    });
    expect(result.current.state.currentScreen).toBe('task-board');
  });

  it('updates search query', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setSearch('pump');
    });
    expect(result.current.state.searchQuery).toBe('pump');
  });

  it('adds a task', () => {
    const { result } = renderHook(() => useAppState());
    const initialCount = result.current.state.tasks.length;
    act(() => {
      result.current.addTask({
        id: 'TS-999',
        title: 'Test Task',
        description: 'Test desc',
        priority: 'Normal',
        status: 'todo',
        assignee: 'Test User',
        assigneeInitials: 'TU',
        dueDate: 'Today',
        zone: 'Zone T',
      });
    });
    expect(result.current.state.tasks.length).toBe(initialCount + 1);
    expect(result.current.state.tasks[0].id).toBe('TS-999');
  });

  it('updates task status', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateTaskStatus('TS-104', 'done');
    });
    const task = result.current.state.tasks.find((t) => t.id === 'TS-104');
    expect(task?.status).toBe('done');
  });

  it('updates equipment health', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateEquipmentHealth('HVAC-01', 75);
    });
    const eq = result.current.state.equipment.find((e) => e.id === 'HVAC-01');
    expect(eq?.health).toBe(75);
  });

  it('updates equipment status', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateEquipmentStatus('HVAC-01', 'maintenance');
    });
    const eq = result.current.state.equipment.find((e) => e.id === 'HVAC-01');
    expect(eq?.status).toBe('maintenance');
  });

  it('acknowledges an alert', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.acknowledgeAlert('ALERT-001');
    });
    const alert = result.current.state.alerts.find((a) => a.id === 'ALERT-001');
    expect(alert?.acknowledged).toBe(true);
  });

  it('acknowledges all alerts', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.acknowledgeAllAlerts();
    });
    expect(result.current.state.alerts.every((a) => a.acknowledged)).toBe(true);
  });

  it('updates filters', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateFilters({ zone: 'Zone B' });
    });
    expect(result.current.state.filters.zone).toBe('Zone B');
  });

  it('clears filters', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateFilters({ zone: 'Zone B', status: 'critical' });
    });
    act(() => {
      result.current.clearFilters();
    });
    expect(result.current.state.filters.zone).toBe('all');
    expect(result.current.state.filters.status).toBe('all');
  });

  it('updates settings', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateSettings({ units: 'imperial' });
    });
    expect(result.current.state.settings.units).toBe('imperial');
  });

  it('persists state to localStorage', () => {
    renderHook(() => useAppState());
    const stored = localStorageMock.getItem('greenhouse-ops-v1');
    expect(stored).not.toBeNull();
    const parsed = JSON.parse(stored!);
    expect(parsed.tasks.length).toBeGreaterThan(0);
    expect(parsed.equipment.length).toBeGreaterThan(0);
  });

  it('resets storage', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.resetStorage();
    });
    expect(result.current.state.tasks.length).toBe(4); // default tasks
    expect(result.current.state.equipment.length).toBe(4); // default equipment
    expect(localStorageMock.getItem('greenhouse-ops-v1')).toBeNull();
  });

  it('retries storage', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.retryStorage();
    });
    expect(result.current.state.storageError).toBe(false);
  });
});
