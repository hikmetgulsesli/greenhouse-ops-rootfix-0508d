import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EquipmentStatus } from './EquipmentStatus';
import type { AppState } from '../types/domain';

const mockState: AppState = {
  currentScreen: 'equipment',
  profileOpen: false,
  storageError: false,
  searchQuery: '',
  tasks: [],
  equipment: [
    { id: 'E-001', name: 'HVAC Unit H-01', status: 'online', zone: 'Zone A', lastMaintenance: '2024-04-15', health: 98 },
    { id: 'E-002', name: 'Irrigation Pump P-02', status: 'error', zone: 'Zone C', lastMaintenance: '2024-03-20', health: 34 },
    { id: 'E-003', name: 'Light Array North', status: 'online', zone: 'Zone B', lastMaintenance: '2024-04-28', health: 91 },
    { id: 'E-004', name: 'Nutrient Mixer M-03', status: 'maintenance', zone: 'Zone A', lastMaintenance: '2024-05-01', health: 72 },
  ],
  logs: [],
  alerts: [],
  filterStatus: 'all',
  filterZone: 'all',
  settings: { theme: 'dark', notifications: true, compactMode: false },
};

describe('EquipmentStatus screen', () => {
  it('renders the equipment status title', () => {
    render(<EquipmentStatus state={mockState} />);
    expect(screen.getByText(/Equipment Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Live monitoring and diagnostic tools/i)).toBeInTheDocument();
  });

  it('renders all equipment items from state', () => {
    render(<EquipmentStatus state={mockState} />);
    expect(screen.getByText('HVAC Unit H-01')).toBeInTheDocument();
    expect(screen.getByText('Irrigation Pump P-02')).toBeInTheDocument();
    expect(screen.getByText('Light Array North')).toBeInTheDocument();
    expect(screen.getByText('Nutrient Mixer M-03')).toBeInTheDocument();
  });

  it('renders status badges correctly', () => {
    render(<EquipmentStatus state={mockState} />);
    expect(screen.getAllByText('Online').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Maintenance')).toBeInTheDocument();
  });

  it('renders health percentages', () => {
    render(<EquipmentStatus state={mockState} />);
    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText('34%')).toBeInTheDocument();
    expect(screen.getByText('91%')).toBeInTheDocument();
    expect(screen.getByText('72%')).toBeInTheDocument();
  });

  it('filters equipment by search query', () => {
    const onAction = vi.fn();
    render(<EquipmentStatus state={{ ...mockState, searchQuery: 'Pump' }} onAction={onAction} />);
    expect(screen.getByText('Irrigation Pump P-02')).toBeInTheDocument();
    expect(screen.queryByText('HVAC Unit H-01')).not.toBeInTheDocument();
  });

  it('calls onNavigate for view logs button', () => {
    const onNavigate = vi.fn();
    render(<EquipmentStatus state={mockState} onNavigate={onNavigate} />);
    const logButtons = screen.getAllByText('View Logs');
    fireEvent.click(logButtons[0]);
    expect(onNavigate).toHaveBeenCalledWith('logs');
  });

  it('calls onAction for quick-fix on non-online equipment', () => {
    const onAction = vi.fn();
    render(<EquipmentStatus state={mockState} onAction={onAction} />);
    const fixButtons = screen.getAllByText('Quick Fix');
    fireEvent.click(fixButtons[0]);
    expect(onAction).toHaveBeenCalledWith('quick-fix', 'E-002');
  });

  it('calls onNavigate for sidebar navigation', () => {
    const onNavigate = vi.fn();
    render(<EquipmentStatus state={mockState} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('Dashboard'));
    expect(onNavigate).toHaveBeenCalledWith('dashboard');
  });

  it('renders zone and last maintenance info', () => {
    render(<EquipmentStatus state={mockState} />);
    expect(screen.getAllByText('Zone A').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('2024-04-15')).toBeInTheDocument();
  });

  it('shows empty state when no equipment', () => {
    render(<EquipmentStatus state={{ ...mockState, equipment: [] }} />);
    expect(screen.getByText(/Equipment Status/i)).toBeInTheDocument();
  });
});
