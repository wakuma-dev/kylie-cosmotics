import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

export default function AuthLayout(){
    return(
        <div className="w-full min-h-screen bg-[#f8f1f4]">
        <Navbar />
         <Outlet />
        </div>
    )
}