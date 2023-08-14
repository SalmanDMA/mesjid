import Layout from '../../Global/Layout/Layout';
import heroImage from '../../../assets/image/home/hero-image.png';
import { FaInstagramSquare, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import './index.css';

const Home = () => {
 return (
  <Layout type={'home'}>
   <div className='bg-[#ddd] min-h-screen'>
    <div className='flex flex-wrap justify-center xl:justify-between items-center pt-32 xl:pt-28 px-10 my-style relative'>
     <div className='flex flex-col flex-wrap gap-4 '>
      <p className='text-heading-5 md:text-heading-4'>Assalamualaikum Warrahmatullahi Wabarakatuh,</p>
      <p className='text-primary font-bold text-heading-3 md:text-heading-2'>
       Gemilang Masjidku, <br /> Menyinari Hati, <br /> Menyatukan Umat.
      </p>
      <p className='text-heading-5 md:text-heading-4'>
       Website Masjid Asy Syahid sebagai Media Silaturahmi, <br /> Media Informasi, dan Media Donasi.
      </p>
     </div>
     <div className='w-[600px]'>
      <img src={heroImage} alt='hero image' className='w-full h-full' />
     </div>
    </div>
    <div className='pt-10 lg:pt-14  px-20 flex flex-wrap justify-center gap-5 lg:gap-0 lg:justify-between items-center'>
     <p className='text-base text-center text-primary'> Copyright © 2022 Masjid Asy Syahid </p>
     <ul className='flex flex-wrap justify-center lg:justify-end gap-4 md:pr-10'>
      <li className='mb-2'>
       <a className='flex flex-wrap justify-center items-center text-primary  hover:text-primary_dark hover:scale-110 transition-all duration-300  mb-2' href='https://www.youtube.com'>
        <FaYoutube className='inline mr-2 text-heading-4 md:text-heading-2' />
        <span>Youtube</span>
       </a>
      </li>
      <li className='mb-2'>
       <a className='flex flex-wrap justify-center items-center text-primary  hover:text-primary_dark hover:scale-110 transition-all duration-300  mb-2' href='https://www.twitter.com'>
        <FaTwitter className='inline mr-2 text-heading-4 md:text-heading-2' />
        <span>Twitter</span>
       </a>
      </li>
      <li className='mb-2'>
       <a className='flex flex-wrap justify-center items-center text-primary  hover:text-primary_dark hover:scale-110 transition-all duration-300  mb-2' href='https://www.tiktok.com'>
        <FaTiktok className='inline mr-2 text-heading-4 md:text-heading-2' />
        <span>Tiktok</span>
       </a>
      </li>
      <li className='mb-2'>
       <a className='flex flex-wrap justify-center items-center text-primary  hover:text-primary_dark hover:scale-110 transition-all duration-300  mb-2' href='https://www.instagram.com'>
        <FaInstagramSquare className='inline mr-2 text-heading-4 md:text-heading-2' />
        <span>Instagram</span>
       </a>
      </li>
     </ul>
    </div>
   </div>
  </Layout>
 );
};

export default Home;
