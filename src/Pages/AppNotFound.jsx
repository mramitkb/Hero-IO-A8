import React from 'react';
import { Link } from 'react-router';
import errorApp from "../assets/App-Error.png";

const AppNotFound = () => {
    return (

            <div className='flex-1 flex flex-col items-center justify-center space-y-4 py-12 bg-[#F5F5F5]'>
               <img className='object-cover' src={errorApp} alt="" />
               <p className='font-semibold text-2xl'>OOPS!!! APP NOT FOUND!</p>
               <p className='text-[#627382]'>The App you are requesting is not found on our system, Please try another apps.</p>
               <Link to="/" className='btn border-none bg-linear-to-br text-white from-[#632EE3] to-[#9F62F2]'>Go Back!</Link>
            </div>
    );
};

export default AppNotFound;