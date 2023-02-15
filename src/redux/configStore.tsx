import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/adminReducer';
import jobReducer from './reducers/jobReducer';
import serviceReducer from './reducers/serviceReducer';
import userReducer from './reducers/userReducer';
import workReducer from './reducers/workReducer';

export const store = configureStore({
  reducer: {
    jobReducer: jobReducer,
    userReducer: userReducer,
    adminReducer: adminReducer,
    serviceReducer:serviceReducer,
    workReducer:workReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;