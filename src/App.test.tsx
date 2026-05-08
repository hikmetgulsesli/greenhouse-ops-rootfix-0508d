import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App shell', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the dashboard overview by default', () => {
    render(<App />);
    expect(screen.getByText(/System Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Greenhouse Ops/i)).toBeInTheDocument();
  });

  it('navigates to Task Board via sidebar', () => {
    render(<App />);
    const taskBoardBtn = screen.getByText(/Task Board/i);
    fireEvent.click(taskBoardBtn);
    expect(screen.getByText(/Operational Task Board/i)).toBeInTheDocument();
  });

  it('navigates to Equipment via sidebar', () => {
    render(<App />);
    const equipmentBtn = screen.getByRole('button', { name: /Equipment/i });
    fireEvent.click(equipmentBtn);
    expect(screen.getByText(/Equipment Status/i)).toBeInTheDocument();
  });

  it('navigates to Logs via sidebar', () => {
    render(<App />);
    const logsBtn = screen.getByText(/Logs/i);
    fireEvent.click(logsBtn);
    expect(screen.getByText(/Maintenance Log/i)).toBeInTheDocument();
  });

  it('navigates to Settings via sidebar', () => {
    render(<App />);
    const settingsBtn = screen.getAllByRole('button', { name: /settings Settings/i })[0];
    fireEvent.click(settingsBtn);
    expect(screen.getByRole('heading', { name: /Settings/i })).toBeInTheDocument();
  });

  it('opens profile panel when Account is clicked', () => {
    render(<App />);
    const accountBtn = screen.getAllByText(/Account/i)[0];
    fireEvent.click(accountBtn);
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  });

  it('renders storage error overlay when storageError is true', () => {
    // Simulate a corrupted localStorage to trigger storage error
    localStorage.setItem('greenhouse-ops-state', 'not-json');
    render(<App />);
    expect(screen.getByText(/Data Connection Interrupted/i)).toBeInTheDocument();
    expect(screen.getByText(/Retry Connection/i)).toBeInTheDocument();
    expect(screen.getByText(/Reset Local Storage/i)).toBeInTheDocument();
  });
});
