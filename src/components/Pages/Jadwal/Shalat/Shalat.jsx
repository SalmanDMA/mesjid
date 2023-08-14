import { useEffect, useState } from 'react';
import Layout from '../../../Global/Layout/Layout';
import './index.css';
import axios from 'axios';
import TableWaktuShalat from './TableWaktuShalat';

const Shalat = () => {
 const [selectedDate, setSelectedDate] = useState('2023-08');
 const [jadwalShalat, setJadwalShalat] = useState([]);
 const [selectedMonth, setSelectedMonth] = useState('08');
 const [monthName, setMonthName] = useState('Agustus');
 const [location, setLocation] = useState('');

 useEffect(() => {
  fetchData(selectedDate);
  setMonthName(getMonthName(selectedMonth));
 }, [selectedDate, selectedMonth]);

 const fetchData = async (date) => {
  try {
   const formattedDate = date.replace('-', '/');
   const response = await axios.get(`https://api.myquran.com/v1/sholat/jadwal/1221/${formattedDate}`);
   setJadwalShalat(response.data.data.jadwal);
   setLocation(response.data.data.lokasi);
  } catch (error) {
   console.error('Error fetching data:', error);
  }
 };

 function convertDateFormat(originalDate) {
  const parts = originalDate.split(', ');
  const dateParts = parts[1].split('/');

  const dayName = parts[0];
  const dateData = dateParts[0];

  const dayMap = {
   Minggu: 0,
   Senin: 1,
   Selasa: 2,
   Rabu: 3,
   Kamis: 4,
   Jumat: 5,
   Sabtu: 6,
  };

  const day = dayMap[dayName];
  const shortDay = getShortDayName(day);

  const formattedDate = `${dateData} ${shortDay} `;
  return formattedDate;
 }

 function getShortDayName(day) {
  const days = ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  return days[day];
 }

 function getMonthName(month) {
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  return months[Number(month) - 1];
 }

 return (
  <Layout>
   <div className='bg-[#ddd] min-h-screen px-5 lg:px-20 pt-32 pb-16'>
    <h1 className='text-heading-1 text-primary font-bold text-center'>Waktu Shalat</h1>
    {/* card untuk coundown */}
    <div className='bg-white rounded-lg p-5 mt-16'>
     <div className='flex justify-between items-center'>
      <p className='text-base md:text-heading-4 lg:text-[32px] font-bold'>
       Di <span className='text-primary'>{location}</span>
      </p>
      <p className='text-primary'>21 Juli</p>
     </div>
     <div className='mt-7 md:mt-14 grid gap-7 lg:flex lg:items-center'>
      <div className='card-image flex flex-col justify-center items-center gap-4 mx-auto rounded-lg'>
       <p className='text-heading-4 text-white font-bold text-center'>Shalat Selanjutnya</p>
       <p className='text-heading-4 text-white font-bold '>Subuh</p>
       <p className='text-heading-4 text-white font-bold '>08:50:11</p>
       <p className='text-heading-4 text-white font-bold '>04.50 AM</p>
      </div>
      <div className='flex flex-wrap justify-center gap-7'>
       <div className='p-5 flex flex-col justify-center items-center bg-[#ddd] rounded-lg w-full md:w-[200px]'>
        <p className='text-[20px]'>Subuh</p>
        <p className='text-heading-4 text-primary font-bold'>04:50 AM</p>
       </div>
       <div className='p-5 flex flex-col justify-center items-center bg-[#ddd] rounded-lg w-full md:w-[200px]'>
        <p className='text-[20px]'>Matahari Terbit</p>
        <p className='text-heading-4 text-primary font-bold'>04:50 AM</p>
       </div>
       <div className='p-5 flex flex-col justify-center items-center bg-[#ddd] rounded-lg w-full md:w-[200px]'>
        <p className='text-[20px]'>Dzuhur</p>
        <p className='text-heading-4 text-primary font-bold'>12:00 PM</p>
       </div>
       <div className='p-5 flex flex-col justify-center items-center bg-[#ddd] rounded-lg w-full md:w-[200px]'>
        <p className='text-[20px]'>Ashar</p>
        <p className='text-heading-4 text-primary font-bold'>03:45 PM</p>
       </div>
       <div className='p-5 flex flex-col justify-center items-center bg-[#ddd] rounded-lg w-full md:w-[200px]'>
        <p className='text-[20px]'>Maghrib</p>
        <p className='text-heading-4 text-primary font-bold'>06:30 PM</p>
       </div>
       <div className='p-5 flex flex-col justify-center items-center bg-[#ddd] rounded-lg w-full md:w-[200px]'>
        <p className='text-[20px]'>Isya</p>
        <p className='text-heading-4 text-primary font-bold'>08:15 PM</p>
       </div>
      </div>
     </div>
    </div>
    {/* table waktu shalat */}
    <TableWaktuShalat setSelectedDate={setSelectedDate} setSelectedMonth={setSelectedMonth} selectedDate={selectedDate} monthName={monthName} jadwalShalat={jadwalShalat} convertDateFormat={convertDateFormat} location={location} />
   </div>
  </Layout>
 );
};

export default Shalat;
