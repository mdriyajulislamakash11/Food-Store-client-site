import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
      return (
            <div>
                  <section>
                        <Navbar />
                  </section>

                  <section className='w-10/12 mx-auto'> 
                        <Outlet />
                  </section>

                  <section>
                        <Footer />
                  </section>
            </div>
      );
};

export default MainLayout;