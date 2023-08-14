import { FaUser, FaYoutube, FaTwitter, FaTiktok, FaInstagram, FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo/Masjid-Asy-Syahid.png';
import { linkHome } from '../../../helper/linkData';

const Footer = () => {
 return (
  <footer className='footer p-10 bg-primary text-base-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
   <div className='flex flex-wrap items-center gap-4'>
    <div className='w-20 bg-white rounded-full p-2 shadow-md'>
     <img src={logo} alt='logo masjid' className='w-full' />
    </div>
    <div className='text-white'>
     <h2 className='font-bold text-2xl mb-1 text-start'>MESJID ASY SYAHID</h2>
     <p className='italic text-base text-gray-300'>
      Media Silaturahmi, <br />
      Media Informasi, <br />
      Media Donasi
     </p>
    </div>
   </div>
   <div className='text-white'>
    <span className='footer-title text-lg opacity-100 block mb-2'>Program</span>
    <ul className='list-disc text-base'>
     <li className='mb-1 flex items-center'>
      <FaCircle className='text-gray-300 mr-2 text-[10px]' />
      <p className='text-gray-300'>Pengajian</p>
     </li>
     <li className='mb-1 flex items-center'>
      <FaCircle className='text-gray-300 mr-2 text-[10px]' />
      <p className='text-gray-300'>Event</p>
     </li>
    </ul>
   </div>
   <div className='text-white'>
    <span className='footer-title text-lg opacity-100 block mb-2'>Tautan</span>
    <ul className='list-disc text-base'>
     <li className='mb-1 flex items-center'>
      <FaCircle className='text-gray-300 mr-2 text-[10px]' />
      <Link to={linkHome} className='text-gray-300 hover:text-white transition-colors duration-300 block'>
       Beranda
      </Link>
     </li>
     <li className='mb-1 '>
      <div className='flex items-center'>
       <FaCircle className='text-gray-300 mr-2 text-[10px]' />
       <p className='text-gray-300  block '>Jadwal</p>
      </div>
      <ul className='list-disc text-base pl-5'>
       <li className='mb-1 flex items-center'>
        <FaCircle className='text-gray-300 mr-2 text-[10px]' />
        <Link to={linkHome} className='text-gray-300 hover:text-white transition-colors duration-300 block '>
         Jadwal Shalat
        </Link>
       </li>
       <li className='mb-1 flex items-center'>
        <FaCircle className='text-gray-300 mr-2 text-[10px]' />
        <Link to={linkHome} className='text-gray-300 hover:text-white transition-colors duration-300 block '>
         Jadwal Event
        </Link>
       </li>
       <li className='mb-1 flex items-center'>
        <FaCircle className='text-gray-300 mr-2 text-[10px]' />
        <Link to={linkHome} className='text-gray-300 hover:text-white transition-colors duration-300 block '>
         Jadwal Pengajian
        </Link>
       </li>
      </ul>
     </li>
     <li className='mb-1 flex items-center'>
      <FaCircle className='text-gray-300 mr-2 text-[10px]' />
      <Link to={linkHome} className='text-gray-300 hover:text-white transition-colors duration-300 block mb-2'>
       Donasi
      </Link>
     </li>
    </ul>
   </div>
   <div className='text-white'>
    <span className='footer-title text-xl opacity-100 block mb-4'>Social Media</span>
    <ul className='list-disc text-base'>
     <li className='mb-2'>
      <a className='text-gray-300 hover:text-white transition-colors duration-300 block mb-2' href=''>
       <FaUser className='inline mr-2' />
       Masjid Asy Syahid
      </a>
     </li>
     <li className='mb-2'>
      <a className='text-gray-300 hover:text-white transition-colors duration-300 block mb-2' href='https://www.youtube.com'>
       <FaYoutube className='inline mr-2' /> YouTube
      </a>
     </li>
     <li className='mb-2'>
      <a className='text-gray-300 hover:text-white transition-colors duration-300 block mb-2' href='https://www.twitter.com'>
       <FaTwitter className='inline mr-2' /> Twitter
      </a>
     </li>
     <li className='mb-2'>
      <a className='text-gray-300 hover:text-white transition-colors duration-300 block mb-2' href='https://www.tiktok.com'>
       <FaTiktok className='inline mr-2' /> TikTok
      </a>
     </li>
     <li className='mb-2'>
      <a className='text-gray-300 hover:text-white transition-colors duration-300 block mb-2' href='https://www.instagram.com'>
       <FaInstagram className='inline mr-2' /> Instagram
      </a>
     </li>
    </ul>
   </div>
  </footer>
 );
};

export default Footer;
