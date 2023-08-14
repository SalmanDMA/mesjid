import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, type }) => {
 return (
  <>
   <Navbar />
   {children}
   {type !== 'home' && <Footer />}
  </>
 );
};

export default Layout;
