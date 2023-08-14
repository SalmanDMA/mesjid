import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import db from '../../config/firebase';

// Pemanggilan API untuk mengambil data pengajian
export const fetchPengajians = createAsyncThunk('pengajians/fetchPengajians', async () => {
 const pengajiansCollection = await getDocs(collection(db, 'pengajians'));
 return pengajiansCollection.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
 }));
});

// Pemanggilan API untuk mengambil data pengajian terbaru
export const fetchLatestPengajians = createAsyncThunk('pengajians/fetchLatestPengajians', async () => {
 const q = query(collection(db, 'pengajians'), orderBy('date', 'desc'), limit(6));
 const latestPengajiansCollection = await getDocs(q);
 return latestPengajiansCollection.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
 }));
});

const initialState = {
 pengajians: [],
 latestPengajians: [],
 status: 'idle',
 error: null,
};

const pengajiansSlice = createSlice({
 name: 'pengajians',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(fetchPengajians.pending, (state) => {
    state.status = 'loading';
   })
   .addCase(fetchPengajians.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.pengajians = action.payload;
   })
   .addCase(fetchPengajians.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
   })
   .addCase(fetchLatestPengajians.pending, (state) => {
    state.status = 'loading';
   })
   .addCase(fetchLatestPengajians.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.latestPengajians = action.payload;
   })
   .addCase(fetchLatestPengajians.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
   });
 },
});

export default pengajiansSlice.reducer;
