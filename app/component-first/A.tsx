'use client';

import { useRecoilState } from 'recoil';

import _A from './_A';

export default function A() {
  const [_a, set_A] = useRecoilState(_A);

  return (
    <div>
      <p>A</p>
      <input
        type="text"
        defaultValue={_a}
        onChange={(e) => {
          set_A(e.target.value);
        }}
      />
    </div>
  );
}
