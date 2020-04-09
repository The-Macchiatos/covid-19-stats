import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/stats.json';
import {ResponsiveBar} from '@nivo/bar';

const vitals = data.map(d => {
  return {
    Recovered: d.recovered_new,
    Death: d.death_new,
    Cases: d.new,
    Date: d.date
  };
});

const keys = ['Cases'];
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
  },
  groupMode: 'grouped'

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
        New Cases
      </Text>
      <Box __css={{height: 500}}>
        <ResponsiveBar
          {...commonProps}
          colors={{scheme: 'set2'}}
        />
      </Box>
    </>
  );
};

export default MainContainer;
