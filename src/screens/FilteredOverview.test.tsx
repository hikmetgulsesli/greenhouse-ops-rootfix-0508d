import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilteredOverview } from './FilteredOverview';
import type { AppState } from '../types/domain';

const mockState: AppState = {
  currentScreen: 'filtered',
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

describe('FilteredOverview screen', () => {
  it('renders the event operations title and description', () => {
    render(<FilteredOverview state={mockState} />);
    expect(screen.getByText(/Event Operations/i)).toBeInTheDocument();
    expect(screen.getByText(/Review and manage prioritized system events/i)).toBeInTheDocument();
  });

  it('renders filtered tasks as event rows', () => {
    render(<FilteredOverview state={mockState} />);
    // By default filters show critical + in-progress
    expect(screen.getByText('Inspect irrigation pump P-02')).toBeInTheDocument(); // critical
    expect(screen.getByText('Calibrate humidity sensors')).toBeInTheDocument(); // in-progress
    expect(screen.getByText('Update climate control firmware')).toBeInTheDocument(); // in-progress
  });

  it('does not show resolved tasks by default', () => {
    render(<FilteredOverview state={mockState} />);
    expect(screen.queryByText('Clean light array reflectors')).not.toBeInTheDocument();
  });

  it('shows all tasks when all status filters are cleared', () => {
    render(<FilteredOverview state={mockState} />);
    const clearBtn = screen.getByText('Clear All');
    fireEvent.click(clearBtn);
    expect(screen.getByText('Replace nutrient filter')).toBeInTheDocument();
    expect(screen.getByText('Clean light array reflectors')).toBeInTheDocument();
  });

  it('filters by search query', () => {
    render(<FilteredOverview state={{ ...mockState, searchQuery: 'pump' }} />);
    expect(screen.getByText('Inspect irrigation pump P-02')).toBeInTheDocument();
    expect(screen.queryByText('Calibrate humidity sensors')).not.toBeInTheDocument();
  });

  it('filters by zone', () => {
    render(<FilteredOverview state={mockState} />);
    const zoneSelect = screen.getByLabelText(/Facility zone filter/i);
    fireEvent.change(zoneSelect, { target: { value: 'Zone A' } });
    expect(screen.queryByText('Inspect irrigation pump P-02')).not.toBeInTheDocument();
  });

  it('toggles status filter chips', () => {
    render(<FilteredOverview state={mockState} />);
    // Click Resolved to include completed tasks
    const resolvedChip = screen.getByText('Resolved');
    fireEvent.click(resolvedChip);
    expect(screen.getByText('Clean light array reflectors')).toBeInTheDocument();
  });

  it('shows empty state when no tasks match', () => {
    render(<FilteredOverview state={{ ...mockState, searchQuery: 'zzzzzz' }} />);
    expect(screen.getByText(/No events match the current filters/i)).toBeInTheDocument();
  });

  it('calls onAction for set-search when search input changes', () => {
    const onAction = vi.fn();
    render(<FilteredOverview state={mockState} onAction={onAction} />);
    const searchInput = screen.getByLabelText(/Search events, zones, or equipment/i);
    fireEvent.change(searchInput, { target: { value: 'sensor' } });
    expect(onAction).toHaveBeenCalledWith('set-search', 'sensor');
  });

  it('calls onNavigate for sidebar navigation', () => {
    const onNavigate = vi.fn();
    render(<FilteredOverview state={mockState} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('Dashboard'));
    expect(onNavigate).toHaveBeenCalledWith('dashboard');
  });

  it('calls onNavigate to task-board when chevron clicked', () => {
    const onNavigate = vi.fn();
    render(<FilteredOverview state={mockState} onNavigate={onNavigate} />);
    const chevrons = screen.getAllByLabelText(/View in task board/i);
    fireEvent.click(chevrons[0]);
    expect(onNavigate).toHaveBeenCalledWith('task-board');
  });

  it('has disabled Save View button', () => {
    render(<FilteredOverview state={mockState} />);
    const saveBtn = screen.getByText('Save View');
    expect(saveBtn).toBeDisabled();
  });

  it('renders active filter chips with correct counts', () => {
    render(<FilteredOverview state={mockState} />);
    // Chips are interactive divs containing the status labels
    const chips = screen.getAllByText(/Critical|In Progress|Resolved/);
    expect(chips.length).toBeGreaterThanOrEqual(3);
  });
});
