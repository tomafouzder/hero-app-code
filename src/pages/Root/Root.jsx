import React from 'react';
import Header from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col bg-gray-100 min-h-screen'>
            <Header></Header>
            <div className='max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12 flex-1  py-4 md:py-8 lg:py-12'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;