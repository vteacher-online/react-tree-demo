'use client';

import { useRecoilState } from 'recoil';

import _D from './_D';

export default function D() {
  const [_d, set_D] = useRecoilState(_D);
  
  return (
    <div>
      <p>D</p>
      <select
        defaultValue={'asc'}
        onChange={(e) => {
          set_D(e.target.value);
        }}
      >
        <option>asc</option>
        <option>desc</option>
      </select>
    </div>
  );
}
