import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../store/slices/authSlices';
import { failToast, successToast } from '../../../store/action/actionToast';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { linkHome } from '../../../helper/linkData';

const Signin = () => {
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
 const success = useSelector((state) => state.auth.success);
 const isLoggedIn = useSelector((state) => state.auth.user);
 const navigate = useNavigate();

 const checkEmailPattern = (email) => {
  const emailPattern = /^admin/ || /^admin\d+@/;
  return emailPattern.test(email);
 };

 const navigateDashboard = () => {
  navigate(linkHome);
  reset();
 };

 const onLogin = async (data) => {
  try {
   const userEmail = data.email;
   if (checkEmailPattern(userEmail)) {
    errorSet('Email Tidak Valid');
   } else {
    errorSet(null);
    await dispatch(loginUser(data.email, data.password));
    if (success) {
     navigateDashboard();
    }
   }
  } catch (error) {
   errorSet('Error during login:', error);
  }
 };

 console.log('user data', isLoggedIn);
 console.log('status login', success);

 return (
  <div className='form-container sign-in-container'>
   <form onSubmit={handleSubmit(onLogin)} className='form-style' action='#'>
    <h1 className='h1 text-black'>Sign In</h1>
    <input className='input-style' type='email' name='email' placeholder='Email' {...register('email', { required: 'Email harus diisi', pattern: { value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, message: 'Email tidak valid' } })} />
    {errors.email && <span className='text-red-500 my-1 w-full text-start'>{errors.email.message}</span>}
    <input className='input-style' type='password' name='password' placeholder='Password' {...register('password', { required: 'Password harus diisi', minLength: { value: 6, message: 'Password minimal 6 karakter' } })} />
    {errors.password && <span className='text-red-500 my-1 w-full text-start'>{errors.password.message}</span>}
    {globalError && <p className='text-red-500 my-1'>{globalError}</p>}
    {error && <p className='text-red-500 my-1'>{error}</p>}
    <a className='a' href='#'>
     Forgot Your Password
    </a>
    <button type='submit' className='button-style mt-3 disabled:bg-primary_dark' disabled={loading}>
     {loading ? 'Loading...' : ' Sign In'}
    </button>
    {success && (
     <div className='alert alert-success gap-0 lg:gap-4 mt-4'>
      <svg xmlns='http://www.w3.org/2000/svg' className='stroke-current shrink-0 h-6 w-6' fill='none' viewBox='0 0 24 24'>
       <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
      <span>Login Success, Redirect To Dashboard ...</span>
     </div>
    )}
   </form>
  </div>
 );
};

export default Signin;
