import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProfilePanel } from './ProfilePanel';
import type { AppState } from '../types/domain';

const mockState: AppState = {
  currentScreen: 'dashboard',
  profileOpen: false,
  storageError: false,
  searchQuery: '',
  tasks: [],
  equipment: [],
  logs: [],
  alerts: [],
  filterStatus: 'all',
  filterZone: 'all',
  settings: { theme: 'dark', notifications: true, compactMode: false, units: 'metric', timezone: 'utc', systemAlerts: true, taskUpdates: false },
};

describe('ProfilePanel screen', () => {
  it('renders profile title and operator info', () => {
    render(<ProfilePanel state={mockState} />);
    expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();
    expect(screen.getByText('Alex Rivera')).toBeInTheDocument();
    expect(screen.getByText('Senior Technician')).toBeInTheDocument();
    expect(screen.getByText('ID: OPR-492-X')).toBeInTheDocument();
  });

  it('renders close button', () => {
    render(<ProfilePanel state={mockState} />);
    expect(screen.getByLabelText('Close panel')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<ProfilePanel state={mockState} onClose={onClose} />);
    fireEvent.click(screen.getByLabelText('Close panel'));
    expect(onClose).toHaveBeenCalled();
  });

  it('renders System Alerts toggle checked when systemAlerts is true', () => {
    render(<ProfilePanel state={mockState} />);
    const toggle = screen.getByLabelText('System Alerts');
    expect(toggle).toBeChecked();
  });

  it('renders System Alerts toggle unchecked when systemAlerts is false', () => {
    const state = { ...mockState, settings: { ...mockState.settings, systemAlerts: false } };
    render(<ProfilePanel state={state} />);
    const toggle = screen.getByLabelText('System Alerts');
    expect(toggle).not.toBeChecked();
  });

  it('renders Task Updates toggle unchecked by default', () => {
    render(<ProfilePanel state={mockState} />);
    const toggle = screen.getByLabelText('Task Updates');
    expect(toggle).not.toBeChecked();
  });

  it('calls onAction for update-settings when System Alerts is toggled', () => {
    const onAction = vi.fn();
    render(<ProfilePanel state={mockState} onAction={onAction} />);
    const toggle = screen.getByLabelText('System Alerts');
    fireEvent.click(toggle);
    expect(onAction).toHaveBeenCalledWith('update-settings', { systemAlerts: false });
  });

  it('calls onAction for update-settings when Task Updates is toggled', () => {
    const onAction = vi.fn();
    render(<ProfilePanel state={mockState} onAction={onAction} />);
    const toggle = screen.getByLabelText('Task Updates');
    fireEvent.click(toggle);
    expect(onAction).toHaveBeenCalledWith('update-settings', { taskUpdates: true });
  });

  it('calls onNavigate for Sign Out button', () => {
    const onNavigate = vi.fn();
    render(<ProfilePanel state={mockState} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('Sign Out'));
    expect(onNavigate).toHaveBeenCalledWith('dashboard');
  });

  it('renders notifications section', () => {
    render(<ProfilePanel state={mockState} />);
    expect(screen.getByText('Notifications')).toBeInTheDocument();
  });
});
