import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/adminReducer';
import jobReducer from './reducers/jobReducer';
import serviceReducer from './reducers/serviceReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    jobReducer: jobReducer,
    userReducer: userReducer,
    adminReducer: adminReducer,
    serviceReducer:serviceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;