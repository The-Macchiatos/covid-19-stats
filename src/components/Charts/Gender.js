import React from 'react';
import {Heading, Box} from '../base';
import data from '../../data/summary.json';

import Chart from 'react-apexcharts'

const Gender = () => {
    const options = {
        chart: {
            type: 'donut'
        },
        dataLabels: {
            enabled: true
        },
        fill: {
            border: false
        },
        stroke: {
            show: false
        },
        legend: {
            position: 'top',
            labels: {
                colors: 'white',
                useSeriesColors: false
            },
        },
        labels: ['Male', 'Female'],
        colors:['#9e86ff', '#007ae1', '#1ca8dd', "#db86ff"],
    };

    const series = [data.gender['male'], data.gender['female']];


    return (
        <>
            <Box>
                <Heading
                    fontSize={[2, 2, 3, 4]}
                    sx={{
                        pb: 3
                    }}
                    as={'h2'}
                    textAlign={'center'}
                    fontWeight='500'
                    color='white'>
                    Cases by gender
                </Heading>
                <Chart options={options}  type="donut" series={series}/>

            </Box>
        </>
    );
};

export default Gender;
