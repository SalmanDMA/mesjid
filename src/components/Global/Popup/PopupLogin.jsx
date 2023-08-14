import './popup-login.css';
const PopupLogin = ({ setPopupOpen, handleLoginRedirect }) => {
 return (
  <div className='overlay-popup'>
   <div className='popup-container'>
    <button className='close-button-popup' onClick={() => setPopupOpen(false)}>
     &times;
    </button>
    <p className='text-xl mb-4'>Silakan login untuk mendaftar</p>
    <div className='flex gap-5 justify-center'>
     <button className='buttons-popup' onClick={handleLoginRedirect}>
      Login
     </button>
     <button className='buttons-popup-tutup' onClick={() => setPopupOpen(false)}>
      Tutup
     </button>
    </div>
   </div>
  </div>
 );
};

export default PopupLogin;
