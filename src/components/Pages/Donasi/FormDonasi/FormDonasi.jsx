import { useState } from 'react';
import InputDonasi from './InputDonasi';
import TableDonasi from './TableDonasi';
import { ToastContainer } from 'react-toastify';

const FormDonasi = () => {
 const [showTable, showTableSet] = useState(false);

 return (
  <div className='pt-16'>
   <InputDonasi />
   <div className='flex justify-center w-full pt-10 pb-5'>
    <button className='btn bg-primary text-white hover:bg-primary_dark duration-300 ease-linear transition-colors w-[20%]' onClick={() => showTableSet(!showTable)}>
     {showTable ? 'Tutup Tampilan' : 'Tampilkan Donasi'}
    </button>
   </div>
   <div className='px-20'>{showTable && <TableDonasi />}</div>
   <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
  </div>
 );
};

export default FormDonasi;
