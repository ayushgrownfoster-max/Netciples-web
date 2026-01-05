'use client';

import { Provider } from 'react-redux';
import { useState, useEffect, type ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './index';

export function StoreProvider({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  // Only render PersistGate after client mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
