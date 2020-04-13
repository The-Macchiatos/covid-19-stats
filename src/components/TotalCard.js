import React from 'react';
import {Text, Box} from './base';
import data from '../data/stats.json';
import moment from 'moment';
import {styles} from "./Charts/styles";

import Chart from 'react-apexcharts'
import {getDataForDay} from "../utils/processedData";
import Flex from "./base/Flex";

const options = {
    chart: {
        id: 'all-cases',
        type: 'area',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        },
    },
    colors: ['#007ae1'],
    dataLabels: {
        enabled: false
    },
    grid: {
        borderColor: '#343863',
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['#1ca8dd']
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: 'white'
            }
        }
    },
    xaxis: {
        type: 'datetime',
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#007ae1',
            height: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            show: true,
            style: {
                colors: 'white'
            }
        },
        axisBorder: {
            show: false
        },
        categories: data.map(d => moment(d.date, 'DD-MM-YYYY').format('MMM D'))
    },
    legend: {
        position: 'top',
        labels: {
            colors: 'white',
            useSeriesColors: false
        },
    },
};

const series =  [
    {
        name: 'Total',
        data: data.map(d => d.active.total + d.death + d.recovered)
    }];

const TotalCard = () => {

    const total = getDataForDay(1)['total'];
    const newCases = getDataForDay(1)['newCases'];

    return (
        <Box __css={styles} pb={4}>
            <Flex pb={5}>
                <Text
                    fontSize={[2, 2, 5, 5]}
                    mt={20}
                    ml={40}
                    textAlign="center"
                    fontWeight='500'
                    color='white'>
                    {total}
                    <Text
                        fontSize={1}
                        fontWeight='400'
                        color='#8B97C6'
                        letterSpacing={2}>
                        Total Confirm Cases
                    </Text>
                </Text>
                <Text
                    fontSize={[2, 2, 5, 5]}
                    mt={20}
                    ml={40}
                    fontWeight='500'
                    textAlign="center"
                    color='white'>
                    {newCases}
                    <Text
                        fontSize={1}
                        fontWeight='400'
                        color='#8B97C6'
                        letterSpacing={2}>
                        New Cases Today
                    </Text>
                </Text>
                <Text
                    fontSize={[2, 2, 5, 5]}
                    mt={20}
                    ml={40}
                    fontWeight='500'
                    textAlign="center"
                    color='white'>
                    {Number(total / 12650000 * 100).toFixed(4)}%
                    <Text
                        fontSize={1}
                        fontWeight='400'
                        color='#8B97C6'
                        letterSpacing={2}>
                        Population Infected
                    </Text>
                </Text>

            </Flex>


            <Box>
                <Chart options={options} series={series} type="area" height={242} />
            </Box>
        </Box>
    );
};

export default TotalCard;
