import React, {useState} from 'react';
import {Text, Box} from '../base';
import data from '../../data/stats.json';
import {ResponsiveBar} from '@nivo/bar';
import useCurrentScreen from '../../utils/getResizedScreen';
import moment from 'moment';
import {defs, styles} from "./styles";
import Button from "../base/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Chart from 'react-apexcharts'

const options = {
  chart: {
    id: 'all-cases',
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    },
  },
  colors:['#9e86ff', '#007ae1', '#1ca8dd'],
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
    colors: ['transparent']
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
    name: 'Death',
    data: data.map(d => d.death_new)
  },
  {
    name: 'Recovered',
    data: data.map(d => d.recovered_new)
  },
  {
    name: 'Cases',
    data: data.map(d => d.new)
  }];

const MainContainer = () => {
  const [groupMode, setGroupMode] = useState('stacked');

  const toggle = () => {

    setGroupMode(groupMode === 'grouped' ? 'stacked' : 'grouped');
    console.log('happening');
  };


  return (
      <Box __css={styles}>
        <Text
            fontSize={[2, 2, 3, 4]}
            mt={40}
            textAlign={'center'}
            fontWeight='500'
            color='white'>
          New Cases

        </Text>
        {/* <Button onClick={toggle}><FontAwesomeIcon size="1x" icon="chart-bar"/></Button>*/}

        <Box p="2">
          <Chart options={options} series={series} type="bar" height={320} />
        </Box>
      </Box>
  );
};

export default MainContainer;
