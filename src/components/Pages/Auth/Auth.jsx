import { useState } from 'react';
import './index.css';
import Signin from './Signin';
import Signup from './Signup';
import OverlaySwitch from './OverlaySwitch';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { resetStatusAuth } from '../../../store/slices/authSlices';

const Auth = () => {
 const [isSignup, setIsSignup] = useState(false);
 const dispatch = useDispatch();

 const toggleForm = () => {
  setIsSignup(!isSignup);
  dispatch(resetStatusAuth());
 };

 return (
  <div className='body'>
   <div className={`container-style ${isSignup ? 'right-panel-active' : ''}`}>
    <Signup toggleForm={toggleForm} />
    <Signin toggleForm={toggleForm} />
    <OverlaySwitch toggleForm={toggleForm} />
   </div>
   <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
  </div>
 );
};

export default Auth;
