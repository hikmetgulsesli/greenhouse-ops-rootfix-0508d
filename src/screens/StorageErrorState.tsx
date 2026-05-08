// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Storage Error State
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

export interface StorageErrorStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: (...args: unknown[]) => void;
  onAction?: (...args: unknown[]) => void;
  state?: unknown;
}

export function StorageErrorState(_props: StorageErrorStateProps = {}) {
  return (
    <>
      {/* Decorative ambient background glow */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-error rounded-full blur-[120px] mix-blend-screen"></div>
      </div>
      {/* Error Card Container */}
      <main className="relative z-10 w-full max-w-2xl bg-surface-container border border-error/20 rounded-xl shadow-2xl flex flex-col overflow-hidden">
      {/* Top Accent Bar */}
      <div className="h-1 w-full bg-error"></div>
      <div className="p-xl flex flex-col gap-margin">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center gap-sm">
      <div className="w-16 h-16 rounded-full bg-error-container flex items-center justify-center mb-sm">
      <span className="material-symbols-outlined text-[32px] text-error" style={{fontVariationSettings: "'FILL' 1"}}>cloud_off</span>
      </div>
      <h1 className="font-h1 text-h1 text-on-surface">Data Connection Interrupted</h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                          The console is unable to read necessary configuration data from local persistence. The storage state may be corrupted or temporarily inaccessible.
                      </p>
      </div>
      {/* Error Log Snippet (Bento-style embedded widget) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
      <div className="bg-surface-container-high px-md py-sm border-b border-outline-variant flex items-center justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">System Exception Log</span>
      <span className="material-symbols-outlined text-[16px] text-outline">terminal</span>
      </div>
      <div className="p-md font-mono-data text-mono-data text-error break-words whitespace-pre-wrap leading-relaxed">
      [FATAL] LocalStorage Engine Fault
      Timestamp: 2023-10-27T14:32:01.000Z
      ErrorCode: ERR_STORE_IO_FAIL
      
      &gt; Attempting to parse persisted dashboard layout...
      &gt; Exception: JSON_PARSE_ERROR
      &gt; Details: Unexpected token 'u', "undefined" is not valid JSON at position 0.
      &gt; Stack Trace executing termination sequence.
                      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-md mt-sm pt-md border-t border-outline-variant/50">
      <button className="w-full sm:w-auto h-[40px] px-margin bg-primary-container text-on-primary-container font-body-sm text-body-sm rounded-xl flex items-center justify-center gap-sm hover:bg-inverse-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container">
      <span className="material-symbols-outlined text-[18px]">sync</span>
                          Retry Connection
                      </button>
      <button className="w-full sm:w-auto h-[40px] px-margin bg-transparent text-on-surface border border-outline-variant font-body-sm text-body-sm rounded-xl flex items-center justify-center gap-sm hover:bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-outline focus:ring-offset-2 focus:ring-offset-surface-container">
      <span className="material-symbols-outlined text-[18px]">delete_forever</span>
                          Reset Local Storage
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
