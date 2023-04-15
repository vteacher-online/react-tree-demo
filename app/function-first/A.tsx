'use client';

import { useState } from 'react';

import D from './D';
import E from './E';

export default function A() {
  const [a, setA] = useState('');

  return (
    <div>
      <p>A</p>
      <input
        type="text"
        defaultValue={a}
        onChange={(e) => {
          setA(e.target.value);
        }}
      />
      <D a={a} />
      <E a={a} />
    </div>
  );
}
