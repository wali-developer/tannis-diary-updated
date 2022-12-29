import React from 'react';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 200 },
];
const COLORS = ['#3B82F6', '#50119C', '#FFA600', '#B3DD07', '#000000'];


const TotalMembers = () =>
{
    return (
        <div className='sm:flex-1 h-[318px] bg-white  rounded-[10px] pt-[19px] pb-[15px] px-[13px]'>
            {/* Heading start */ }
            <div>
                <h1 className='text-[#A0A0A3] font-normal text-sm'>Total members</h1>
                <h1 className='text-[#1E1E1E] font-bold text-[24px]'>21,500</h1>
            </div>
            {/* Heading end */ }
            <ResponsiveContainer width="80%" height="90%">
                <PieChart width={ 500 } height={ 200 }>
                    <Pie
                        data={ data }
                        cx={ 150 }
                        cy={ 80 }
                        innerRadius={ 50 }
                        outerRadius={ 80 }
                        fill="#8884d8"
                        paddingAngle={ 0 }
                        dataKey="value"

                    >
                        { data.map((entry, index) => (
                            <Cell key={ `cell-${index}` } fill={ COLORS[index % COLORS.length] } />
                        )) }
                    </Pie>

                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TotalMembers;
