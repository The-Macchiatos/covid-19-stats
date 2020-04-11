import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/stats.json';
import {ResponsiveBar} from '@nivo/bar';
import moment from "moment";

const vitals = data.map(d => {
  return {
    Recovered: d.recovered,
    Death: d.death,
    Active: d.active.total,
    Date:  moment(d.date, 'DD/MM/YYYY').format('DD/MM')
  };
});

const keys = ['Death', 'Recovered', 'Active'];
const commonProps = {
  margin: {top: 60, right: 40, bottom: 60, left: 40},
  data: vitals,
  indexBy: 'Date',
  keys,
  enableGridY: false,
  enableLabel: false,

};

const MainContainer = () => {
  return (
    <>
      <Text
        fontSize={[2, 2, 3, 4]}
        mt={'30'}
        textAlign={'center'}
        fontWeight='500'
        color='white'>
        All Cases
      </Text>
      <Box __css={{height: 400}}>
        <ResponsiveBar
          {...commonProps}
          colors={{scheme: 'accent'}}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'top',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: -42,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }]
          }
        />
      </Box>
    </>
  );
};

export default MainContainer;
