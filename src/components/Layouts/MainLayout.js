
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = ({
  children
}) => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <div className='lg:w-[1280px] mx-auto'>
        {children}
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;