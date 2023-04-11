import React from 'react';

const Category = ({ category }) => {
    const { name, jobs, logo } = category;

    return (
        <div className='bg-purple-50 p-7 rounded-md'>
            {/* <div className='bg-indigo-50 p-3 rounded-md mb-4 w-fit'>
                <img src={logo} alt="" />
            </div>
            <h3 className='text-gray-800 text-xl font-semibold mb-2'>{name}</h3>
            <p className='text-gray-500 text-sm'>{jobs}</p> */}
        </div>
    );
};

export default Category;