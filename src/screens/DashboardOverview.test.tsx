import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DashboardOverview } from './DashboardOverview';
import type { AppState } from '../types/domain';

const mockState: AppState = {
  currentScreen: 'dashboard',
  profileOpen: false,
  storageError: false,
  searchQuery: '',
  tasks: [
    { id: 'T-001', title: 'Replace nutrient filter', status: 'pending', priority: 'high', zone: 'Zone A', assignee: 'J. Smith', dueDate: '2024-05-10' },
    { id: 'T-002', title: 'Calibrate humidity sensors', status: 'in-progress', priority: 'medium', zone: 'Zone B', assignee: 'A. Chen', dueDate: '2024-05-09' },
    { id: 'T-003', title: 'Inspect irrigation pump P-02', status: 'pending', priority: 'critical', zone: 'Zone C', assignee: 'M. Rivera', dueDate: '2024-05-08' },
    { id: 'T-004', title: 'Clean light array reflectors', status: 'complete', priority: 'low', zone: 'Zone A', assignee: 'J. Smith', dueDate: '2024-05-06' },
  ],
  equipment: [
    { id: 'E-001', name: 'HVAC Unit H-01', status: 'online', zone: 'Zone A', lastMaintenance: '2024-04-15', health: 98 },
    { id: 'E-002', name: 'Irrigation Pump P-02', status: 'error', zone: 'Zone C', lastMaintenance: '2024-03-20', health: 34 },
    { id: 'E-003', name: 'Light Array North', status: 'online', zone: 'Zone B', lastMaintenance: '2024-04-28', health: 91 },
    { id: 'E-004', name: 'Nutrient Mixer M-03', status: 'maintenance', zone: 'Zone A', lastMaintenance: '2024-05-01', health: 72 },
    { id: 'E-005', name: 'Sensor Array S-11', status: 'offline', zone: 'Zone D', lastMaintenance: '2024-02-10', health: 12 },
  ],
  logs: [
    { id: 'L-001', timestamp: '2024-05-08T11:05:22', action: 'Manual override: Valve V-04', operator: 'J. Smith', status: 'success', zone: 'Zone A' },
  ],
  alerts: [
    { id: 'A-001', type: 'error', title: 'Pump P-02 Failure', message: 'Pressure drop detected', time: '10:42 AM', acknowledged: false },
    { id: 'A-002', type: 'warning', title: 'Temperature Deviation', message: 'Sector B exceeds target', time: '09:15 AM', acknowledged: false },
  ],
  filterStatus: 'all',
  filterZone: 'all',
  settings: { theme: 'dark', notifications: true, compactMode: false, units: 'metric', timezone: 'utc', systemAlerts: true, taskUpdates: false },
};

describe('DashboardOverview screen', () => {
  it('renders system overview title', () => {
    render(<DashboardOverview state={mockState} />);
    expect(screen.getByText(/System Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-time monitoring for Zone 04/i)).toBeInTheDocument();
  });

  it('renders computed total tasks metric', () => {
    render(<DashboardOverview state={mockState} />);
    expect(screen.getByText('Total Tasks')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('renders computed active equipment metric', () => {
    render(<DashboardOverview state={mockState} />);
    expect(screen.getByText('Active Equipment')).toBeInTheDocument();
    const activeCard = screen.getByText('Active Equipment').closest('div')?.parentElement;
    expect(activeCard?.textContent).toContain('2/5');
  });

  it('renders computed offline count', () => {
    render(<DashboardOverview state={mockState} />);
    expect(screen.getByText('3 Offline')).toBeInTheDocument();
  });

  it('renders computed system health from equipment average', () => {
    render(<DashboardOverview state={mockState} />);
    expect(screen.getByText('System Health')).toBeInTheDocument();
    const healthCard = screen.getByText('System Health').closest('div')?.parentElement;
    expect(healthCard?.textContent).toContain('61%');
  });

  it('renders computed pending maintenance count', () => {
    render(<DashboardOverview state={mockState} />);
    expect(screen.getByText('Pending Maint.')).toBeInTheDocument();
    const maintCard = screen.getByText('Pending Maint.').closest('div')?.parentElement;
    expect(maintCard?.textContent).toContain('03');
  });

  it('renders computed critical task count', () => {
    render(<DashboardOverview state={mockState} />);
    expect(screen.getByText('1 Critical')).toBeInTheDocument();
  });

  it('renders alerts from state', () => {
    render(<DashboardOverview state={mockState} />);
    expect(screen.getByText('Pump P-02 Failure')).toBeInTheDocument();
    expect(screen.getByText('Temperature Deviation')).toBeInTheDocument();
  });

  it('calls onAction for acknowledge-alert', () => {
    const onAction = vi.fn();
    render(<DashboardOverview state={mockState} onAction={onAction} />);
    const ackButtons = screen.getAllByText('Acknowledge');
    fireEvent.click(ackButtons[0]);
    expect(onAction).toHaveBeenCalledWith('acknowledge-alert', 'A-001');
  });

  it('calls onAction for acknowledge-all', () => {
    const onAction = vi.fn();
    render(<DashboardOverview state={mockState} onAction={onAction} />);
    fireEvent.click(screen.getByText('Acknowledge All'));
    expect(onAction).toHaveBeenCalledWith('acknowledge-all');
  });

  it('calls onAction for dismiss-alert', () => {
    const onAction = vi.fn();
    render(<DashboardOverview state={mockState} onAction={onAction} />);
    const dismissButtons = screen.getAllByText('Dismiss');
    fireEvent.click(dismissButtons[0]);
    expect(onAction).toHaveBeenCalledWith('dismiss-alert', 'A-001');
  });

  it('renders recent activity logs from state', () => {
    render(<DashboardOverview state={mockState} />);
    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
    expect(screen.getByText('Manual override: Valve V-04')).toBeInTheDocument();
  });

  it('calls onNavigate for sidebar navigation', () => {
    const onNavigate = vi.fn();
    render(<DashboardOverview state={mockState} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('Task Board'));
    expect(onNavigate).toHaveBeenCalledWith('task-board');
  });

  it('calls onAction for new-task', () => {
    const onAction = vi.fn();
    render(<DashboardOverview state={mockState} onAction={onAction} />);
    fireEvent.click(screen.getByText('New Task'));
    expect(onAction).toHaveBeenCalledWith('new-task');
  });

  it('shows no active alerts when all are acknowledged', () => {
    const ackState = { ...mockState, alerts: mockState.alerts.map(a => ({ ...a, acknowledged: true })) };
    render(<DashboardOverview state={ackState} />);
    expect(screen.getByText(/No active alerts/i)).toBeInTheDocument();
  });
});
