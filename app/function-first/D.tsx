'use client';

import { useState } from 'react';
import B from './B';

export default function D({ a }: { a: string }) {
  const [d, setD] = useState('asc');

  return (
    <div>
      <p>D</p>
      <select
        defaultValue={d}
        onChange={(e) => {
          setD(e.target.value);
        }}
      >
        <option>asc</option>
        <option>desc</option>
      </select>
      <B a={a} d={d} />
    </div>
  );
}
