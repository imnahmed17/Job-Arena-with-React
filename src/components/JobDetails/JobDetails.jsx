import React from 'react';
import Banner2 from '../Banner/Banner2';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const {id} = useParams();
    const allJobs = useLoaderData();
    console.log(id);
    console.log(allJobs);

    return (
        <div>
            <div className='bg-banner'>
                <Banner2>Job Details</Banner2>
            </div>

        </div>
    );
};

export default JobDetails;


// useEffect(()=>{
//     find korben
//     find kora data ke state e set korben
//     },[load kora data , job er id jeta params theke paisen])