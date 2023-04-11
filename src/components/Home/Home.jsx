import React, { useEffect, useState } from 'react';
import Banner1 from '../Banner/Banner1';
import Category from '../Category/Category';
import { Link, useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const allJobs = useLoaderData();
    // console.log(allJobs);

    const handleShowAll = () => {
        setShowAll(true);
    };

    useEffect(() => {
        fetch('category.json')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div>
            <div className='bg-banner pt-5'>
                <Banner1 />
            </div>

            <section className='my-container text-gray-800 mt-20'>
                <div>
                    <h2 className='text-4xl font-semibold mb-4 text-center'>Job Category List</h2>
                    <p className='text-gray-600 text-center'>Job Arena is a one-stop-shop for job seekers with an extensive list of job categories. Find your dream job with ease.</p>
                    <div className='grid gap-6 lg:grid-cols-4 sm:grid-cols-2 mt-5'>
                        {
                            categories.map(category => (
                                <Category key={category.id} category={category} />
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className='my-container text-gray-800 mt-20'>
                <div>
                    <h2 className='text-4xl font-semibold mb-4 text-center'>Featured Jobs</h2>
                    <p className='text-gray-600 text-center'>Explore thousands of job opportunities with all the information you need. It's your future.</p>
                    <div className='grid gap-6 lg:grid-cols-2 sm:grid-cols-1 mt-5'>
                        {
                            allJobs.slice(0, showAll ? 6 : 4).map(job => (
                                <Job key={job.id} job={job} />
                            ))
                        }
                    </div>
                    <div className='text-center my-7'>
                        {
                            !showAll && (
                                <Link className='btn' onClick={handleShowAll}>See All Jobs</Link>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;