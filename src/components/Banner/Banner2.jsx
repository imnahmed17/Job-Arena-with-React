import React from 'react';
import img1 from '../../assets/top-right.png';
import img2 from '../../assets/bottom-left.png';

const Banner2 = ({ children }) => {
    return (
        <div>
            <img className='absolute top-0 right-0 hidden md:block md:w-24 lg:w-40' src={img1} alt="" />
            <div className='relative h-16 md:h-28 lg:h-40 flex justify-center items-center'>
                <img className='absolute bottom-0 left-0 hidden md:block md:w-40 lg:w-56' src={img2} alt="" />
                <p className='text-center text-4xl text-gray-800 font-bold font-mono'>{children}</p>
            </div>
        </div>
    );
};

export default Banner2;