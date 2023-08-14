import Layout from '../../Global/Layout/Layout';
import CardDonasi from './CardDonasi/CardDonasi';
import bankData from '../../../helper/bankData';
import FormDonasi from './FormDonasi/FormDonasi';

const Donasi = () => {
 return (
  <Layout>
   <div className='bg-[#ddd] min-h-screen pt-32 pb-16'>
    <h1 className='text-heading-2 lg:text-heading-1 text-primary font-bold text-center'>Salurkan Donasi Anda Melalui Rekening</h1>
    <div className='flex flex-wrap gap-10 justify-center items-center pt-20'>
     {bankData.map((item) => (
      <CardDonasi key={item.id} item={item} />
     ))}
    </div>
    <div className='pt-24'>
     <h2 className='text-heading-2 lg:text-heading-1 text-primary font-bold text-center'>Atau Dapat Salurkan harta Benda Anda</h2>
     <FormDonasi />
    </div>
   </div>
  </Layout>
 );
};

export default Donasi;
