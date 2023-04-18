import React from 'react';
import img1 from '../../assets/group-icon.png';

const Footer = () => {
    return (
        <div className='mt-20 py-16 bg-[#1A1919]'>
            <div className='my-container text-[#ffffffb3]'>
                <div className='flex flex-col lg:flex-row justify-between gap-6'>
                    <div className='lg:w-2/6'>
                        <h2 className='font-semibold text-2xl mb-4 text-white'>Job Arena</h2>
                        <p className='lg:text-sm lg:w-3/4 mb-5'>Experience the thrill of the hunt for your perfect job in the Job Arena. Let us guide you to success and career fulfillment.</p>
                        <div>
                            <img style={{ width: '140px' }} src={img1} alt="" />
                        </div>
                    </div>
                    <div className='lg:w-4/6 flex flex-wrap justify-between'>
                        <div className='w-2/4 md:w-1/4'>
                            <h3 className='font-semibold text-lg mb-3 text-white'>Company</h3>
                            <p className='lg:text-sm mb-2'>About Us</p>
                            <p className='lg:text-sm mb-2'>Work</p>
                            <p className='lg:text-sm mb-2'>Latest News</p>
                            <p className='lg:text-sm mb-2'>Careers</p>
                        </div>
                        <div className='w-2/4 md:w-1/4'>
                            <h3 className='font-semibold text-lg mb-3 text-white'>Product</h3>
                            <p className='lg:text-sm mb-2'>Prototype</p>
                            <p className='lg:text-sm mb-2'>Plans & Pricing</p>
                            <p className='lg:text-sm mb-2'>Customers</p>
                            <p className='lg:text-sm mb-2'>Integrations</p>
                        </div>
                        <div className='w-2/4 md:w-1/4'>
                            <h3 className='font-semibold text-lg mb-3 text-white'>Support</h3>
                            <p className='lg:text-sm mb-2'>Help Desk</p>
                            <p className='lg:text-sm mb-2'>Sales</p>
                            <p className='lg:text-sm mb-2'>Become a Partner</p>
                            <p className='lg:text-sm mb-2'>Developers</p>
                        </div>
                        <div className='w-2/4 md:w-1/4'>
                            <h3 className='font-semibold text-lg mb-3 text-white'>Contact</h3>
                            <p className='lg:text-sm mb-2'>524 Broadway , NYC</p>
                            <p className='lg:text-sm mb-2'>+1 777 - 978 - 5570</p>
                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <hr />
                </div>
                <div className='flex flex-col md:flex-row justify-between text-center'>
                    <p className='text-sm'>@2023 <span className='font-semibold'>Job Arena</span>. All Rights Reserved</p>
                    <p className='text-sm'>Powered by <span className='font-semibold'>Job Arena</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;