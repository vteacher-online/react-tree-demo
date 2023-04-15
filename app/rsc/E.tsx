'use client';

export default function E({ a }: { a: string }) {
  return (
    <>
      <div className="rounded p-5 outline-dashed">
        E (a={a})<p>AdWords {a}</p>
      </div>
    </>
  );
}
