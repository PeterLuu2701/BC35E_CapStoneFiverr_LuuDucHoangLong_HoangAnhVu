import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/adminReducer';
import jobReducer from './reducers/jobReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    jobReducer: jobReducer,
    userReducer: userReducer,
    adminReducer: adminReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;