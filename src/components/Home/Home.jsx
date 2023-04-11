import React, { useEffect, useState } from 'react';
import Banner1 from '../Banner/Banner1';
import Category from '../Category/Category';

const Home = () => {
    const [categories, setCategories] = useState([]);

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
                <div className='mt-10'>
                    <h2 className='text-4xl font-semibold mb-4 text-center'>Job Category List</h2>
                    <p className='text-gray-600 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 mt-5'>
                        {
                            categories.map(category => (
                                <Category key={category.id} category={category} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;