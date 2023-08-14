import Layout from '../../../Global/Layout/Layout';
import SliderImage from '../../../Global/SliderImage/SliderImage';
import { useEffect } from 'react';
import Card from '../../../Global/Card';
import { fetchEvents, fetchLatestEvents } from '../../../../store/slices/eventSlices';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { linkEvent } from '../../../../helper/linkData';

const Event = () => {
 const dispatch = useDispatch();
 const events = useSelector((state) => state.events.events);
 const latestEvents = useSelector((state) => state.events.latestEvents);
 const eventsStatus = useSelector((state) => state.events.status);
 const latestEventsStatus = useSelector((state) => state.events.status);
 const navigate = useNavigate();

 useEffect(() => {
  dispatch(fetchEvents());
  dispatch(fetchLatestEvents());
 }, [dispatch]);

 if (eventsStatus === 'loading' || latestEventsStatus === 'loading') {
  return <p>Loading...</p>;
 }

 const handleClickDetail = (id) => {
  navigate(`${linkEvent}/${id}`);
 };

 return (
  <Layout>
   <div className='bg-[#ddd] min-h-screen pt-32 pb-16'>
    <h1 className='text-heading-2 lg:text-heading-1 text-primary font-bold text-center'>Jadwal Event</h1>
    <div className='py-11'>
     <SliderImage itemData={latestEvents} handleClickDetail={handleClickDetail} />
    </div>
    <div className='px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
     {events.map((event) => (
      <Card key={event.id} item={event} link={linkEvent} />
     ))}
    </div>
   </div>
  </Layout>
 );
};

export default Event;
