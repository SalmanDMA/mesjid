import { Link, useNavigate } from 'react-router-dom';
import { linkDonasi, linkEvent, linkHome, linkLogin, linkPengajian, linkShalat } from '../../../helper/linkData';
import logo from '../../../assets/image/logo/Masjid-Asy-Syahid.png';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../store/slices/authSlices';

const Navbar = () => {
 const user = useSelector((state) => state.auth.user);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const handleLogout = () => {
  dispatch(logoutUser());
  navigate(linkLogin);
 };
 return (
  <nav className='navbar bg-[#ddd] fixed z-10 px-10 shadow-xl'>
   <div className='navbar-start'>
    <div className='dropdown'>
     <label tabIndex={0} className='btn btn-ghost md:hidden'>
      <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
       <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
      </svg>
     </label>
     <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-primary font-bold'>
      <li>
       <Link to={linkHome}>Beranda</Link>
      </li>
      <li>
       <p>Jadwal</p>
       <ul className='p-2'>
        <li>
         <Link to={linkShalat}>Jadwal Shalat</Link>
        </li>
        <li>
         <Link to={linkEvent}>Jadwal Event</Link>
        </li>
        <li>
         <Link to={linkPengajian}>Jadwal Pengajian</Link>
        </li>
       </ul>
      </li>
      <li>
       <Link to={linkDonasi}>Donasi</Link>
      </li>
      {!user && (
       <li>
        <Link to={linkLogin}>Login</Link>
       </li>
      )}
      {user && (
       <li>
        <Link onClick={handleLogout}>Logout</Link>
       </li>
      )}
     </ul>
    </div>
    <div className='w-20 bg-white rounded-full p-2 shadow-md hidden md:block'>
     <img src={logo} alt='logo' />
    </div>
   </div>
   <div className='navbar-end w-[80%] '>
    <div className='w-20 bg-white rounded-full p-2 shadow-md flex md:hidden'>
     <img src={logo} alt='logo' />
    </div>
    <ul className='menu menu-horizontal  text-primary font-bold text-[18px] hidden md:flex'>
     <li>
      <Link to={linkHome}>Beranda</Link>
     </li>
     <li tabIndex={0}>
      <details>
       <summary>Jadwal</summary>
       <ul className='p-2'>
        <li>
         <Link to={linkShalat}>Jadwal Shalat</Link>
        </li>
        <li>
         <Link to={linkEvent}>Jadwal Event</Link>
        </li>
        <li>
         <Link to={linkPengajian}>Jadwal Pengajian</Link>
        </li>
       </ul>
      </details>
     </li>
     <li>
      <Link to={linkDonasi}>Donasi</Link>
     </li>
    </ul>
    {!user && (
     <Link to={linkLogin} className='btn bg-primary text-white hover:bg-primary_dark duration-300 transition-colors ease-linear text-[18px] hidden md:flex'>
      Login
     </Link>
    )}
    {user && (
     <button className='btn bg-primary text-white hover:bg-primary_dark duration-300 transition-colors ease-linear text-[18px] hidden md:flex' onClick={handleLogout}>
      Logout
     </button>
    )}
   </div>
  </nav>
 );
};

export default Navbar;
