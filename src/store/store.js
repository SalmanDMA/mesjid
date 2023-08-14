import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlices';
import eventsReducer from './slices/eventSlices';
import pengajiansReducer from './slices/pengajianSlices';

export const store = configureStore({
 reducer: {
  auth: authReducer,
  events: eventsReducer,
  pengajians: pengajiansReducer,
 },
});
