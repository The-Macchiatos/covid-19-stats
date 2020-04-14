import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/summary.json';

import Chart from 'react-apexcharts'

const Age = () => {
    const options = {
        chart: {
            type: 'donut'
        },
        dataLabels: {
            enabled: false
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
        labels: ['<20', '21 - 39', '40 - 59', '60+'],
        colors:['#9e86ff', '#007ae1', '#1ca8dd', "#db86ff"],
    };

    const series = [data.age['20'], data.age['21-39'], data.age['40-59'], data.age['60']];


    return (
        <>
            <Box>
                <Text
                    fontSize={[2, 2, 3, 4]}
                    sx={{
                      mt: 40, mb:20
                    }}
                    textAlign={'center'}
                    fontWeight='500'
                    color='white'>
                    Cases by age
                </Text>
                <Chart options={options}  type="donut" series={series}/>

            </Box>
        </>
    );
};

export default Age;
