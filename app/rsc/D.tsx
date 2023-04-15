'use client';

import { startTransition } from 'react';
import { useAppStateContext } from './lib/AppStateContext';

export default function D({ d }: { d: string }) {
  const [, setAppState] = useAppStateContext();

  return (
    <div className="rounded p-5 outline-dashed">
      D
      <select
        className="w-full rounded border-gray-200"
        defaultValue={d}
        onChange={(e) => {
          startTransition(() => {
            setAppState({
              d: e.target.value,
            });
          });
        }}
      >
        <option>asc</option>
        <option>desc</option>
      </select>
    </div>
  );
}
