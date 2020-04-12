import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/stats.json';
import {ResponsiveBar} from '@nivo/bar';
import useCurrentScreen from '../../utils/getResizedScreen';
import moment from 'moment';
import {defs, styles} from "./styles";

const vitals = data.map(d => {
  return {
    Recovered: d.recovered_new,
    Death: d.death_new,
    Cases: d.new,
    Date: moment(d.date, 'DD-MM-YYYY').format('MMM D')
  };
});

const keys = ['Cases', 'Death', 'Recovered'];
const commonProps = {
  margin: {top: 0, right: 80, bottom: 60, left: 80},
  data: vitals,
  indexBy: 'Date',
  keys,
  enableGridY: false,
  labelSkipWidth: 16,
  labelSkipHeight: 16,
  enableLabel: false,
  axisBottom: {
    tickRotation: -45
  }

};

const mobileProps = {
  ...commonProps,
  margin: {top: 3, right: -10, bottom: 90, left: 30},
  axisBottom: {
    tickRotation: -90
  }
};

const theme = {
  axis: {
    fontSize: '14px',
    tickColor: '#eee',
    ticks: {
      line: {
        stroke: '#555555'
      },
      text: {
        fill: '#ffffff'
      }
    },
    legend: {
      text: {
        fill: '#aaaaaa'
      }
    }
  },
  grid: {
    line: {
      stroke: '#555555'
    }
  }
};

const MainContainer = () => {
  let isMobile = useCurrentScreen();
  const barProps = isMobile ? mobileProps : commonProps;
  return (
    <Box __css={styles}>
      <Text
        fontSize={[2, 2, 3, 4]}
        sx={{
          mt: 40
        }}
        textAlign={'center'}
        fontWeight='500'
        color='white'>
        New Cases
      </Text>
      <Box __css={{height: 250}}>
        <ResponsiveBar
          {...barProps}
          colors={{scheme: 'set2'}}
          theme={theme}
          defs={defs}
          fill={[
            // match using object query
            { match: { id: 'Recovered' }, id: 'gradientA' },
            { match: { id: 'Cases' }, id: 'gradientB' },
            { match: { id: 'Death' }, id: 'gradientC' },
          ]}
        />
      </Box>
    </Box>
  );
};

export default MainContainer;
