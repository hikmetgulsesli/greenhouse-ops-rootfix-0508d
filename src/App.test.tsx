import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock localStorage
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

describe('App Shell', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the dashboard by default', () => {
    render(<App />);
    expect(screen.getByText('Greenhouse Ops')).toBeInTheDocument();
    expect(screen.getByText('System Alerts')).toBeInTheDocument();
  });

  it('navigates to Task Board via sidebar', () => {
    render(<App />);
    const taskBoardLink = screen.getAllByText('Task Board')[0];
    fireEvent.click(taskBoardLink);
    expect(screen.getByText('Operational Task Board')).toBeInTheDocument();
  });

  it('navigates to Equipment via sidebar', () => {
    render(<App />);
    const equipmentLink = screen.getAllByText('Equipment')[0];
    fireEvent.click(equipmentLink);
    expect(screen.getByText('Equipment Status')).toBeInTheDocument();
  });

  it('navigates to Logs via sidebar', () => {
    render(<App />);
    const logsLink = screen.getAllByText('Logs')[0];
    fireEvent.click(logsLink);
    expect(screen.getByText('Chronological Maintenance Log')).toBeInTheDocument();
  });

  it('navigates to Settings via sidebar', () => {
    render(<App />);
    const settingsLink = screen.getAllByText('Settings')[0];
    fireEvent.click(settingsLink);
    expect(screen.getByText('Configure system parameters and data persistence protocols.')).toBeInTheDocument();
  });

  it('navigates to Profile via sidebar', () => {
    render(<App />);
    const accountLink = screen.getAllByText('Account')[0];
    fireEvent.click(accountLink);
    expect(screen.getByText('Profile Settings')).toBeInTheDocument();
  });

  it('shows dashboard summary cards with data', () => {
    render(<App />);
    expect(screen.getByText('Total Tasks')).toBeInTheDocument();
    expect(screen.getByText('Active Equipment')).toBeInTheDocument();
    expect(screen.getByText('System Health')).toBeInTheDocument();
    expect(screen.getByText('Pending Maintenance')).toBeInTheDocument();
  });

  it('shows system alerts from state', () => {
    render(<App />);
    expect(screen.getByText('Pump P-02 Failure')).toBeInTheDocument();
    expect(screen.getByText('Temp Drift Detected')).toBeInTheDocument();
  });

  it('acknowledges all alerts via Acknowledge All button', () => {
    render(<App />);
    const ackAllBtn = screen.getByText('Acknowledge All');
    fireEvent.click(ackAllBtn);
    expect(screen.getByText('All alerts acknowledged')).toBeInTheDocument();
  });

  it('shows recent activity table', () => {
    render(<App />);
    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
    expect(screen.getByText('Routine filter replacement and flow rate recalibration.')).toBeInTheDocument();
  });
});
