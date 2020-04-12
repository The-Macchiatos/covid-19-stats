import React, {useState} from 'react';
import {Text, Box} from '../base';
import data from '../../data/stats.json';
import {ResponsiveBar} from '@nivo/bar';
import useCurrentScreen from '../../utils/getResizedScreen';
import moment from 'moment';
import {defs, styles} from "./styles";
import Button from "../base/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const vitals = data.map(d => {
  return {
    Recovered: d.recovered,
    Death: d.death,
    Active: d.active.total,
    Date: moment(d.date, 'DD-MM-YYYY').format('MMM D')
  };
});

const keys = ['Recovered', 'Death', 'Active'];


const legends = {
  dataFrom: 'keys',
  anchor: 'top',
  direction: 'row',
  justify: false,
  translateX: 0,
  translateY: -30,
  itemsSpacing: 0,
  itemWidth: 100,
  itemHeight: 20,
  itemDirection: 'left-to-right',
  itemOpacity: 0.85,
  itemTextColor: '#ffffff',
  symbolSize: 20,
  effects: [
    {
      on: 'hover',
      style: {
        itemOpacity: 1
      }
    }
  ]
};

const commonProps = {
  margin: {top: 60, right: 80, bottom: 60, left: 80},
  padding: 0.5,
  data: vitals,
  indexBy: 'Date',
  keys,
  enableGridY: false,
  labelSkipWidth: 16,
  labelSkipHeight: 16,
  enableLabel: false,
  axisBottom: {
    tickRotation: -45
  },
  legends: [{...legends}],
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

const mobileProps = {
  ...commonProps,
  margin: {top: 30, right: -10, bottom: 90, left: 30},
  axisBottom: {
    tickRotation: -90
  },
  legends: [{
    ...legends,
    anchor: 'top-left',
    symbolSize: 10
  }]
};




const MainContainer = () => {
  const [groupMode, setGroupMode] = useState('stacked');

  const toggle = () => {

    setGroupMode(groupMode === 'grouped' ? 'stacked' : 'grouped');
    console.log('happening');
  };


  let isMobile = useCurrentScreen();
  const barProps = isMobile ? mobileProps : commonProps;



  return (
    <Box __css={styles}>
      <Text
        fontSize={[2, 2, 3, 4]}
        mt={40}
        textAlign={'center'}
        fontWeight='500'
        color='white'>
        All Cases

      </Text>
      <Button onClick={toggle}><FontAwesomeIcon size="1x" icon="chart-bar"/></Button>

      <Box __css={{height: 400}}>
        <ResponsiveBar
          {...barProps}
          colors={{scheme: 'set2'}}
          theme={theme}
          groupMode={groupMode}
          defs={defs}
          fill={[
            // match using object query
            { match: { id: 'Recovered' }, id: 'gradientA' },
            { match: { id: 'Active' }, id: 'gradientB' },
            { match: { id: 'Death' }, id: 'gradientC' },
          ]}
        />
      </Box>
    </Box>
  );
};

export default MainContainer;
