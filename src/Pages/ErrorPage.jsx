import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router';
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className='flex-1 flex flex-col items-center justify-center space-y-4 py-12 bg-[#F5F5F5]'>
               <img className='object-cover' src={errorImg} alt="" />
               <p className='font-semibold text-2xl text-red-500'>OOPS!!! PAGE NOT FOUND!</p>
               <p className='text-[#627382]'>The Page you are looking for is not available.</p>
               <Link to="/" className='btn border-none bg-linear-to-br text-white from-[#632EE3] to-[#9F62F2]'>Go Back!</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;