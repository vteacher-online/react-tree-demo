import { createContext, useContext } from 'react';

export const AppStateContext = createContext(undefined as any);
export function useAppStateContext() {
  return useContext(AppStateContext);
}
