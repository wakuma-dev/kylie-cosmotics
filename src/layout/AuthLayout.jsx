import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer'
export default function AuthLayout(){
    return (
      <div className="w-full min-h-screen bg-[#f8f1f4]">
        <Navbar />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
}