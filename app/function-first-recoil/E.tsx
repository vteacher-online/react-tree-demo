'use client';

import { useRecoilState } from 'recoil';

import _A from './_A';

export default function E() {
  const [_a] = useRecoilState(_A);

  return (
    <div>
      <p>E</p>
      <p>AdWords {_a}</p>
    </div>
  );
}
