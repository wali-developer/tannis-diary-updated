import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        uv: 0,
    },
    {
        name: 'Tue',
        uv: 3000,
    },
    {
        name: 'Wed',
        uv: 2000,

    },
    {
        name: 'Thu',
        uv: 2780,

    },
    {
        name: 'Fri',
        uv: 1890,

    },
    {
        name: 'Sat',
        uv: 2390,

    },
    {
        name: 'Sun',
        uv: 3490,

    },
];

const AppDownload = () =>
{

    const [chartdata, setChartdata] = useState(data);

    useEffect(() =>
    {
        let temp = data?.map((item, index) =>
        {
            return { ...item, uv: Math.ceil(Math.random() * 1008) * index + index * 100 }
        })
        setChartdata(temp)
    }, []);

    return (
        <div className='sm:flex-1 h-[318px] bg-white rounded-[10px] py-[11px] pl-[17px] pr-[15px] relative min-w-[300px] '>
            {/* Heading start */ }
            <div className='flex flex-row items-center justify-between'>
                <h1 className='text-black text-base font-semibold'>App downloads</h1>
                <div className=' h-[42px] rounded-[6px] border border-rgba(0, 0, 0, 0.2) cursor-pointer 
                                    px-[10px] flex flex-row items-center space-x-[10px]'>
                    <h1 className='text-xs'>This week</h1>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-3 h-3 mt-1">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>

                </div>
            </div>
            {/* Heading end */ }
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width="100%"
                    height={ 300 }
                    data={ chartdata }
                    margin={ {
                        top: 30,
                        right: 2,
                        bottom: 5,
                        left: 0
                    } }
                >
                    <CartesianGrid />
                    <XAxis dataKey="name" axisLine={ false } />
                    <YAxis axisLine={ false } />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#B3DD07"
                        fill="#B3DD07"
                        strokeWidth={ 2.5 }
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AppDownload;
