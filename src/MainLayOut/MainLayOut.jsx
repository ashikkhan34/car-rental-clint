import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import useAuth from '../Hooks/useAuth';

const MainLayOut = () => {
    const {theme} = useAuth()
    return (
        <div className={`${theme ? 'bg-white text-black' : ''}`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;