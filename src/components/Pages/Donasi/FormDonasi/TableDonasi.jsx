import { useEffect, useState } from 'react';
import db from '../../../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const TableDonasi = () => {
 const [data, setData] = useState([]);
 useEffect(() => {
  const fetchData = async () => {
   try {
    const donasiCollection = await getDocs(collection(db, 'donasi'));
    const fetchedData = donasiCollection.docs.map((doc) => doc.data());
    setData(fetchedData);
   } catch (error) {
    console.error('Error fetching data:', error);
   }
  };

  fetchData();
 }, []);

 const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000).toLocaleString();
  const partsDate = date.split(',');
  const newDate = partsDate[0].replace(/\//g, '-');
  return newDate;
 };

 return (
  <div className='overflow-x-auto'>
   <table className='table w-full border-collapse'>
    <thead className='bg-primary text-white font-bold py-2 px-4 text-heading-5 text-center'>
     <tr>
      <th>No</th>
      <th>Tanggal</th>
      <th>Barang</th>
      <th>Nama</th>
      <th>Jumlah</th>
     </tr>
    </thead>
    <tbody className='bg-gray-200 text-center'>
     {data.map((item, index) => (
      <tr key={item.id}>
       <td>{index + 1}</td>
       <td>{formatTimestamp(item.createdAt)}</td>
       <td>{item.item}</td>
       <td>{item.name}</td>
       <td>{item.qty}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default TableDonasi;
