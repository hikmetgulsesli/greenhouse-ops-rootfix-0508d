import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppState } from './useAppState';
import type { AppState } from '../types/domain';

describe('useAppState hook', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('initializes with default state when localStorage is empty', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.currentScreen).toBe('dashboard');
    expect(result.current.state.tasks.length).toBeGreaterThan(0);
    expect(result.current.state.equipment.length).toBeGreaterThan(0);
    expect(result.current.state.logs.length).toBeGreaterThan(0);
    expect(result.current.state.alerts.length).toBeGreaterThan(0);
    expect(result.current.state.settings.theme).toBe('dark');
    expect(result.current.state.storageError).toBe(false);
  });

  it('navigates between screens', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.navigate('task-board');
    });
    expect(result.current.state.currentScreen).toBe('task-board');
    act(() => {
      result.current.navigate('equipment');
    });
    expect(result.current.state.currentScreen).toBe('equipment');
  });

  it('toggles and closes profile panel', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.profileOpen).toBe(false);
    act(() => {
      result.current.toggleProfile();
    });
    expect(result.current.state.profileOpen).toBe(true);
    act(() => {
      result.current.closeProfile();
    });
    expect(result.current.state.profileOpen).toBe(false);
  });

  it('sets search query', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setSearchQuery('pump');
    });
    expect(result.current.state.searchQuery).toBe('pump');
  });

  it('acknowledges an alert', () => {
    const { result } = renderHook(() => useAppState());
    const alertId = result.current.state.alerts[0].id;
    expect(result.current.state.alerts[0].acknowledged).toBe(false);
    act(() => {
      result.current.acknowledgeAlert(alertId);
    });
    expect(result.current.state.alerts.find((a) => a.id === alertId)?.acknowledged).toBe(true);
  });

  it('acknowledges all alerts', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.acknowledgeAllAlerts();
    });
    expect(result.current.state.alerts.every((a) => a.acknowledged)).toBe(true);
  });

  it('dismisses an alert', () => {
    const { result } = renderHook(() => useAppState());
    const initialCount = result.current.state.alerts.length;
    const alertId = result.current.state.alerts[0].id;
    act(() => {
      result.current.dismissAlert(alertId);
    });
    expect(result.current.state.alerts.length).toBe(initialCount - 1);
    expect(result.current.state.alerts.find((a) => a.id === alertId)).toBeUndefined();
  });

  it('updates settings', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateSettings({ theme: 'light', compactMode: true });
    });
    expect(result.current.state.settings.theme).toBe('light');
    expect(result.current.state.settings.compactMode).toBe(true);
    expect(result.current.state.settings.notifications).toBe(true);
  });

  it('adds a task', () => {
    const { result } = renderHook(() => useAppState());
    const initialCount = result.current.state.tasks.length;
    act(() => {
      result.current.addTask({
        title: 'Test Task',
        status: 'pending',
        priority: 'medium',
        zone: 'Zone B',
        assignee: 'Test Operator',
        dueDate: '2024-06-01',
      });
    });
    expect(result.current.state.tasks.length).toBe(initialCount + 1);
    const added = result.current.state.tasks[result.current.state.tasks.length - 1];
    expect(added.title).toBe('Test Task');
    expect(added.id).toMatch(/^T-/);
  });

  it('updates task status', () => {
    const { result } = renderHook(() => useAppState());
    const taskId = result.current.state.tasks[0].id;
    act(() => {
      result.current.updateTaskStatus(taskId, 'complete');
    });
    expect(result.current.state.tasks.find((t) => t.id === taskId)?.status).toBe('complete');
  });

  it('sets filter status and zone', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setFilterStatus('pending');
      result.current.setFilterZone('Zone A');
    });
    expect(result.current.state.filterStatus).toBe('pending');
    expect(result.current.state.filterZone).toBe('Zone A');
  });

  it('resets storage to initial state', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.navigate('task-board');
      result.current.setSearchQuery('test');
    });
    expect(result.current.state.currentScreen).toBe('task-board');
    act(() => {
      result.current.resetStorageState();
    });
    expect(result.current.state.currentScreen).toBe('dashboard');
    expect(result.current.state.searchQuery).toBe('');
    expect(result.current.state.storageError).toBe(false);
  });

  it('persists state to localStorage after actions', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.navigate('equipment');
    });
    const raw = localStorage.getItem('greenhouse-ops-state');
    expect(raw).toBeTruthy();
    const parsed: AppState = JSON.parse(raw!);
    expect(parsed.currentScreen).toBe('equipment');
  });

  it('loads persisted state on mount when available', () => {
    const persisted: AppState = {
      currentScreen: 'logs',
      profileOpen: true,
      storageError: false,
      searchQuery: 'filter test',
      tasks: [],
      equipment: [],
      logs: [],
      alerts: [],
      filterStatus: 'all',
      filterZone: 'all',
      settings: { theme: 'light', notifications: false, compactMode: true, units: 'metric', timezone: 'utc', systemAlerts: true, taskUpdates: false },
    };
    localStorage.setItem('greenhouse-ops-state', JSON.stringify(persisted));

    const { result } = renderHook(() => useAppState());
    expect(result.current.state.currentScreen).toBe('logs');
    expect(result.current.state.searchQuery).toBe('filter test');
    expect(result.current.state.settings.theme).toBe('light');
  });

  it('sets storage error flag via setStorageError', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.storageError).toBe(false);
    act(() => {
      result.current.setStorageError(true);
    });
    expect(result.current.state.storageError).toBe(true);
  });

  it('retryConnection resets storageError on success', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setStorageError(true);
    });
    expect(result.current.state.storageError).toBe(true);
    act(() => {
      result.current.retryConnection();
    });
    expect(result.current.state.storageError).toBe(false);
  });
});
