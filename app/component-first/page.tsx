'use client';

import { RecoilRoot } from 'recoil';

import A from './A';
import B from './B';
import C from './C';
import D from './D';
import E from './E';

export default function Page() {
  return (
    <>
      <RecoilRoot>
        <div className="float-left w-1/3">
          <C />
          <E />
        </div>
        <div className="float-right w-2/3">
          <A />
          <D />
          <B />
        </div>
      </RecoilRoot>
    </>
  );
}
