import './card-donasi.css';
const CardDonasi = ({ item }) => {
 return (
  <div className='card-donasi'>
   <div className='card-donasi-desc relative'>
    <div className='card-details-donasi bg-primary/90 text-white font-bold'>
     <h3 className='card-title-donasi'>BANK {item.name}</h3>
     <p className='card-description-donasi'>
      No Rek : {item.noRek} - {item.atasNama}
     </p>
    </div>
   </div>
   <div className='card-donasi-image flex justify-center items-center w-full h-[200px] bg-white rounded-xl shadow-xl'>
    <img src={item.image} alt={item.name} className='object-cover img-fluid' />
   </div>
  </div>
 );
};

export default CardDonasi;
