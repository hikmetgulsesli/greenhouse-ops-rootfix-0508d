import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TaskBoard } from './TaskBoard';
import type { AppState } from '../types/domain';

const mockState: AppState = {
  currentScreen: 'task-board',
  profileOpen: false,
  storageError: false,
  searchQuery: '',
  tasks: [
    { id: 'T-001', title: 'Replace nutrient filter', status: 'pending', priority: 'high', zone: 'Zone A', assignee: 'J. Smith', dueDate: '2024-05-10' },
    { id: 'T-002', title: 'Calibrate humidity sensors', status: 'in-progress', priority: 'medium', zone: 'Zone B', assignee: 'A. Chen', dueDate: '2024-05-09' },
    { id: 'T-003', title: 'Inspect irrigation pump P-02', status: 'pending', priority: 'critical', zone: 'Zone C', assignee: 'M. Rivera', dueDate: '2024-05-08' },
    { id: 'T-004', title: 'Clean light array reflectors', status: 'complete', priority: 'low', zone: 'Zone A', assignee: 'J. Smith', dueDate: '2024-05-06' },
    { id: 'T-005', title: 'Update climate control firmware', status: 'in-progress', priority: 'high', zone: 'Zone D', assignee: 'System', dueDate: '2024-05-11' },
  ],
  equipment: [],
  logs: [],
  alerts: [],
  filterStatus: 'all',
  filterZone: 'all',
  settings: { theme: 'dark', notifications: true, compactMode: false, units: 'metric', timezone: 'utc', systemAlerts: true, taskUpdates: false },
};

describe('TaskBoard debug', () => {
  it('debug', () => {
    render(<TaskBoard state={mockState} />);
    screen.debug(undefined, 100000);
    expect(true).toBe(true);
  });
});
