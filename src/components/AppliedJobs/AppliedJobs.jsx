import React, { useEffect, useState } from 'react';
import Banner2 from '../Banner/Banner2';
// import StoredJob from './StoredJob';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filterJobs, setFilterJobs] = useState([]);

    const handleFilter = (option) => {
        const filter = jobs.filter(job => job.remoteOrOnsite === option);
        console.log(filter);
        setFilterJobs(filter);
    }

    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        setJobs(storedJobs);
    }, []);
    console.log(jobs);

    return (
        <div>
            <div className='bg-banner'>
                <Banner2>Applied Jobs</Banner2>
            </div>
            <div className='my-container'>
                <div className='mt-5'>
                    <div className='relative h-10'>
                        <select className='bg-gray-100 p-2 rounded absolute right-0'>
                            <option value="">Filter By</option>
                            <option onClick={() => handleFilter('Remote')} value="Remote">Remote</option>
                            <option value="Onsite">Onsite</option>
                        </select>
                    </div>
                </div>
                <div className='grid gap-6 grid-cols-1 mt-5'>
                    {/* {
                        jobs.map(job => (
                            <StoredJob key={job.id} job={job} />
                        ))
                    } */}
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;