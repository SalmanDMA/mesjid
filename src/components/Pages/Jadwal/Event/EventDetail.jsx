import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiSolidMap } from 'react-icons/bi';
import Layout from '../../../Global/Layout/Layout';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { linkLogin } from '../../../../helper/linkData';
import PopupLogin from '../../../Global/Popup/PopupLogin';

const EventDetail = () => {
 const { id } = useParams();
 const events = useSelector((state) => state.events.events);
 const eventsDataById = events.find((item) => item.id === id);
 const [register, registerSet] = useState(false);
 const [user, userSet] = useState(false);
 const [isPopupOpen, setPopupOpen] = useState(false);
 const navigate = useNavigate();

 useEffect(() => {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    userSet(true);
   } else {
    userSet(false);
   }
  });

  return () => unsubscribe();
 }, []);

 const formatDateToIndonesian = (dateStr) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateStr);
  return date.toLocaleDateString('id-ID', options);
 };

 const formatTimeWithAMPM = (timeStr) => {
  const [hours, minutes] = timeStr.split(':');
  let hour = parseInt(hours, 10);

  let ampm = 'AM';
  if (hour >= 12) {
   ampm = 'PM';
  }

  if (hour > 12) {
   hour -= 12;
  }

  const formattedHour = hour.toString().padStart(2, '0');

  return `${formattedHour}:${minutes} ${ampm}`;
 };

 const handleClickRegister = () => {
  if (!user) {
   setPopupOpen(true);
  } else {
   registerSet(!register);
  }
 };

 const handleLoginRedirect = () => {
  navigate(linkLogin);
 };

 const isRegistered = register;
 const isCompleted = eventsDataById.status === 'completed';
 const isOngoing = eventsDataById.status === 'ongoing';
 const isDisabled = isRegistered || isCompleted || isOngoing;
 let badgeClass = 'text-white bg-red-500';
 let badgeText = 'Anda Belum Terdaftar';

 if (isRegistered) {
  badgeClass = 'text-white bg-green-500';
  badgeText = 'Anda Sudah Terdaftar';
 } else if (isCompleted) {
  badgeClass = 'text-[#B0B3B9] bg-[#D5D6D9]';
  badgeText = 'Selesai';
 } else if (isOngoing) {
  badgeClass = 'text-[#B0B3B9] bg-[#D5D6D9]';
  badgeText = 'Sedang Berlangsung';
 }

 return (
  <Layout>
   <div className='w-full min-h-screen bg-[#ddd] pt-32 pb-10 px-10 lg:pb-20 lg:px-10 flex justify-center items-center'>
    <div className='flex flex-wrap gap-10 max-w-6xl'>
     <h1 className='text-heading-3 lg:text-heading-1 text-primary font-bold text-center w-full'>Event {eventsDataById.name}</h1>
     <div className='card card-compact w-full lg:w-[60%] min-h-[70vh] bg-white shadow-xl p-5'>
      <figure className='aspect-w-16 aspect-h-9'>
       <img src={eventsDataById.picture} alt={eventsDataById.name} className=' object-cover rounded-lg w-full h-full max-h-[400px]' />
      </figure>
      <div className='card-body'>
       <h2 className='card-title text-start text-2xl font-semibold mb-2'>{eventsDataById.name}</h2>
       <p className='text-gray-600'>{eventsDataById.description}</p>
      </div>
     </div>
     <div className='bg-white w-full lg:w-[30%] h-full p-10 rounded-2xl flex flex-col gap-5'>
      <h3 className='text-heading-3 font-bold text-primary text-center'>Keikutsertaan</h3>
      <div className='flex flex-col gap-3'>
       <p className={`w-full p-5 rounded-xl text-center ${badgeClass}`}>{badgeText}</p>
       <button className='btn bg-primary text-white hover:bg-primary_dark duration-300 transition-colors ease-linear w-full' disabled={isDisabled} onClick={handleClickRegister}>
        Daftar
       </button>
      </div>
      <div>
       <h4 className='font-semibold mb-2'>Jadwal Pendaftaran</h4>
       <table className='table-auto w-full'>
        <tbody>
         <tr>
          <td className='text-gray-600 pr-4'>Tanggal</td>
          <td>{formatDateToIndonesian(eventsDataById.date)}</td>
         </tr>
         <tr>
          <td className='text-gray-600 pr-4'>Mulai</td>
          <td>{formatTimeWithAMPM(eventsDataById.startTime)}</td>
         </tr>
         <tr>
          <td className='text-gray-600 pr-4'>Selesai</td>
          <td>{formatTimeWithAMPM(eventsDataById.endTime)}</td>
         </tr>
         <tr>
          <td className='text-gray-600 pr-4'>Status</td>
          <td>{eventsDataById.status}</td>
         </tr>
        </tbody>
       </table>
      </div>
      <div>
       <p className='font-semibold'>Lokasi</p>
       <div className='flex items-center gap-2'>
        <BiSolidMap className='text-primary' />
        <p className='text-gray-600'>{eventsDataById.location}</p>
       </div>
      </div>
     </div>
    </div>
    {isPopupOpen && <PopupLogin setPopupOpen={setPopupOpen} handleLoginRedirect={handleLoginRedirect} />}
   </div>
  </Layout>
 );
};

export default EventDetail;
