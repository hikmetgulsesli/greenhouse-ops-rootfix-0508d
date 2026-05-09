const STORAGE_KEY = 'greenhouse-ops-v1';

export interface StorageResult<T> {
  data: T | null;
  error: string | null;
}

export function loadFromStorage<T>(defaultValue: T): StorageResult<T> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { data: null, error: null };
    const parsed = JSON.parse(raw) as T;
    return { data: parsed, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Storage read failed',
    };
  }
}

export function saveToStorage<T>(value: T): StorageResult<void> {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    return { data: null, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Storage write failed',
    };
  }
}

export function clearStorage(): StorageResult<void> {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return { data: null, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Storage clear failed',
    };
  }
}

export function isStorageAvailable(): boolean {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}
