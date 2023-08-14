import { Link } from 'react-router-dom';

const Card = ({ item, link }) => {
 const changeBackground = (status) => {
  let backgroundColor;

  switch (status) {
   case 'completed':
    backgroundColor = '#00C853'; // Hijau
    break;
   case 'upcoming':
    backgroundColor = '#2196F3'; // Biru Muda
    break;
   case 'ongoing':
    backgroundColor = '#FFC107'; // Kuning
    break;
   default:
    backgroundColor = 'gray'; // Warna default jika status tidak cocok
    break;
  }

  return backgroundColor;
 };

 const changeTextColor = (status) => {
  let textColor;

  switch (status) {
   case 'completed':
    textColor = 'white';
    break;
   case 'upcoming':
   case 'ongoing':
    textColor = 'black';
    break;
   default:
    textColor = 'white';
    break;
  }

  return textColor;
 };

 return (
  <div className='card w-full bg-base-100 shadow-xl'>
   <figure>
    <img src={item.picture} alt={item.name} className='w-full h-60' />
   </figure>
   <div className='card-body'>
    <div
     className='badge justify-end'
     style={{
      backgroundColor: changeBackground(item.status),
      color: changeTextColor(item.status),
      border: `2px solid ${changeBackground(item.status)}`,
     }}
    >
     {item.status}
    </div>
    <h2 className='card-title  text-start items-start'>{item.name}</h2>
    <p>{item.date}</p>
    <div className='card-actions justify-center pt-5'>
     <Link to={`${link}/${item.id}`} className='btn bg-primary text-white hover:bg-primary_dark transition-colors duration-300 ease-linear'>
      Selengkapnya
     </Link>
    </div>
   </div>
  </div>
 );
};

export default Card;
