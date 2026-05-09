// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Task Board
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";
import type { BaseScreenProps, Task, TaskStatus } from '../types/domain';

export interface TaskBoardProps extends BaseScreenProps {
  onAction?: (action: string, payload?: unknown) => void;
}

const STATUS_LABELS: Record<TaskStatus, string> = {
  'todo': 'To Do',
  'in-progress': 'In Progress',
  'delayed': 'Delayed',
  'done': 'Done',
};

const STATUS_BADGE: Record<TaskStatus, string> = {
  'todo': 'bg-surface-variant text-on-surface-variant border border-outline-variant/50',
  'in-progress': 'bg-primary-container/20 text-primary border border-primary/30',
  'delayed': 'bg-surface-variant text-outline border border-outline-variant/50',
  'done': 'bg-secondary-container/30 text-secondary border border-secondary/30',
};

const PRIORITY_BADGE: Record<string, string> = {
  'Critical': 'bg-error-container/20 text-error border border-error/30 animate-pulse',
  'High': 'bg-tertiary-container/20 text-tertiary border border-tertiary/30',
  'Normal': 'bg-surface-variant text-on-surface-variant border border-outline-variant/50',
  'Low': 'bg-surface-variant text-on-surface-variant border border-outline-variant/50',
};

export function TaskBoard({ onNavigate, onAction, state }: TaskBoardProps = {}) {
  const tasks = state?.tasks ?? [];
  const [showNewTask, setShowNewTask] = useState(false);

  const todoTasks = tasks.filter((t) => t.status === 'todo');
  const inProgressTasks = tasks.filter((t) => t.status === 'in-progress');
  const delayedTasks = tasks.filter((t) => t.status === 'delayed');
  const doneTasks = tasks.filter((t) => t.status === 'done');

  const columns: { status: TaskStatus; items: Task[] }[] = [
    { status: 'todo', items: todoTasks },
    { status: 'in-progress', items: inProgressTasks },
    { status: 'delayed', items: delayedTasks },
    { status: 'done', items: doneTasks },
  ];

  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface flex justify-between items-center w-full px-lg py-sm h-16 border-b border-outline-variant flat no shadows docked full-width top-0 z-50">
      <div className="flex items-center gap-md">
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hidden md:block">menu</span>
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Greenhouse Ops</div>
      </div>
      <div className="flex-1 max-w-md mx-lg hidden md:block">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input
        className="w-full bg-surface-container-lowest border border-outline-variant rounded px-10 py-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container text-body-sm font-body-sm text-on-surface outline-none transition-colors"
        placeholder="Search tasks..."
        type="text"
        value={state?.searchQuery ?? ''}
        onChange={(e) => {/* search wired via App */}}
      />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="bg-error text-on-error px-md py-sm rounded font-label-md text-label-md hover:bg-error-container transition-colors active:scale-95 duration-100 flex items-center gap-xs">
                      Emergency Stop
                  </button>
      <div className="flex items-center gap-sm">
      <button className="p-xs rounded hover:bg-surface-container-high transition-colors active:scale-95 duration-100" aria-label="Notifications">
      <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
      </button>
      <button className="p-xs rounded hover:bg-surface-container-high transition-colors active:scale-95 duration-100" aria-label="Help">
      <span className="material-symbols-outlined text-on-surface-variant">help</span>
      </button>
      </div>
      <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant ml-sm" data-alt="A small circular avatar portrait of an industrial facility operator with short dark hair, wearing a uniform. Set against a clean, dark high-tech background consistent with a modern control room UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnbgdhqUOwKKgPvnjRioXOdUTcOMRqlmwDInXs_j3IOxx5fs36WREkkOd4mqIPxEPLkeOKalD4hXAMyNgsIEOhNx9BsUvtZncXORmcvf87aee6ReoqyvO3SRLqHA-WFwr0SBUK5lrLj0dnTuOk9kgFDn0KAJ_q-dlG7KsAt8XbH35sv1g5XRbWmSHCrxsurpsvfuChU03Z1q2qYqtcTNK3U3P9Gu1BjlmTn-XhQbnj9PrZswz8ijJTPrqWNg9YzmwFy64qCncmHh0" />
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant flat no shadows docked h-screen left-0 w-60 flex flex-col h-full py-lg hidden md:flex shrink-0 z-40">
      <div className="px-lg mb-xl flex items-center gap-sm">
      <div className="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary">spa</span>
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Main Operations</h2>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Facility A1</p>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-xs px-md">
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('dashboard')}>
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-primary font-bold border-r-2 border-primary bg-primary-container/10 transition-all active:translate-x-1 duration-150 w-full text-left">
      <span className="material-symbols-outlined fill">assignment</span>
      <span className="font-label-md text-label-md">Task Board</span>
      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('equipment')}>
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span className="font-label-md text-label-md">Equipment</span>
      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('logs')}>
      <span className="material-symbols-outlined">database</span>
      <span className="font-label-md text-label-md">Logs</span>
      </button>
      </div>
      <div className="mt-auto flex flex-col gap-xs px-md pt-lg border-t border-outline-variant/50">
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('settings')}>
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </button>
      <button className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all active:translate-x-1 duration-150 w-full text-left" onClick={() => onNavigate?.('profile')}>
      <span className="material-symbols-outlined">account_circle</span>
      <span className="font-label-md text-label-md">Account</span>
      </button>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="flex-1 flex flex-col overflow-hidden bg-surface-container-lowest">
      {/* Board Header */}
      <div className="flex justify-between items-center px-lg py-md border-b border-outline-variant bg-surface-container-lowest shrink-0">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface">Operational Task Board</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage and track active maintenance and operational tasks across all zones.</p>
      </div>
      <button className="bg-primary-container text-on-primary-container px-lg py-sm rounded font-label-md text-label-md hover:bg-primary-fixed transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-container-lowest focus:ring-primary-container flex items-center gap-sm" onClick={() => setShowNewTask(true)}>
      <span className="material-symbols-outlined text-sm">add</span>
                          New Task
                      </button>
      </div>
      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto p-lg flex gap-lg">
        {columns.map((col) => (
          <div key={col.status} className={`flex flex-col w-80 shrink-0 bg-surface-container rounded-lg border border-outline-variant h-full max-h-full overflow-hidden ${col.status === 'delayed' ? 'opacity-80' : ''}`}>
            <div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{STATUS_LABELS[col.status]}</h3>
              <span className={`px-2 py-0.5 rounded font-mono-data text-mono-data text-xs ${STATUS_BADGE[col.status]}`}>{col.items.length}</span>
            </div>
            <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
              {col.items.map((task) => (
                <div key={task.id} className="bg-surface p-md rounded border border-outline-variant hover:border-outline cursor-grab transition-colors relative group">
                  <div className="flex justify-between items-start mb-sm">
                    <span className="font-mono-data text-mono-data text-on-surface-variant text-xs">{task.id}</span>
                    <span className={`px-2 py-0.5 rounded font-label-sm text-label-sm ${PRIORITY_BADGE[task.priority] ?? PRIORITY_BADGE.Normal}`}>{task.priority}</span>
                  </div>
                  <h4 className="font-body-lg text-body-lg text-on-surface mb-md">{task.title}</h4>
                  {task.description && (
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">{task.description}</p>
                  )}
                  <div className="flex justify-between items-end border-t border-outline-variant pt-sm mt-auto">
                    <div className="flex gap-xs items-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span className="font-label-sm text-label-sm">{task.dueDate}</span>
                    </div>
                    {task.assigneeInitials ? (
                      <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-xs border border-surface">{task.assigneeInitials}</div>
                    ) : (
                      <img alt={task.assignee} className="w-6 h-6 rounded-full border border-surface" src="" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </main>
      </div>
      {/* New Task Modal */}
      {showNewTask && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-surface-container-lowest/80 backdrop-blur-sm">
          <div className="bg-surface border border-outline-variant rounded-xl shadow-2xl max-w-lg w-full p-xl flex flex-col gap-lg">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Create New Task</h2>
            <NewTaskForm onSubmit={(task) => { onAction?.('new-task', task); setShowNewTask(false); }} onCancel={() => setShowNewTask(false)} />
          </div>
        </div>
      )}
    </>
  );
}

function NewTaskForm({ onSubmit, onCancel }: { onSubmit: (task: Record<string, string>) => void; onCancel: () => void }) {
  const [form, setForm] = useState({ title: '', description: '', priority: 'Normal', assignee: '', zone: '' });
  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-col gap-sm">
        <label className="font-label-md text-label-md text-on-surface-variant">Title</label>
        <input className="bg-surface-container-low border border-outline-variant rounded p-sm text-on-surface" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      </div>
      <div className="flex flex-col gap-sm">
        <label className="font-label-md text-label-md text-on-surface-variant">Description</label>
        <textarea className="bg-surface-container-low border border-outline-variant rounded p-sm text-on-surface" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      </div>
      <div className="grid grid-cols-2 gap-md">
        <div className="flex flex-col gap-sm">
          <label className="font-label-md text-label-md text-on-surface-variant">Priority</label>
          <select className="bg-surface-container-low border border-outline-variant rounded p-sm text-on-surface" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
            <option>Critical</option>
            <option>High</option>
            <option>Normal</option>
            <option>Low</option>
          </select>
        </div>
        <div className="flex flex-col gap-sm">
          <label className="font-label-md text-label-md text-on-surface-variant">Zone</label>
          <input className="bg-surface-container-low border border-outline-variant rounded p-sm text-on-surface" value={form.zone} onChange={(e) => setForm({ ...form, zone: e.target.value })} />
        </div>
      </div>
      <div className="flex flex-col gap-sm">
        <label className="font-label-md text-label-md text-on-surface-variant">Assignee</label>
        <input className="bg-surface-container-low border border-outline-variant rounded p-sm text-on-surface" value={form.assignee} onChange={(e) => setForm({ ...form, assignee: e.target.value })} />
      </div>
      <div className="flex justify-end gap-md mt-sm">
        <button className="px-md py-sm rounded border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors" onClick={onCancel}>Cancel</button>
        <button className="px-md py-sm rounded bg-primary text-on-primary hover:bg-primary/90 transition-colors" onClick={() => {
          onSubmit({
            id: `TS-${Math.floor(Math.random() * 1000)}`,
            title: form.title || 'Untitled Task',
            description: form.description,
            priority: form.priority,
            status: 'todo',
            assignee: form.assignee || 'Unassigned',
            assigneeInitials: form.assignee ? form.assignee.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase() : 'UN',
            dueDate: 'TBD',
            zone: form.zone || 'General',
          });
        }}>Create Task</button>
      </div>
    </div>
  );
}
