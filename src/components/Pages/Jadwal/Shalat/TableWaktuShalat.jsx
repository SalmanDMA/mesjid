const TableWaktuShalat = ({ jadwalShalat, selectedDate, setSelectedDate, setSelectedMonth, monthName, location, convertDateFormat }) => {
 return (
  <div className='bg-white rounded-lg p-5 mt-16'>
   <h1 className='text-heading-3 text-primary font-bold text-center'>JADWAL SHALAT {location}</h1>
   <div className='mt-6 max-w-md mx-auto'>
    <input
     type='month'
     defaultValue={selectedDate}
     onChange={(e) => {
      setSelectedDate(e.target.value);
      setSelectedMonth(e.target.value.substring(5, 7)); // Get the selected month (format: YYYY-MM)
     }}
     className='w-full p-2 bg-[#ddd] border rounded focus:outline-none focus:ring focus:border-blue-300'
    />
   </div>
   <div className='mt-8 overflow-x-auto'>
    <table className='w-full border-collapse '>
     <thead className='bg-[#C5DFF8] text-primary'>
      <tr>
       <th className='p-3 text-center'>{monthName}</th>

       <th className='p-3 text-center'>Subuh</th>
       <th className='p-3 text-center'>Terbit</th>
       <th className='p-3 text-center'>Dzuhur</th>
       <th className='p-3 text-center'>Ashar</th>
       <th className='p-3 text-center'>Magrib</th>
       <th className='p-3 text-center'>Isya</th>
      </tr>
     </thead>
     <tbody className='bg-white text-primary'>
      {jadwalShalat.map((jadwal, index) => (
       <tr key={index}>
        <td className='p-3 text-center'>{convertDateFormat(jadwal.tanggal)}</td>
        <td className='p-3 text-center'>{jadwal.subuh}</td>
        <td className='p-3 text-center'>{jadwal.terbit}</td>
        <td className='p-3 text-center'>{jadwal.dzuhur}</td>
        <td className='p-3 text-center'>{jadwal.ashar}</td>
        <td className='p-3 text-center'>{jadwal.maghrib}</td>
        <td className='p-3 text-center'>{jadwal.isya}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default TableWaktuShalat;
