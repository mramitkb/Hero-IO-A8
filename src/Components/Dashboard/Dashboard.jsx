import React from 'react'

export default function Dashboard() {
  return (
    <div className='w-11/12 mx-auto text-center'>
        <h1 className='text-3xl font-bold'>Trusted By Millions, <br className='md:hidden'/> Build For You</h1>
        <div className='flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-around mt-10'>
            <div className='space-y-3'>
                <p className='text-[#E4D9FB] text-sm'>Total Downloads</p>
                <p className='font-extrabold text-3xl md:text-5xl'>29.6M</p>
                <p className='text-[#E4D9FB] text-sm'>21% More Than Last Month</p>
            </div>
            <div className='space-y-3'>
                <p className='text-[#E4D9FB] text-sm'>Total Reviews</p>
                <p className='font-extrabold text-3xl md:text-5xl'>906K</p>
                <p className='text-[#E4D9FB] text-sm'>46% More Than Last Month</p>
            </div>
            <div className='space-y-3'>
                <p className='text-[#E4D9FB] text-sm'>Active Apps</p>
                <p className='font-extrabold text-3xl md:text-5xl'>132+</p>
                <p className='text-[#E4D9FB] text-sm'>31 More Will Launch</p>
            </div>
        </div>
    </div>
  )
}
