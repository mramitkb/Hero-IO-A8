import React, { Suspense } from 'react';
import Banner from '../Components/Header/Banner/Banner';
import Dashboard from '../Components/Dashboard/Dashboard';
import TrendingApps from './Apps/TrendingApps';

const fetchPromise = fetch("/appsData.json").then(res => res.json());

const Home = () => {
    
    return (
        <div>
            <div className='bg-[#F5F5F5]'>
                <Banner></Banner>
            </div>
            <div className='bg-linear-to-br from-[#632EE3] to-[#9D61F2] py-12 text-white'>
                <Dashboard></Dashboard>
            </div>
            <div className='bg-[#F5F5F5]'>
                {/* <Suspense fallback={<p>Loading</p>}>
                    <TrendingApps fetchPromise={fetchPromise}></TrendingApps>
                </Suspense> */}
                <TrendingApps fetchPromise={fetchPromise}></TrendingApps>
            </div>
        </div>
    );
};

export default Home;