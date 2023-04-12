import React, { useEffect, useState } from 'react';
import Banner2 from '../Banner/Banner2';
import StoredJob from './StoredJob';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filterJobs, setFilterJobs] = useState([]);
    const [clicked, setClicked] = useState(false);

    const handleFilter = (option) => {
        // console.log(option)
        const filter = jobs.filter(job => job.remoteOrOnsite === option);
        // console.log(filter);
        setFilterJobs(filter);
        setClicked(true);
    }
    // console.log(filterJobs);

    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        setJobs(storedJobs);
    }, []);
    // console.log(jobs);

    return (
        <div>
            {/* Sub Banner */}
            <div className='bg-banner'>
                <Banner2>Applied Jobs</Banner2>
            </div>
            
            <div className='my-container'>
                {/* Filter by Job Type */}
                <div className='mt-5'>
                    <div className='relative h-10'>
                        <select onChange={e => handleFilter(e.target.value)} className='bg-gray-100 p-2 rounded absolute right-0'>
                            <option value="">Filter By</option>
                            <option value="Remote">Remote</option>
                            <option value="Onsite">Onsite</option>
                        </select>
                    </div>
                </div>

                {/* Condition for Rendered Cards are Filtered or not */}
                <div className='grid gap-6 grid-cols-1 mt-5'>
                    {
                        !clicked ?
                            jobs.map(job => (
                                <StoredJob key={job.id} job={job} />
                            ))
                            :
                            filterJobs.map(job => (
                                <StoredJob key={job.id} job={job} />
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;