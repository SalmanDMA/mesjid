import { useEffect } from 'react';
import { linkPengajian } from '../../../../helper/linkData';
import { fetchLatestPengajians, fetchPengajians } from '../../../../store/slices/pengajianSlices';
import Card from '../../../Global/Card';
import Layout from '../../../Global/Layout/Layout';
import SliderImage from '../../../Global/SliderImage/SliderImage';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Pengajian = () => {
 const dispatch = useDispatch();
 const pengajians = useSelector((state) => state.pengajians.pengajians);
 const latestPengajians = useSelector((state) => state.pengajians.latestPengajians);
 const pengajiansStatus = useSelector((state) => state.pengajians.status);
 const latestPengajiansStatus = useSelector((state) => state.pengajians.status);
 const navigate = useNavigate();

 useEffect(() => {
  dispatch(fetchPengajians());
  dispatch(fetchLatestPengajians());
 }, [dispatch]);

 if (pengajiansStatus === 'loading' || latestPengajiansStatus === 'loading') {
  return <p>Loading...</p>;
 }

 const handleClickDetail = (id) => {
  navigate(`${linkPengajian}/${id}`);
 };

 return (
  <Layout>
   <div className='bg-[#ddd] min-h-screen pt-32 pb-16'>
    <h1 className='text-heading-2 lg:text-heading-1 text-primary font-bold text-center'>Jadwal Pengajian</h1>
    <div className='py-11'>
     <SliderImage itemData={latestPengajians} handleClickDetail={handleClickDetail} />
    </div>
    <div className='px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
     {pengajians.map((pengajian) => (
      <Card key={pengajian.id} item={pengajian} link={linkPengajian} />
     ))}
    </div>
   </div>
  </Layout>
 );
};

export default Pengajian;
