'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';

import D from './D';

import _A from './_A';

export default function A() {
  const [a, setA] = useState('');
  const [_a, set_A] = useRecoilState(_A);

  return (
    <div>
      <p>A</p>
      <input
        type="text"
        defaultValue={a}
        onChange={(e) => {
          setA(e.target.value);
          set_A(e.target.value);
        }}
      />
      <D a={a} />
    </div>
  );
}
