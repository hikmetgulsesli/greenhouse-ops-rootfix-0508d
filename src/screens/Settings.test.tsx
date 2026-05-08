import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Settings } from './Settings';
import type { AppState } from '../types/domain';

const mockState: AppState = {
  currentScreen: 'settings',
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

describe('Settings screen', () => {
  it('renders settings title and description', () => {
    render(<Settings state={mockState} />);
    expect(screen.getByRole('heading', { name: /Settings/i })).toBeInTheDocument();
    expect(screen.getByText(/Manage your operational preferences/i)).toBeInTheDocument();
  });

  it('renders General section with units select', () => {
    render(<Settings state={mockState} />);
    expect(screen.getByText('General')).toBeInTheDocument();
    expect(screen.getByText('System Units')).toBeInTheDocument();
    expect(screen.getByText('Metric (Celsius, L)')).toBeInTheDocument();
  });

  it('renders timezone select', () => {
    render(<Settings state={mockState} />);
    expect(screen.getByText('Timezone')).toBeInTheDocument();
    expect(screen.getByText('UTC (Coordinated Universal Time)')).toBeInTheDocument();
  });

  it('renders Theme section with dark mode toggle', () => {
    render(<Settings state={mockState} />);
    expect(screen.getByText('Theme')).toBeInTheDocument();
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  it('renders Persistence section', () => {
    render(<Settings state={mockState} />);
    expect(screen.getByText('Persistence')).toBeInTheDocument();
    expect(screen.getByText('Export Data')).toBeInTheDocument();
    expect(screen.getByText('Clear Storage')).toBeInTheDocument();
  });

  it('calls onAction for export-csv when Export CSV is clicked', () => {
    const onAction = vi.fn();
    render(<Settings state={mockState} onAction={onAction} />);
    fireEvent.click(screen.getByText('Export CSV'));
    expect(onAction).toHaveBeenCalledWith('export-csv');
  });

  it('calls onAction for clear-data when Clear Data is clicked', () => {
    const onAction = vi.fn();
    render(<Settings state={mockState} onAction={onAction} />);
    fireEvent.click(screen.getByText('Clear Data'));
    expect(onAction).toHaveBeenCalledWith('clear-data');
  });

  it('calls onAction for update-settings when units changes', () => {
    const onAction = vi.fn();
    render(<Settings state={mockState} onAction={onAction} />);
    const select = screen.getByDisplayValue('Metric (Celsius, L)');
    fireEvent.change(select, { target: { value: 'imperial' } });
    expect(onAction).toHaveBeenCalledWith('update-settings', { units: 'imperial' });
  });

  it('calls onAction for update-settings when timezone changes', () => {
    const onAction = vi.fn();
    render(<Settings state={mockState} onAction={onAction} />);
    const select = screen.getByDisplayValue('UTC (Coordinated Universal Time)');
    fireEvent.change(select, { target: { value: 'est' } });
    expect(onAction).toHaveBeenCalledWith('update-settings', { timezone: 'est' });
  });

  it('calls onAction for update-settings when dark mode is toggled', () => {
    const onAction = vi.fn();
    render(<Settings state={mockState} onAction={onAction} />);
    const darkModeBtn = screen.getByRole('switch');
    fireEvent.click(darkModeBtn);
    expect(onAction).toHaveBeenCalledWith('update-settings', { theme: 'light' });
  });

  it('renders dark mode switch as checked when theme is dark', () => {
    render(<Settings state={mockState} />);
    const darkModeBtn = screen.getByRole('switch');
    expect(darkModeBtn).toHaveAttribute('aria-checked', 'true');
  });

  it('renders dark mode switch as unchecked when theme is light', () => {
    const state = { ...mockState, settings: { ...mockState.settings, theme: 'light' as const } };
    render(<Settings state={state} />);
    const darkModeBtn = screen.getByRole('switch');
    expect(darkModeBtn).toHaveAttribute('aria-checked', 'false');
  });

  it('calls onNavigate for sidebar dashboard link', () => {
    const onNavigate = vi.fn();
    render(<Settings state={mockState} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('Dashboard'));
    expect(onNavigate).toHaveBeenCalledWith('dashboard');
  });

  it('calls onNavigate for sidebar task-board link', () => {
    const onNavigate = vi.fn();
    render(<Settings state={mockState} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('Task Board'));
    expect(onNavigate).toHaveBeenCalledWith('task-board');
  });

  it('calls onAction for toggle-profile when Account is clicked', () => {
    const onAction = vi.fn();
    render(<Settings state={mockState} onAction={onAction} />);
    fireEvent.click(screen.getByText('Account'));
    expect(onAction).toHaveBeenCalledWith('toggle-profile');
  });

  it('calls onAction for set-search when search input changes', () => {
    const onAction = vi.fn();
    render(<Settings state={mockState} onAction={onAction} />);
    const input = screen.getByPlaceholderText('Search operations...');
    fireEvent.change(input, { target: { value: 'pump' } });
    expect(onAction).toHaveBeenCalledWith('set-search', 'pump');
  });
});
