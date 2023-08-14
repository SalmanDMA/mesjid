import { useRef, useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import './slider-image.css';

const SliderImage = ({ itemData, handleClickDetail }) => {
 const slideRef = useRef(null);
 const [loadingProgress, setLoadingProgress] = useState(0);

 const handleClickNext = () => {
  let items = slideRef.current.querySelectorAll('.item');
  slideRef.current.appendChild(items[0]);
 };

 const handleClickPrev = ({ itemData, handleClickDetail }) => {
  let items = slideRef.current.querySelectorAll('.item');
  slideRef.current.prepend(items[items.length - 1]);
 };

 return (
  <div className='body-slider'>
   <div className='container'>
    <div className='loadbar' style={{ width: `${loadingProgress}%` }}></div>
    <div id='slide' ref={slideRef}>
     {itemData.map((item) => (
      <div key={item.id} className='item' style={{ backgroundImage: `url(${item.picture})` }}>
       <div className='content'>
        <div className='name'>{item.name}</div>
        <div className='des'>{item.description}</div>
        <button onClick={() => handleClickDetail(item.id)} className='btn'>
         Selengkapnya
        </button>
       </div>
      </div>
     ))}
    </div>
    <div className='buttons'>
     <button id='prev' onClick={handleClickPrev}>
      <AiFillLeftCircle className='text-heading-1 text-white' />
     </button>
     <button id='next' onClick={handleClickNext}>
      <AiFillRightCircle className='text-heading-1 text-white' />
     </button>
    </div>
   </div>
  </div>
 );
};

export default SliderImage;
