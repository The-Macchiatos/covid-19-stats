import React from 'react';
import {Flex} from './components/base';
import { Bar } from '@nivo/bar';

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

    const calendar = data.map((d, i) => {
        return {
            Date: d.date,
            Cases: d.new,
            Death: d.death_new,
            Recovered: d.recovered_new
        }
    });

    const commonProps = {
        width: 1000,
        height: 500,
        margin: {top: 60, right: 80, bottom: 60, left: 80},
        indexBy: 'Date',
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
                keys={ ['Death', 'Recovered', 'Active']}
                colors={{ scheme: 'set1' }}
                data={vitals}
            />

            <Bar
                {...commonProps}
                keys={['Cases', 'Recovered', 'Death']}
                colors={{ scheme: 'set1' }}
                data={calendar}
                groupMode={'grouped'}
            />



        </Flex>

    );
}

export default App;
