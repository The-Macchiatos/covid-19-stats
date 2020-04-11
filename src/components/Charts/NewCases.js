import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/stats.json';
import {ResponsiveBar} from '@nivo/bar';
import moment from "moment";

const vitals = data.map(d => {
  return {
    Recovered: d.recovered_new,
    Death: d.death_new,
    Cases: d.new,
    Date: moment(d.date, 'DD/MM/YYYY').format('DD/MM')
  };
});

const keys = ['Cases', 'Death', 'Recovered'];
const commonProps = {
  margin: {top: 60, right: 40, bottom: 60, left: 40},
  data: vitals,
  indexBy: 'Date',
  keys,
  enableGridY: false,
  enableLabel: false,
  groupMode: 'grouped',
  labelsTextColor: '#ffffff'

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
      <Box __css={{height: 250}}>
        <ResponsiveBar
          {...commonProps}
          colors={{scheme: 'accent'}}
        />
      </Box>
    </>
  );
};

export default MainContainer;
