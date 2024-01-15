import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userSlice } from './user/user-slice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['user', 'chainId'],
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const expireTime = 24 * 60 * 60 * 1000;
//  const currentTime = new Date().getTime();
//   const persistedDataTimestamp = state.persistedDataTimestamp; // adjust based on your actual state structure

//   if (persistedDataTimestamp && currentTime - persistedDataTimestamp > expireTime) {
//     // Data has expired, take appropriate action (reset the data, fetch new data, etc.)
//     state = {
//       ...state,
//       persistedData: null, // Reset or re-fetch data
//       persistedDataTimestamp: null, // Reset timestamp
//     };
//   }

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
