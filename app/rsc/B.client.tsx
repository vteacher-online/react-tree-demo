'use client';

import { useTransition } from 'react';
import { useAppStateContext } from './lib/AppStateContext';

export default function B({
  a,
  d,
  children,
}: {
  a: string;
  d: string;
  children: React.ReactNode;
}) {
  const [, startTransition] = useTransition();
  const [, setAppState] = useAppStateContext();

  async function handleCreate() {
    const payload = { hoge: 'hoge', fuga: 'fuga' };
    const method = 'POST';
    const response = await fetch('http://localhost:3000/api/examples', {
      method,
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response) {
      startTransition(() => {
        setAppState({
          b: new Date().toDateString(),
        });
      });
    }
  }

  return (
    <div className="rounded p-5 outline-dashed">
      B (a={a}, d={d})<div>{children}</div>
      <button
        className="rounded bg-blue-500 p-2 font-bold text-white hover:bg-blue-700 "
        onClick={() => {
          handleCreate();
        }}
      >
        Mutate
      </button>
    </div>
  );
}
