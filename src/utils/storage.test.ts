import { describe, it, expect, beforeEach } from 'vitest';
import { loadFromStorage, saveToStorage, clearStorage, isStorageAvailable } from './storage';

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

describe('storage utilities', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it('isStorageAvailable returns true when localStorage works', () => {
    expect(isStorageAvailable()).toBe(true);
  });

  it('isStorageAvailable returns false when localStorage throws', () => {
    const orig = window.localStorage;
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: () => { throw new Error('QuotaExceeded'); },
        removeItem: () => {},
      },
      writable: true,
      configurable: true,
    });
    expect(isStorageAvailable()).toBe(false);
    Object.defineProperty(window, 'localStorage', { value: orig, writable: true, configurable: true });
  });

  it('saveToStorage stores JSON data', () => {
    const data = { tasks: [{ id: 'T1', title: 'Test' }], version: 1 };
    const result = saveToStorage(data);
    expect(result.error).toBeNull();
    const stored = localStorageMock.getItem('greenhouse-ops-v1');
    expect(stored).not.toBeNull();
    expect(JSON.parse(stored!)).toEqual(data);
  });

  it('loadFromStorage retrieves stored data', () => {
    const data = { tasks: [{ id: 'T1', title: 'Test' }], version: 1 };
    saveToStorage(data);
    const result = loadFromStorage<{ tasks: unknown[]; version: number }>({ tasks: [], version: 0 });
    expect(result.error).toBeNull();
    expect(result.data).toEqual(data);
  });

  it('loadFromStorage returns null when key missing', () => {
    const result = loadFromStorage<string>('default');
    expect(result.error).toBeNull();
    expect(result.data).toBeNull();
  });

  it('loadFromStorage returns error on invalid JSON', () => {
    localStorageMock.setItem('greenhouse-ops-v1', 'not-json');
    const result = loadFromStorage<string>('default');
    expect(result.error).not.toBeNull();
    expect(result.data).toBeNull();
  });

  it('clearStorage removes the key', () => {
    saveToStorage({ test: true });
    expect(localStorageMock.getItem('greenhouse-ops-v1')).not.toBeNull();
    const result = clearStorage();
    expect(result.error).toBeNull();
    expect(localStorageMock.getItem('greenhouse-ops-v1')).toBeNull();
  });

  it('handles storage quota errors', () => {
    const orig = window.localStorage;
    Object.defineProperty(window, 'localStorage', {
      value: {
        ...localStorageMock,
        setItem: () => { throw new Error('QuotaExceededError'); },
      },
      writable: true,
      configurable: true,
    });
    const result = saveToStorage({ test: true });
    expect(result.error).not.toBeNull();
    Object.defineProperty(window, 'localStorage', { value: orig, writable: true, configurable: true });
  });
});
