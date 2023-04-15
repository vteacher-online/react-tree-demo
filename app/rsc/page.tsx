import { Suspense } from 'react';

import AppStateProvider from './lib/AppStateProvider';
import { PageProps, parseToAppState } from './lib/AppStateURI';

import A from './A';
import B from './B.client';
import B_server from './B.server';
import C from './C';
import D from './D';
import E from './E';

type AppState = {
  a: string;
  d: string;
};

export default function Page(pageProps: PageProps) {
  const appState = parseToAppState<AppState>(pageProps, {
    a: '',
    d: 'asc',
  });
  const { a, d } = appState;

  return (
    <>
      <AppStateProvider current={appState}>
        <div className="p-5">
          <div className="float-left w-1/4 rounded p-5 outline-dashed">
            <C />
            <E a={a} />
          </div>
          <div className="float-right w-3/4 rounded p-5 outline-dashed">
            <div className="rounded p-5 outline-dashed">
              <A a={a} />
              <D d={d} />
            </div>
            <B a={a} d={d}>
              <Suspense fallback={<div>Loading...</div>}>
                {/* @ts-expect-error Async Server Component */}
                <B_server a={a} d={d} />
              </Suspense>
            </B>
          </div>
        </div>
      </AppStateProvider>
    </>
  );
}
