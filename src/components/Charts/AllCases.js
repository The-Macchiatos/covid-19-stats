import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/stats.json';
import {ResponsiveBar} from '@nivo/bar';

const vitals = data.map(d => {
  return {
    Recovered: d.recovered,
    Death: d.death,
    Active: d.active.total,
    Date: d.date
  };
});

const keys = ['Recovered', 'Death', 'Active'];
const commonProps = {
  margin: {top: 60, right: 80, bottom: 60, left: 80},
  data: vitals,
  indexBy: 'Date',
  keys,
  padding: 0.5,
  enableGridY: false,
  labelSkipWidth: 16,
  labelSkipHeight: 16,
  enableLabel: false,
  axisBottom: {
    tickRotation: -45
  }
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
          colors={{scheme: 'set2'}}
        />
      </Box>
    </>
  );
};

export default MainContainer;
