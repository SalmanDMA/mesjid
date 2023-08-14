import { useState } from 'react';
import db from '../../../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { failToast, successToast } from '../../../../store/action/actionToast';

const InputDonasi = () => {
 const dispatch = useDispatch();
 const [selectedItem, selectedItemSet] = useState('');
 const [qty, qtySet] = useState('');
 const [error, errorSet] = useState('');
 const { user } = useSelector((state) => state.auth);
 const [name, setName] = useState('Anonymous');

 const generateRandomId = () => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000);
  return `${timestamp}-${random}`;
 };

 const randomId = generateRandomId();

 const handleDonasiSubmit = async (e) => {
  e.preventDefault();

  if (!selectedItem && !qty) {
   errorSet('Semua field harus diisi');
   return;
  }

  if (!selectedItem) {
   errorSet('Item harus diisi');
   return;
  }

  if (!qty) {
   errorSet('Jumlah harus diisi');
   return;
  }

  if (parseInt(qty) < 0) {
   errorSet('Jumlah harus lebih dari 0');
   return;
  }

  if (user) {
   setName(user.name);
  }

  try {
   const docRef = await addDoc(collection(db, 'donasi'), {
    id: randomId,
    item: selectedItem,
    qty: parseInt(qty),
    createdAt: new Date(),
    name,
   });

   selectedItemSet('');
   qtySet('');
   errorSet('');
   dispatch(successToast('Donasi berhasil ditambahkan'));
  } catch (error) {
   dispatch(failToast('Donasi gagal ditambahkan'));
  }
 };

 return (
  <div className='flex flex-col gap-5'>
   <form className='flex flex-wrap justify-center gap-5' onSubmit={handleDonasiSubmit}>
    <select className='select w-full max-w-xs' value={selectedItem} onChange={(e) => selectedItemSet(e.target.value)}>
     <option disabled value=''>
      Pilih benda yang akan di donasikan
     </option>
     <option value='Sarung'>Sarung</option>
     <option value='Sejadah'>Sejadah</option>
     <option value='Mukena'>Mukena</option>
     <option value="Al-Qur'an">Al-Qur&apos;an</option>
    </select>
    <input type='number' placeholder='Qty' className='input input-bordered w-full max-w-xs' value={qty} onChange={(e) => qtySet(e.target.value)} />
    <button type='submit' className='btn bg-primary text-white hover:bg-primary_dark duration-300 ease-linear transition-colors'>
     Donasi
    </button>
   </form>
   {error && <p className='text-red-500 text-center'>{error}</p>}
  </div>
 );
};

export default InputDonasi;
