const OverlaySwitch = ({ toggleForm }) => {
 return (
  <div className='overlay-container'>
   <div className='overlay'>
    <div className='overlay-panel overlay-left'>
     <h1 className='h1'>Welcome Back!</h1>
     <p className='p'>To keep connected with us please login with your personal info</p>
     <button className='button-style ghost' onClick={toggleForm}>
      Sign In
     </button>
    </div>
    <div className='overlay-panel overlay-right'>
     <h1 className='h1'>Hello, Friend!</h1>
     <p className='p'>Enter your details and start the journey with us</p>
     <button className='button-style ghost' onClick={toggleForm}>
      Sign Up
     </button>
    </div>
   </div>
  </div>
 );
};

export default OverlaySwitch;
