import React from 'react';
import img from '../../assets/human.png';
import { Link } from 'react-router-dom';

const Banner1 = () => {
    return (
        <div className='my-container'>
            <div className='flex flex-col md:flex-row items-center justify-between max-w-screen'>
                <div className='text-gray-800 md:w-1/2'>
                    <h1 className='text-5xl md:text-6xl font-semibold mb-3'>One Step</h1>
                    <h1 className='text-5xl md:text-6xl font-semibold mb-3'>Closer To Your</h1>
                    <h1 className='text-5xl md:text-6xl font-semibold mb-5 bg-gradient-to-r from-blue-400 to-indigo-400 inline-block text-transparent bg-clip-text'>Dream Job</h1>
                    <p className='md:w-full lg:w-2/3 text-gray-600 mb-6'>It is more than just a job platform - it's a place where dreams become reality. We connect talented individuals with opportunities to help them achieve their career goals and aspirations.</p>
                    <Link className='btn'>Get Started</Link>
                </div>
                <div className='md:w-1/2'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner1;