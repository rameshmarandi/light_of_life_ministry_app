import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reactotron from '../Config/ReactotronConfig';

// Configuration for persisting state
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Combine persisted reducer with root reducer
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  reactotron.createEnhancer(),
);

// Create Redux store with persisted reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable for specific state parts if needed
    }),
  enhancers: () => [reactotron.createEnhancer()],

  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

// Create persistor for handling persistence
export const persistor = persistStore(store);
