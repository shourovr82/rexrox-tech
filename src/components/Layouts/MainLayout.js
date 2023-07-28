import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = ({
  children
}) => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <div>
        {children}
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;