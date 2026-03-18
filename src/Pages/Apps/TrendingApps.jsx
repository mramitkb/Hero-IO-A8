import React, { use } from 'react';
import AppCard from './AppCard';
import { Link } from 'react-router';

const TrendingApps = ({fetchPromise}) => {
    const appsData = use(fetchPromise);
    return (
        <div className='w-11/12 mx-auto py-16'>
            <h1 className='text-4xl font-bold text-center'>Trending Apps</h1>
            <p className='text-[#627382] text-center mt-3'>Explore All Trending Apps on the Market developed by us.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12'>
                {appsData.slice(0,8).map(app => <AppCard app={app} key={app.id}></AppCard>)}
            </div>
            <div className='mt-12 flex items-center justify-center'>
                <Link to="/apps" className='btn bg-linear-to-br border-none from-[#632EE3] to-[#9F62F2] text-white'>Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;