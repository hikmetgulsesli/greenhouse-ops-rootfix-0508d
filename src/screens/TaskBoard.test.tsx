import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
  settings: { theme: 'dark', notifications: true, compactMode: false },
};

describe('TaskBoard screen', () => {
  it('renders the operational task board title', () => {
    render(<TaskBoard state={mockState} />);
    expect(screen.getByText(/Operational Task Board/i)).toBeInTheDocument();
    expect(screen.getByText(/Manage and track active greenhouse operations/i)).toBeInTheDocument();
  });

  it('renders pending tasks in To Do column', () => {
    render(<TaskBoard state={mockState} />);
    expect(screen.getByText('Replace nutrient filter')).toBeInTheDocument();
    expect(screen.getByText('To Do')).toBeInTheDocument();
  });

  it('renders critical pending tasks in Delayed column', () => {
    render(<TaskBoard state={mockState} />);
    expect(screen.getByText('Delayed')).toBeInTheDocument();
    expect(screen.getByText('Inspect irrigation pump P-02')).toBeInTheDocument();
  });

  it('renders in-progress tasks in In Progress column', () => {
    render(<TaskBoard state={mockState} />);
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Calibrate humidity sensors')).toBeInTheDocument();
    expect(screen.getByText('Update climate control firmware')).toBeInTheDocument();
  });

  it('renders completed tasks in Completed column', () => {
    render(<TaskBoard state={mockState} />);
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Clean light array reflectors')).toBeInTheDocument();
  });

  it('shows empty message when no tasks in a column', () => {
    render(<TaskBoard state={{ ...mockState, tasks: mockState.tasks.filter(t => t.status !== 'pending') }} />);
    expect(screen.getByText('No pending tasks')).toBeInTheDocument();
  });

  it('filters tasks by search query', () => {
    render(<TaskBoard state={{ ...mockState, searchQuery: 'pump' }} />);
    expect(screen.getByText('Inspect irrigation pump P-02')).toBeInTheDocument();
    expect(screen.queryByText('Replace nutrient filter')).not.toBeInTheDocument();
  });

  it('calls onNavigate for sidebar navigation', () => {
    const onNavigate = vi.fn();
    render(<TaskBoard state={mockState} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('Dashboard'));
    expect(onNavigate).toHaveBeenCalledWith('dashboard');
  });

  it('calls onAction for new-task', () => {
    const onAction = vi.fn();
    render(<TaskBoard state={mockState} onAction={onAction} />);
    fireEvent.click(screen.getByText('New Task'));
    expect(onAction).toHaveBeenCalledWith('new-task');
  });

  it('calls onNavigate for filter button', () => {
    const onNavigate = vi.fn();
    render(<TaskBoard state={mockState} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('Filter'));
    expect(onNavigate).toHaveBeenCalledWith('filtered');
  });

  it('renders task priorities as badges', () => {
    render(<TaskBoard state={mockState} />);
    expect(screen.getAllByText('HIGH').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('MEDIUM').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('CRITICAL').length).toBeGreaterThanOrEqual(1);
  });

  it('renders assignee initials', () => {
    render(<TaskBoard state={mockState} />);
    expect(screen.getAllByText('JS').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('AC').length).toBeGreaterThanOrEqual(1);
  });
});
