import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react';
import errorAnimation from '../../assets/error-404.json';

const ErrorPage = () => {
    const { error } = useRouteError();

    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <Lottie animationData={errorAnimation} loop={true} />
                <div className='max-w-md text-center'>
                    <p className='text-2xl md:text-3xl font-semibold text-red-800 mb-8'>{error?.message}</p>
                    <Link to='/' className='btn'>Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;