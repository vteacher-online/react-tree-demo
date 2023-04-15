'use client';

import A from './A';
import C from './C';

export default function Page() {
  return (
    <>
      <div className="float-left w-1/3">
        <C />
      </div>
      <div className="float-right w-2/3">
        <A />
      </div>
    </>
  );
}
