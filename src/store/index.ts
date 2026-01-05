
import { createLogger } from 'redux-logger';
import localStorage from 'redux-persist/es/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import themeReducer from '../features/theme/themeSlice';

const logger = createLogger({ predicate: () => false });

const getConfig = (key: string, whitelist: string[]) => {
  const persistConfig = {
  key,
  storage: localStorage,
  whitelist,
};
return persistConfig;
};

const rootReducer = combineReducers({
  theme: persistReducer(
    getConfig('theme', ['mode']),
    themeReducer
  ),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false,}).concat(logger),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;