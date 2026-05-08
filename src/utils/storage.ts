import type { AppState } from '../types/domain';

const STORAGE_KEY = 'greenhouse-ops-state';

export class StorageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StorageError';
  }
}

export function loadState(): AppState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') {
      throw new StorageError('Persisted state is not a valid object');
    }
    return parsed as AppState;
  } catch (err) {
    throw new StorageError(
      err instanceof Error ? err.message : 'Unknown storage read error'
    );
  }
}

export function saveState(state: AppState): void {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (err) {
    throw new StorageError(
      err instanceof Error ? err.message : 'Unknown storage write error'
    );
  }
}

export function resetStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    throw new StorageError(
      err instanceof Error ? err.message : 'Unknown storage reset error'
    );
  }
}

export function retryLoad<T>(loader: () => T, maxRetries = 3): T {
  let lastError: Error | undefined;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return loader();
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      if (i < maxRetries - 1) {
        // Small delay before retry
        const start = Date.now();
        while (Date.now() - start < 50) { /* busy wait */ }
      }
    }
  }
  throw lastError ?? new StorageError('Retry exhausted');
}
