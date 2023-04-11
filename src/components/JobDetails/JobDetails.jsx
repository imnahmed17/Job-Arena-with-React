import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const {id} = useParams();
    console.log(id);
    const allJobs = useLoaderData();
    console.log(allJobs);

    return (
        <div>
            <h1>job details</h1>
        </div>
    );
};

export default JobDetails;


// useEffect(()=>{
//     find korben
//     find kora data ke state e set korben
//     },[load kora data , job er id jeta params theke paisen])