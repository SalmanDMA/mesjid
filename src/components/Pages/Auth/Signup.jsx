import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../store/slices/authSlices';
import { failToast, successToast } from '../../../store/action/actionToast';
import { useForm } from 'react-hook-form';

const Signup = ({ toggleForm }) => {
 const {
  reset,
  handleSubmit,
  register,
  formState: { errors },
 } = useForm({
  mode: 'onChange',
 });

 const [error, errorSet] = useState(null);
 const dispatch = useDispatch();
 const loading = useSelector((state) => state.auth.loading);
 const globalError = useSelector((state) => state.auth.error);

 const checkEmailPattern = (email) => {
  const emailPattern = /^admin/ || /^admin\d+@/;
  return emailPattern.test(email);
 };

 const onRegister = async (data) => {
  try {
   const userEmail = data.email;
   if (!checkEmailPattern(userEmail)) {
    await dispatch(registerUser(data.email, data.password));
    if (!globalError) {
     errorSet(null);
     reset();
     toggleForm();
     dispatch(successToast('Registered successfully'));
    } else {
     dispatch(failToast(globalError));
     return;
    }
   } else {
    errorSet('Email Tidak Valid');
    return;
   }
  } catch (error) {
   dispatch(failToast('Error during registration'));
   errorSet('Error during registration:', error.message);
  }
 };

 return (
  <div className='form-container sign-up-container'>
   <form onSubmit={handleSubmit(onRegister)} className='form-style'>
    <h1 className='h1 text-black'>Create Account</h1>
    <input className='input-style' type='email' name='email' placeholder='Email' {...register('email', { required: 'Email harus diisi', pattern: { value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, message: 'Email tidak valid' } })} />
    {errors.email && <span className='text-red-500 my-1 w-full text-start'>{errors.email.message}</span>}
    <input className='input-style' type='password' name='password' placeholder='Password' {...register('password', { required: 'Password harus diisi', minLength: { value: 6, message: 'Password minimal 6 karakter' } })} />
    {errors.password && <span className='text-red-500 my-1 w-full text-start'>{errors.password.message}</span>}
    {globalError && <p className='text-red-500 my-1'>{globalError}</p>}
    {error && <p className='text-red-500 my-1'>{error}</p>}
    <button type='submit' className='button-style mt-3 disabled:bg-primary_dark' disabled={loading}>
     {loading ? 'Loading...' : 'Sign Up'}
    </button>
   </form>
  </div>
 );
};

export default Signup;
