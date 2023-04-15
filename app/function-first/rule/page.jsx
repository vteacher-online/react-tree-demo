'use client';

import { useState } from 'react';

function M() {
  const [m, setM] = useState('');

  return (
    <>
      <input
        type="text"
        defaultValue={m}
        onChange={(e) => {
          setM(e.target.value);
        }}
      />
      <N m={m} />
    </>
  );
}

function N({ m }) {
  return <O m={m} />;
}

function O({ m }) {
  return <>m={m}</>;
}

export default function Page() {
  return <M />;
}
