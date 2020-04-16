import React from 'react';
import {Box, Heading} from '../base';
import data from '../../data/summary.json';

import Chart from 'react-apexcharts'

const Origin = () => {
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
        labels: ['local', 'imported'],
        colors: ['#9e86ff', '#007ae1', '#1ca8dd', "#db86ff"],
    };

    const series = [data.source['local'], data.source['imported']];


    return (
        <>
            <Box>
                <Heading
                    sx={{pb: 3}}
                    as={'h2'}
                    fontSize={[2, 2, 3, 4]}
                    textAlign={'center'}
                    fontWeight='500'
                    color='white'>
                    Cases by origin
                </Heading>
                <Chart options={options} type="donut" series={series}/>

            </Box>
        </>
    );
};

export default Origin;
