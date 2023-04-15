'use client';

import { startTransition } from 'react';
import { useAppStateContext } from './lib/AppStateContext';

export default function A({ a }: { a: string }) {
  const [, setAppState] = useAppStateContext();

  return (
    <div className="rounded p-5 outline-dashed">
      A
      <input
        className="w-full rounded border-gray-200"
        type="text"
        defaultValue={a}
        onChange={(e) => {
          startTransition(() => {
            setAppState({
              a: e.target.value,
            });
          });
        }}
      />
    </div>
  );
}
