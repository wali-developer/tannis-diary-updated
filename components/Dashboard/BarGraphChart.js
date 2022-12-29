import React, { useState, useMemo } from 'react';
import CallendarGreenIcon from '../SVGs/DashboardIcons/CallenderGreenIcon'
import
{
    ResponsiveContainer,
    AreaChart,
    BarChart,
    Bar,
    // CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area
} from "recharts";

const data = [
    {
        month: "Jan",
        Arm1: { val: 4000, desc: "descktop..." },
        Arm2: { val: 2400, desc: "b desc" },

    },
    {
        month: "Feb",
        Arm1: { val: 3000, desc: "descktop..." },
        Arm2: { val: 1398, desc: "b desc" },

    },
    {
        month: "Mar",
        Arm1: { val: 2000, desc: "descktop..." },
        Arm2: { val: 9800, desc: "b desc" },
    },
    {
        month: "Apr",
        Arm1: { val: 2780, desc: "descktop..." },
        Arm2: { val: 3900, desc: "b desc" },

    },
    {
        month: "May",
        Arm1: { val: 1890, desc: "descktop..." },
        Arm2: { val: 4800, desc: "b desc" },

    },
    {
        month: "June",
        Arm1: { val: 4000, desc: "descktop..." },
        Arm2: { val: 2400, desc: "b desc" },

    },
    {
        month: "June",
        Arm1: { val: 4000, desc: "descktop..." },
        Arm2: { val: 2400, desc: "b desc" },

    },
    {
        month: "July",
        Arm1: { val: 4000, desc: "descktop..." },
        Arm2: { val: 2400, desc: "b desc" },

    },
    {
        month: "Aug",
        Arm1: { val: 4000, desc: "descktop..." },
        Arm2: { val: 2400, desc: "b desc" },

    },
    {
        month: "Sept",
        Arm1: { val: 4000, desc: "descktop..." },
        Arm2: { val: 2400, desc: "b desc" },

    },
    {
        month: "Oct",
        Arm1: { val: 4000, desc: "descktop..." },
        Arm2: { val: 2400, desc: "b desc" },

    },
    {
        month: "Nov",
        Arm1: { val: 4000, desc: "descktop..." },
        Arm2: { val: 2400, desc: "b desc" },

    }, {
        month: "Dec",
        Arm1: { val: 4000, desc: "descktop..." },
        Arm2: { val: 240, desc: "b desc" },

    }
];

const BarGraphChart = () =>
{
    const tabsButtonsData = [
        'Training',
        'Matches',
        'Tournament'
    ]

    const [selectedItem, setselectedItem] = useState(0);
    const [barChartData, setbarChartData] = useState(data);

    useMemo(() =>
    {
        let temp = barChartData.map((item, index) =>
        {
            return {
                ...item,
                Arm1: { val: Math.ceil(Math.random() * Math.random() * 8000), desc: "descktop..." },
                Arm2: { val: Math.ceil(Math.random() * Math.random() * 5000), desc: "b desc" },
            }
        })
        setbarChartData(temp)
    }, [selectedItem])

    return (
        <div className='bg-white rounded-[10px] pt-[20px]  pb-[12px] mt-[27px] pl-[20px] pr-[10px]'>
            {/* Header start */ }
            <div className='flex flex-row flex-wrap justify-between items-center space-y-3 sm:space-y-0 '>
                {/* Left start */ }
                <div className='flex flex-row '>
                    { tabsButtonsData?.map((item, index) =>
                    {
                        return (
                            <div
                                key={ index + '' }
                                className='h-[43px] w-[116px] rounded-[10px] flex items-center justify-center cursor-pointer
                                           transition-colors duration-500'
                                style={ {
                                    'backgroundColor': selectedItem == index ? '#B3DD07' : 'white',
                                    'color': selectedItem == index ? 'white' : 'rgba(0,0,0,0.5)'
                                } }
                                onClick={ () => setselectedItem(index) }
                            >
                                <h1 className='text-sm font-semibold'>{ item }</h1>
                            </div>
                        )
                    }) }
                </div>
                {/* Left end */ }
                {/* Right start */ }
                <div className='flex flex-row items-center space-x-[11px]'>
                    <div className='w-[92px] h-[42px] rounded-[6px] border border-rgba(0, 0, 0, 0.2) cursor-pointer 
                                    px-[10px] flex flex-row items-center space-x-[14px]'>
                        <h1 className='text-xs'>12/06</h1>
                        <CallendarGreenIcon />
                    </div>
                    <h1 className='text-[#1E1E1E] text-[12px]'>To</h1>
                    <div className='w-[92px] h-[42px] rounded-[6px] border border-rgba(0, 0, 0, 0.2) cursor-pointer 
                                    px-[10px] flex flex-row items-center space-x-[14px]'>
                        <h1 className='text-xs'>12/06</h1>
                        <CallendarGreenIcon />
                    </div>
                </div>
                {/* Right end */ }
            </div>
            {/* Header end */ }

            {/* Chart start */ }
            <ResponsiveContainer
                width="100%"
                height={ 300 }
            >
                <BarChart
                    width={ 600 }
                    height={ 300 }
                    data={ barChartData }
                    stackOffset='expand'
                    margin={ { top: 40, right: 30, left: 0, bottom: 0 } }
                    barCategoryGap={ 16 }

                >
                    <XAxis dataKey="month" axisLine={ false } />
                    <YAxis axisLine={ false } />
                    <Tooltip

                        cursor={ false }
                    />
                    <Bar
                        dataKey="Arm1.val"
                        stackId="1"
                        stroke={ false }
                        fill="#B3DD07"
                        id="aarea"
                        name="Arm1"
                        radius={ [0, 0, 10, 10] }
                        barSize={ 11 }
                    />
                    <Bar

                        dataKey="Arm2.val"
                        stackId="1"
                        stroke={ false }
                        fill="rgba(179, 221, 7, 0.25)"
                        id="barea"
                        name="Arm2"
                        cursor={ "pointer" }
                        onClick={ (data, i) => { } }
                        radius={ [10, 10, 0, 0] }
                        barSize={ 11 }
                    />

                </BarChart>

            </ResponsiveContainer>
            {/* Chart end */ }
        </div>
    );
}

export default BarGraphChart;
