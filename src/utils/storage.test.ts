import { describe, it, expect, beforeEach, vi } from 'vitest';
import { loadState, saveState, resetStorage, retryLoad, StorageError } from './storage';
import type { AppState } from '../types/domain';

const STORAGE_KEY = 'greenhouse-ops-state';

describe('storage utilities', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  describe('loadState', () => {
    it('returns null when localStorage is empty', () => {
      expect(loadState()).toBeNull();
    });

    it('parses and returns valid persisted state', () => {
      const state: AppState = {
        currentScreen: 'dashboard',
        profileOpen: false,
        storageError: false,
        searchQuery: '',
        tasks: [],
        equipment: [],
        logs: [],
        alerts: [],
        filterStatus: 'all',
        filterZone: 'all',
        settings: { theme: 'dark', notifications: true, compactMode: false },
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      expect(loadState()).toEqual(state);
    });

    it('throws StorageError for invalid JSON', () => {
      localStorage.setItem(STORAGE_KEY, 'not-json');
      expect(() => loadState()).toThrow(StorageError);
    });

    it('throws StorageError for non-object JSON', () => {
      localStorage.setItem(STORAGE_KEY, '"string"');
      expect(() => loadState()).toThrow(StorageError);
    });

    it('throws StorageError when localStorage throws', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('Quota exceeded');
      });
      expect(() => loadState()).toThrow(StorageError);
    });
  });

  describe('saveState', () => {
    it('serializes and stores state to localStorage', () => {
      const state: AppState = {
        currentScreen: 'task-board',
        profileOpen: true,
        storageError: false,
        searchQuery: 'pump',
        tasks: [],
        equipment: [],
        logs: [],
        alerts: [],
        filterStatus: 'all',
        filterZone: 'all',
        settings: { theme: 'light', notifications: false, compactMode: true },
      };
      saveState(state);
      const raw = localStorage.getItem(STORAGE_KEY);
      expect(raw).toBeTruthy();
      expect(JSON.parse(raw!)).toEqual(state);
    });

    it('throws StorageError when localStorage throws', () => {
      vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('Quota exceeded');
      });
      expect(() => saveState({} as AppState)).toThrow(StorageError);
    });
  });

  describe('resetStorage', () => {
    it('removes the storage key', () => {
      localStorage.setItem(STORAGE_KEY, '{}');
      resetStorage();
      expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
    });

    it('throws StorageError when localStorage throws', () => {
      vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
        throw new Error('Quota exceeded');
      });
      expect(() => resetStorage()).toThrow(StorageError);
    });
  });

  describe('retryLoad', () => {
    it('returns result on first successful attempt', () => {
      const result = retryLoad(() => 'success');
      expect(result).toBe('success');
    });

    it('retries up to maxRetries and succeeds on second attempt', () => {
      let attempts = 0;
      const result = retryLoad(() => {
        attempts++;
        if (attempts < 2) throw new Error('fail');
        return 'success';
      }, 3);
      expect(result).toBe('success');
      expect(attempts).toBe(2);
    });

    it('throws last error after exhausting retries', () => {
      let attempts = 0;
      expect(() =>
        retryLoad(() => {
          attempts++;
          throw new Error(`fail-${attempts}`);
        }, 3)
      ).toThrow('fail-3');
      expect(attempts).toBe(3);
    });

    it('defaults to 3 retries', () => {
      let attempts = 0;
      expect(() =>
        retryLoad(() => {
          attempts++;
          throw new Error('fail');
        })
      ).toThrow();
      expect(attempts).toBe(3);
    });
  });
});
