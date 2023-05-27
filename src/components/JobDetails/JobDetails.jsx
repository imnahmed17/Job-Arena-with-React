import React, { useEffect, useState } from 'react';
import Banner2 from '../Banner/Banner2';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const JobDetails = () => {
    const allJobs = useLoaderData();
    // console.log(allJobs);
    const { id } = useParams();
    // console.log(id);
    const [jobInfo, setJobInfo] = useState({});

    const handleApplyNow = () => {
        const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        const exists = appliedJobs.find(job => job.id === jobInfo.id);
        if (exists) {
            toast.error('You have already applied to this job');
        }
        else {
            localStorage.setItem('appliedJobs', JSON.stringify([...appliedJobs, jobInfo]));
            toast.success('Successfully applied!');
        }
    }

    useEffect(() => {
        const jobData = allJobs.find(job => job.id === id);
        setJobInfo(jobData);
    }, [allJobs, id]);
    // console.log(jobInfo);

    return (
        <div>
            <div className='bg-banner'>
                <Banner2>Job Details</Banner2>
            </div>
            <div className='my-container min-h-[calc(100vh-152px)] md:min-h-[calc(100vh-200px)] lg:min-h-[calc(100vh-248px)] flex items-center'>
                <div className='flex flex-col lg:flex-row gap-8 justify-between max-w-screen'>
                    {/* Job Details */}
                    <div className='text-gray-500 text-justify lg:w-2/3'>
                        <p className=''>
                            <span className='text-gray-800 font-semibold'>Job Description: </span> {jobInfo.jobDescription}
                        </p>
                        <p className='my-4'>
                            <span className='text-gray-800 font-semibold'>Job Responsibility: </span> {jobInfo.jobResponsibility}
                        </p>
                        <p className='text-gray-800 font-semibold'>Educational Requirements:</p>
                        <p className='my-3'>{jobInfo.educationalRequirements}</p>
                        <p className='text-gray-800 font-semibold mb-3'>Experiences:</p>
                        <p>{jobInfo.experiences}</p>
                    </div>

                    {/* Salary and Contact Information Card */}
                    <div className='text-gray-500 lg:w-1/3'>
                        <div className='bg-job-info p-6 rounded-lg mb-4'>
                            <p className='text-gray-800 font-semibold text-lg'>Job Details</p>
                            <div className='my-3'>
                                <hr />
                            </div>
                            <div className='flex items-center gap-1 mb-2'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="#8b89ff" 
                                    className="w-5 h-5"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                    />
                                </svg>
                                <p>
                                    <span className='text-gray-600 font-semibold'>Salary: </span> 
                                    <span className='font-xs'>{jobInfo.salary} (Per Month)</span>
                                </p>
                            </div>
                            <div className='flex items-center gap-1 mb-3'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="#8b89ff" 
                                    className="w-5 h-5"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" 
                                    />
                                </svg>
                                <p>
                                    <span className='text-gray-600 font-semibold'>Job Title: </span> 
                                    <span className='font-xs'>{jobInfo.jobTitle}</span>
                                </p>
                            </div>
                            <p className='text-gray-800 font-semibold text-lg'>Contact Information</p>
                            <div className='my-3'>
                                <hr />
                            </div>
                            <div className='flex items-center gap-1 mb-2'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="#8b89ff" 
                                    className="w-5 h-5"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" 
                                    />
                                </svg>
                                <p>
                                    <span className='text-gray-600 font-semibold'>Phone: </span> 
                                    <span className='font-xs'>{jobInfo.contactInformation?.phone}</span>
                                </p>
                            </div>
                            <div className='flex items-center gap-1 mb-2'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="#8b89ff" 
                                    className="w-5 h-5"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
                                    />
                                </svg>
                                <p>
                                    <span className='text-gray-600 font-semibold'>Email: </span> 
                                    <span className='font-xs'>{jobInfo.contactInformation?.email}</span>
                                </p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="#8b89ff" 
                                    className="w-5 h-5 relative bottom-3"
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
                                <p>
                                    <span className='text-gray-600 font-semibold'>Address: </span> 
                                    <span className='font-xs'>{jobInfo.location?.address}</span>
                                    <br />
                                    <span className='font-xs'>{jobInfo.location?.district}</span>
                                </p>
                            </div>
                        </div>

                        {/* Apply Button */}
                        <Link onClick={handleApplyNow} className='btn w-full'>Apply Now</Link>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default JobDetails;