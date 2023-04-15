'use client';

import { useState } from 'react';
import { AppStateContext } from './AppStateContext';
import { getQueryStringByAppState } from './AppStateURI';
import { useRouter } from 'next/navigation';

export default function AppStateProvider<T>({
  children,
  current,
}: {
  children: React.ReactNode;
  current: T;
}) {
  const [appState, _setAppState] = useState(current);
  const router = useRouter();

  function setAppState(nextAppState: T) {
    let newAppState = { ...appState, ...nextAppState };
    _setAppState(newAppState);
    router.push(
      `${location.origin}${location.pathname}?${getQueryStringByAppState(
        newAppState,
      )}`,
    );
  }

  return (
    <>
      <AppStateContext.Provider value={[appState, setAppState]}>
        {children}
      </AppStateContext.Provider>
    </>
  );
}
