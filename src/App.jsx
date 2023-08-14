import { Provider } from 'react-redux';
import { store } from './store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from './components/Pages/Auth/Auth';
import Home from './components/Pages/Home/Home';
import { linkDonasi, linkEvent, linkHome, linkLogin, linkPengajian, linkShalat } from './helper/linkData';
import Shalat from './components/Pages/Jadwal/Shalat/Shalat';
import Pengajian from './components/Pages/Jadwal/Pengajian/Pengajian';
import Event from './components/Pages/Jadwal/Event/Event';
import Donasi from './components/Pages/Donasi/Donasi';
import EventDetail from './components/Pages/Jadwal/Event/EventDetail';
import PengajianDetail from './components/Pages/Jadwal/Pengajian/PengajianDetail';

const router = createBrowserRouter([
 {
  path: linkHome,
  element: <Home />,
 },
 {
  path: linkLogin,
  element: <Auth />,
 },
 {
  path: linkShalat,
  element: <Shalat />,
 },
 {
  path: linkPengajian,
  element: <Pengajian />,
 },
 {
  path: `${linkPengajian}/:id`,
  element: <PengajianDetail />,
 },
 {
  path: linkEvent,
  element: <Event />,
 },
 {
  path: `${linkEvent}/:id`,
  element: <EventDetail />,
 },
 {
  path: linkDonasi,
  element: <Donasi />,
 },
]);

function App() {
 return (
  <Provider store={store}>
   <RouterProvider router={router} />
  </Provider>
 );
}

export default App;
