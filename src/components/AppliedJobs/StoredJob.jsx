import React from 'react';
import { Link } from 'react-router-dom';

const StoredJob = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, jobType, location, salary } = job;

    return (
        <div className='p-5 lg:p-7 border-2 rounded-md flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className='flex flex-col md:flex-row md:items-center gap-5 lg:gap-10'>
                <div className='bg-gray-100 rounded-md flex justify-center items-center md:w-44 h-40 md:h-44'>
                    <img className='w-3/4' src={companyLogo} alt="" />
                </div>
                <div>
                    <h3 className='text-gray-800 text-2xl font-semibold mb-1'>{jobTitle}</h3>
                    <h4 className='text-gray-500 font-medium mb-3'>{companyName}</h4>
                    <div className='text-sm flex mb-3'>
                        <p className='gradient-text font-semibold border-2 border-purple-300 rounded py-1 px-3 me-3'>{remoteOrOnsite}</p>
                        <p className='gradient-text font-semibold border-2 border-purple-300 rounded py-1 px-3'>{jobType}</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-6 mb-4'>
                        <div className='flex items-center gap-1'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6 text-gray-500"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" 
                                />
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
                                />
                            </svg>
                            <p className='text-gray-500 font-medium'>{location.district}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6 text-gray-500"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                />
                            </svg>
                            <p className='text-gray-500 font-medium'>Salary : {salary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link className='btn' to={`/job/${id}`}>View Details</Link>
        </div>
    );
};

export default StoredJob;