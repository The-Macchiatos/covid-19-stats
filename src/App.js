import React from 'react';
import {Flex} from './components/base';
import { Bar } from '@nivo/bar'
import data from './data/stats.json';

function App() {

    const vitals = data.map(d => {
       return {
           Recovered: d.recovered,
           Death: d.death,
           Active: d.active.total,
           Date: d.date
       }
    });

    console.log(vitals);

    const keys = ['Death', 'Recovered', 'Active'];
    const commonProps = {
        width: 1000,
        height: 500,
        margin: {top: 60, right: 80, bottom: 60, left: 80},
        data: vitals,
        indexBy: 'Date',
        keys,
        padding: 0.5,
        enableGridY: false,
        labelTextColor: 'inherit:darker(1.4)',
        labelSkipWidth: 16,
        labelSkipHeight: 16,
        enableLabel: false,
        axisBottom: {
            tickRotation: -45
        }
    };


    return (
        <Flex
            px={2}
            color="black"
            bg="white"
            alignItems="center">

            <Bar
                {...commonProps}
                colors={{ scheme: 'set1' }}
            />

        </Flex>

    );
}

export default App;
