import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MaintenanceLog } from './MaintenanceLog';
import type { AppState } from '../types/domain';

const mockState: AppState = {
  currentScreen: 'logs',
  profileOpen: false,
  storageError: false,
  searchQuery: '',
  tasks: [],
  equipment: [],
  logs: [
    { id: 'L-001', timestamp: '2024-05-08T11:05:22', action: 'Manual override: Valve V-04', operator: 'J. Smith', status: 'success', zone: 'Zone A' },
    { id: 'L-002', timestamp: '2024-05-08T10:42:01', action: 'Automated task: Nutrient Mix B', operator: 'System', status: 'failed', zone: 'Zone C' },
    { id: 'L-003', timestamp: '2024-05-07T09:30:45', action: 'Diagnostic run: Lighting Array North', operator: 'A. Chen', status: 'complete', zone: 'Zone B' },
  ],
  alerts: [],
  filterStatus: 'all',
  filterZone: 'all',
  settings: { theme: 'dark', notifications: true, compactMode: false },
};

describe('MaintenanceLog screen', () => {
  it('renders the maintenance log title and description', () => {
    render(<MaintenanceLog state={mockState} />);
    expect(screen.getByText(/Maintenance Log/i)).toBeInTheDocument();
    expect(screen.getByText(/Chronological record of system maintenance/i)).toBeInTheDocument();
  });

  it('renders all log entries from state', () => {
    render(<MaintenanceLog state={mockState} />);
    expect(screen.getByText('Manual override: Valve V-04')).toBeInTheDocument();
    expect(screen.getByText('Automated task: Nutrient Mix B')).toBeInTheDocument();
    expect(screen.getByText('Diagnostic run: Lighting Array North')).toBeInTheDocument();
  });

  it('renders formatted dates from ISO timestamps', () => {
    render(<MaintenanceLog state={mockState} />);
    // Should show the date portion from the ISO string
    expect(screen.getByText(/2024-05-08 11:05:22/)).toBeInTheDocument();
    expect(screen.getByText(/2024-05-07 09:30:45/)).toBeInTheDocument();
  });

  it('renders status badges correctly', () => {
    render(<MaintenanceLog state={mockState} />);
    expect(screen.getAllByText('Success').length).toBeGreaterThan(0);
    expect(screen.getByText('Failed')).toBeInTheDocument();
    expect(screen.getByText('Complete')).toBeInTheDocument();
  });

  it('filters logs by search query', () => {
    const onAction = vi.fn();
    render(<MaintenanceLog state={{ ...mockState, searchQuery: 'Valve' }} onAction={onAction} />);
    expect(screen.getByText('Manual override: Valve V-04')).toBeInTheDocument();
    expect(screen.queryByText('Automated task: Nutrient Mix B')).not.toBeInTheDocument();
  });

  it('filters logs by operator name', () => {
    render(<MaintenanceLog state={{ ...mockState, searchQuery: 'A. Chen' }} />);
    expect(screen.getByText('Diagnostic run: Lighting Array North')).toBeInTheDocument();
    expect(screen.queryByText('Manual override: Valve V-04')).not.toBeInTheDocument();
  });

  it('shows empty message when no logs match', () => {
    render(<MaintenanceLog state={{ ...mockState, searchQuery: 'nonexistent' }} />);
    expect(screen.getByText(/No matching records found/i)).toBeInTheDocument();
  });

  it('calls onAction for export-csv when Export clicked', () => {
    const onAction = vi.fn();
    render(<MaintenanceLog state={mockState} onAction={onAction} />);
    const exportBtn = screen.getByText('Export');
    fireEvent.click(exportBtn);
    expect(onAction).toHaveBeenCalledWith('export-csv');
  });

  it('calls onAction for toggle-profile when avatar clicked', () => {
    const onAction = vi.fn();
    render(<MaintenanceLog state={mockState} onAction={onAction} />);
    const avatar = screen.getByLabelText(/Open profile panel/i);
    fireEvent.click(avatar);
    expect(onAction).toHaveBeenCalledWith('toggle-profile');
  });

  it('calls onNavigate for sidebar navigation', () => {
    const onNavigate = vi.fn();
    render(<MaintenanceLog state={mockState} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('Dashboard'));
    expect(onNavigate).toHaveBeenCalledWith('dashboard');
    fireEvent.click(screen.getByText('Task Board'));
    expect(onNavigate).toHaveBeenCalledWith('task-board');
  });

  it('renders equipment type filter dropdown', () => {
    render(<MaintenanceLog state={mockState} />);
    expect(screen.getByLabelText(/Equipment type filter/i)).toBeInTheDocument();
  });

  it('renders pagination info', () => {
    render(<MaintenanceLog state={mockState} />);
    expect(screen.getByText(/Showing 1 to 3 of 3 entries/i)).toBeInTheDocument();
  });
});
