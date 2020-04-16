import React from 'react';
import {Heading, Box} from '../base';
import data from '../../data/stats.json';
import {styles} from "./styles";
import Chart from 'react-apexcharts'
import getDatesList from '../../utils/getDatesList';

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
  colors:['#9e86ff', '#007ae1', '#db86ff', '#1ca8dd' ],
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
    categories: getDatesList()
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
    data: data.map(d => d.death)
  },
  {
    name: 'Recovered',
    data: data.map(d => d.recovered)
  },
  {
    name: 'Overseas Treatment',
    data: data.map(d => d.overseas)
  },
  {
    name: 'Active',
    data: data.map(d => d.active)
  },
 ];

const MainContainer = () => {
  /*const [groupMode, setGroupMode] = useState('stacked');

  const toggle = () => {

    setGroupMode(groupMode === 'grouped' ? 'stacked' : 'grouped');
    console.log('happening');
  };*/


  return (
    <Box __css={styles}>
      <Heading
        as={'h2'}
        fontSize={[2, 2, 3, 4]}
        mt={40}
        textAlign={'center'}
        fontWeight='500'
        color='white'>
        All Cases

      </Heading>
     {/* <Button onClick={toggle}><FontAwesomeIcon size="1x" icon="chart-bar"/></Button>*/}

      <Box p="2">
        <Chart options={options} series={series} type="bar" height={320} />
      </Box>
    </Box>
  );
};

export default MainContainer;
