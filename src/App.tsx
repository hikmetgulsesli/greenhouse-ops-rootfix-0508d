import { useMemo } from 'react';
import { AppContext } from './contexts/AppContext';
import { useAppState } from './hooks/useAppState';
import { DashboardOverview } from './screens/DashboardOverview';
import { TaskBoard } from './screens/TaskBoard';
import { EquipmentStatus } from './screens/EquipmentStatus';
import { MaintenanceLog } from './screens/MaintenanceLog';
import { Settings } from './screens/Settings';
import { ProfilePanel } from './screens/ProfilePanel';
import { FilteredOverview } from './screens/FilteredOverview';
import { EmptyState } from './screens/EmptyState';
import { StorageErrorState } from './screens/StorageErrorState';
import type { Screen } from './types/domain';
import './index.css';

export default function App() {
  const {
    state,
    navigate,
    setSearchQuery,
    toggleProfile,
    closeProfile,
    acknowledgeAlert,
    acknowledgeAllAlerts,
    dismissAlert,
    updateSettings,
    addTask,
    updateTaskStatus,
    setFilterStatus,
    setFilterZone,
    resetStorageState,
    retryConnection,
    setStorageError,
  } = useAppState();

  const contextValue = useMemo(
    () => ({
      state,
      navigate,
      setSearchQuery,
      toggleProfile,
      closeProfile,
      acknowledgeAlert,
      acknowledgeAllAlerts,
      dismissAlert,
      updateSettings,
      addTask,
      updateTaskStatus,
      setFilterStatus,
      setFilterZone,
      resetStorage: resetStorageState,
      retryConnection,
      setStorageError,
    }),
    [
      state,
      navigate,
      setSearchQuery,
      toggleProfile,
      closeProfile,
      acknowledgeAlert,
      acknowledgeAllAlerts,
      dismissAlert,
      updateSettings,
      addTask,
      updateTaskStatus,
      setFilterStatus,
      setFilterZone,
      resetStorageState,
      retryConnection,
      setStorageError,
    ]
  );

  const handleNavigate = (screen: Screen) => {
    navigate(screen);
  };

  const handleAction = (action: string, ...args: unknown[]) => {
    if (action === 'acknowledge-alert' && typeof args[0] === 'string') {
      acknowledgeAlert(args[0]);
    }
    if (action === 'acknowledge-all') {
      acknowledgeAllAlerts();
    }
    if (action === 'dismiss-alert' && typeof args[0] === 'string') {
      dismissAlert(args[0]);
    }
    if (action === 'new-task') {
      addTask({
        title: 'New Maintenance Task',
        status: 'pending',
        priority: 'medium',
        zone: 'Zone A',
        assignee: 'Unassigned',
        dueDate: new Date().toISOString().split('T')[0],
      });
      navigate('task-board');
    }
    if (action === 'schedule-maintenance') {
      addTask({
        title: 'Scheduled Maintenance',
        status: 'pending',
        priority: 'high',
        zone: 'Zone A',
        assignee: 'Unassigned',
        dueDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      });
      navigate('task-board');
    }
    if (action === 'quick-fix' && typeof args[0] === 'string') {
      updateTaskStatus(args[0], 'complete');
    }
    if (action === 'export-csv') {
      const rows = state.logs.map(l => {
        const escape = (s: string) => `"${s.replace(/"/g, '""')}"`;
        return [escape(l.id), escape(l.timestamp), escape(l.action), escape(l.operator), escape(l.status), escape(l.zone)].join(',');
      });
      const csv = 'data:text/csv;charset=utf-8,\uFEFFID,Timestamp,Action,Operator,Status,Zone\n' + rows.join('\n');
      const encoded = encodeURI(csv);
      const link = document.createElement('a');
      link.setAttribute('href', encoded);
      link.setAttribute('download', 'greenhouse-ops-export.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    if (action === 'clear-data') {
      resetStorageState();
    }
    if (action === 'toggle-profile') {
      toggleProfile();
    }
    if (action === 'filter-view') {
      navigate('filtered');
    }
    if (action === 'set-search' && typeof args[0] === 'string') {
      setSearchQuery(args[0]);
    }
    if (action === 'retry-connection') {
      retryConnection();
    }
    if (action === 'reset-storage') {
      resetStorageState();
    }
  };

  const screenProps = {
    onNavigate: handleNavigate as (...args: unknown[]) => void,
    onAction: handleAction as (...args: unknown[]) => void,
    state,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-background text-on-background">
        {state.storageError && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-lg">
            <StorageErrorState {...screenProps} />
          </div>
        )}

        {!state.storageError && state.currentScreen === 'dashboard' && <DashboardOverview {...screenProps} />}
        {!state.storageError && state.currentScreen === 'task-board' && <TaskBoard {...screenProps} />}
        {!state.storageError && state.currentScreen === 'equipment' && <EquipmentStatus {...screenProps} />}
        {!state.storageError && state.currentScreen === 'logs' && <MaintenanceLog {...screenProps} />}
        {!state.storageError && state.currentScreen === 'settings' && <Settings {...screenProps} />}
        {!state.storageError && state.currentScreen === 'filtered' && <FilteredOverview {...screenProps} />}
        {!state.storageError && state.currentScreen === 'empty' && <EmptyState {...screenProps} />}
        {!state.storageError && state.currentScreen === 'profile' && <DashboardOverview {...screenProps} />}

        {!state.storageError && state.profileOpen && (
          <div className="fixed inset-0 z-[60]">
            <ProfilePanel {...screenProps} onClose={closeProfile} />
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}
