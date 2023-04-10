import React from 'react';
import Banner2 from '../Banner/Banner2';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const marksArray = [
        {
            id: 1,
            name: 'A1',
            mark: 49
        },
        {
            id: 2,
            name: 'A2',
            mark: 58
        },
        {
            id: 3,
            name: 'A3',
            mark: 30
        },
        {
            id: 4,
            name: 'A4',
            mark: 60
        },
        {
            id: 5,
            name: 'A5',
            mark: 50
        },
        {
            id: 6,
            name: 'A6',
            mark: 60
        },
        {
            id: 7,
            name: 'A7',
            mark: 60
        },
        {
            id: 8,
            name: 'A8',
            mark: 60
        }
    ];

    return (
        <div>
            <div className='bg-banner'>
                <Banner2>Statistics</Banner2>
            </div>
            <div className='my-container min-h-[calc(100vh-152px)] md:min-h-[calc(100vh-200px)] lg:min-h-[calc(100vh-248px)] flex items-center'>
                <ResponsiveContainer width='95%' height={300}>
                    <AreaChart
                        data={marksArray}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis type='number' domain={[0, 60]} ticks={[0, 10, 20, 30, 40, 50, 60]} />
                        <Tooltip />
                        <Area dataKey='mark' stroke="#8a60e0"  fill='#f9f9ff' dot={{stroke: '#8a60e0', strokeWidth: 1, r: 4}} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;