import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;