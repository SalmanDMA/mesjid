import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import db from '../../config/firebase';

// Pemanggilan API untuk mengambil data acara
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
 const eventsCollection = await getDocs(collection(db, 'events'));
 return eventsCollection.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
 }));
});

// Pemanggilan API untuk mengambil data acara terbaru
export const fetchLatestEvents = createAsyncThunk('events/fetchLatestEvents', async () => {
 const q = query(collection(db, 'events'), orderBy('date', 'desc'), limit(6));
 const latestEventsCollection = await getDocs(q);
 return latestEventsCollection.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
 }));
});

const initialState = {
 events: [],
 latestEvents: [],
 status: 'idle',
 error: null,
};

const eventsSlice = createSlice({
 name: 'events',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(fetchEvents.pending, (state) => {
    state.status = 'loading';
   })
   .addCase(fetchEvents.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.events = action.payload;
   })
   .addCase(fetchEvents.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
   })
   .addCase(fetchLatestEvents.pending, (state) => {
    state.status = 'loading';
   })
   .addCase(fetchLatestEvents.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.latestEvents = action.payload;
   })
   .addCase(fetchLatestEvents.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
   });
 },
});

export default eventsSlice.reducer;
