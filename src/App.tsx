import { useAppState } from './hooks/useAppState';
import { DashboardOverview } from './screens/DashboardOverview';
import { TaskBoard } from './screens/TaskBoard';
import { EquipmentStatus } from './screens/EquipmentStatus';
import { MaintenanceLog } from './screens/MaintenanceLog';
import { Settings } from './screens/Settings';
import { ProfilePanel } from './screens/ProfilePanel';
import { EmptyState } from './screens/EmptyState';
import { StorageErrorState } from './screens/StorageErrorState';
import { FilteredOverview } from './screens/FilteredOverview';
import type { ScreenName } from './types/domain';

export default function App() {
  const {
    state,
    navigate,
    setSearch,
    addTask,
    updateTaskStatus,
    updateEquipmentHealth,
    updateEquipmentStatus,
    acknowledgeAlert,
    acknowledgeAllAlerts,
    updateFilters,
    clearFilters,
    updateSettings,
    resetStorage,
    retryStorage,
  } = useAppState();

  const handleNavigate = (screen: ScreenName) => {
    navigate(screen);
  };

  const renderScreen = () => {
    const commonProps = {
      onNavigate: handleNavigate,
      state,
    };

    switch (state.currentScreen) {
      case 'dashboard':
        return (
          <DashboardOverview
            {...commonProps}
            onAction={(action: string, id?: string) => {
              if (action === 'acknowledge-all') acknowledgeAllAlerts();
              if (action === 'acknowledge' && id) acknowledgeAlert(id);
              if (action === 'isolate-pump') {
                updateEquipmentStatus('PMP-B', 'offline');
              }
            }}
          />
        );
      case 'task-board':
        return (
          <TaskBoard
            {...commonProps}
            onAction={(action: string, payload?: unknown) => {
              if (action === 'new-task') {
                const task = payload as {
                  id: string;
                  title: string;
                  description: string;
                  priority: string;
                  status: string;
                  assignee: string;
                  assigneeInitials: string;
                  dueDate: string;
                  zone: string;
                };
                addTask({
                  id: task.id,
                  title: task.title,
                  description: task.description,
                  priority: task.priority as any,
                  status: task.status as any,
                  assignee: task.assignee,
                  assigneeInitials: task.assigneeInitials,
                  dueDate: task.dueDate,
                  zone: task.zone,
                });
              }
              if (action === 'update-status' && payload) {
                const { id, status } = payload as { id: string; status: string };
                updateTaskStatus(id, status as any);
              }
            }}
          />
        );
      case 'equipment':
        return (
          <EquipmentStatus
            {...commonProps}
            onAction={(action: string, id?: string) => {
              if (action === 'quick-fix' && id) {
                updateEquipmentStatus(id, 'online');
                updateEquipmentHealth(id, 98);
              }
            }}
          />
        );
      case 'logs':
        return (
          <MaintenanceLog
            {...commonProps}
            onAction={(action: string) => {
              if (action === 'apply-filters') {
                navigate('filtered');
              }
              if (action === 'export-csv') {
                const csv = state.logs
                  .map(
                    (l) =>
                      `${l.timestamp},${l.equipmentId},"${l.action}",${l.performedBy},${l.status}`
                  )
                  .join('\n');
                const blob = new Blob(
                  [
                    'Date/Time,Equipment ID,Action Taken,Performed By,Status\n' +
                      csv,
                  ],
                  { type: 'text/csv' }
                );
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'maintenance-log.csv';
                a.click();
                URL.revokeObjectURL(url);
              }
            }}
          />
        );
      case 'settings':
        return (
          <Settings
            {...commonProps}
            onAction={(action: string, payload?: unknown) => {
              if (action === 'export-data') {
                const data = JSON.stringify(
                  {
                    tasks: state.tasks,
                    equipment: state.equipment,
                    logs: state.logs,
                    alerts: state.alerts,
                    profile: state.profile,
                    settings: state.settings,
                  },
                  null,
                  2
                );
                const blob = new Blob([data], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'greenhouse-ops-export.json';
                a.click();
                URL.revokeObjectURL(url);
              }
              if (action === 'clear-storage') {
                resetStorage();
              }
              if (action === 'update-settings') {
                updateSettings(payload as any);
              }
            }}
          />
        );
      case 'profile':
        return <ProfilePanel {...commonProps} />;
      case 'empty':
        return (
          <EmptyState
            {...commonProps}
            onAction={(action: string) => {
              if (action === 'create-first-task') {
                navigate('task-board');
              }
              if (action === 'scan-equipment') {
                navigate('equipment');
              }
            }}
          />
        );
      case 'storage-error':
        return (
          <StorageErrorState
            {...commonProps}
            onAction={(action: string) => {
              if (action === 'reset-local-storage') {
                resetStorage();
              }
              if (action === 'retry-connection') {
                retryStorage();
              }
            }}
          />
        );
      case 'filtered':
        return (
          <FilteredOverview
            {...commonProps}
            onAction={(action: string) => {
              if (action === 'clear-all') {
                clearFilters();
              }
              if (action === 'save-view') {
                alert('View saved to local filters');
              }
            }}
          />
        );
      default:
        return <DashboardOverview {...commonProps} />;
    }
  };

  return (
    <div
      data-setfarm-root="app"
      className="min-h-screen bg-surface text-on-surface flex flex-col"
    >
      {renderScreen()}
    </div>
  );
}
