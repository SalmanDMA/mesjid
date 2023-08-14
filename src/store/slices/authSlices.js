import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const initialState = {
 user: null,
 loading: false,
 error: null,
 success: false,
};

export const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  loginStart: (state) => {
   state.loading = true;
   state.error = null;
  },
  loginSuccess: (state, action) => {
   state.loading = false;
   state.user = action.payload;
   state.success = true;
  },

  loginFailure: (state, action) => {
   state.loading = false;
   state.error = action.payload;
   state.success = false;
  },
  logout: (state) => {
   state.email = !state.email;
   state.user = null;
   state.loading = false;
   state.error = null;
   state.success = false;
  },
  registerStart: (state) => {
   state.loading = true;
   state.error = null;
  },
  registerSuccess: (state, action) => {
   state.loading = false;
   state.success = true;
   state.user = action.payload;
  },
  registerFailure: (state, action) => {
   state.loading = false;
   state.error = action.payload;
   state.success = false;
  },
  resetStatusAuth: (state) => {
   state.error = null;
   state.success = false;
   state.user = null;
   state.loading = false;
  },
 },
});

export const { loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure, resetStatusAuth } = authSlice.actions;

// Action untuk login user
export const loginUser = (email, password) => async (dispatch) => {
 dispatch(loginStart());
 try {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);

  const token = await userCredential.user.getIdToken();
  const name = userCredential.user.email.split('@')[0];

  localStorage.setItem('token', token);

  dispatch(
   loginSuccess({
    uid: userCredential.user.uid,
    email: userCredential.user.email,
    isLoggedIn: true,
    name,
   })
  );
 } catch (error) {
  dispatch(loginFailure(error.message));
 }
};

// Action untuk logout user
export const logoutUser = () => async (dispatch) => {
 try {
  await signOut(auth);

  localStorage.removeItem('token');

  dispatch(logout());
 } catch (error) {
  console.error('Error during logout:', error);
 }
};

// Action untuk registrasi user
export const registerUser = (email, password) => async (dispatch) => {
 dispatch(registerStart());
 try {
  const auth = getAuth(); // Mendapatkan instance auth dari Firebase

  // Cek apakah email sudah terdaftar sebelumnya
  const isEmailRegistered = await checkEmailRegistered(auth, email);

  if (isEmailRegistered) {
   dispatch(registerFailure('Email sudah terdaftar.'));
   return;
  }

  // Registrasi pengguna baru
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  // // Simpan data pengguna di Firestore
  // const db = getFirestore();
  // const usersRef = collection(db, 'users'); // Ganti dengan koleksi yang sesuai
  // await addDoc(usersRef, {
  //  uid: userCredential.user.uid,
  //  email: userCredential.user.email,
  // });

  dispatch(
   registerSuccess({
    uid: userCredential.user.uid,
    email: userCredential.user.email,
   })
  );
 } catch (error) {
  dispatch(registerFailure(error.message));
 }
};

// Fungsi untuk memeriksa apakah email sudah terdaftar
const checkEmailRegistered = async (auth, email) => {
 try {
  await signInWithEmailAndPassword(auth, email, 'temporarypassword');
  return true; // Email sudah terdaftar
 } catch (error) {
  if (error.code === 'auth/user-not-found') {
   return false; // Email belum terdaftar
  }
  throw error;
 }
};

export default authSlice.reducer;
