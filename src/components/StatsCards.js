import React from 'react';
import {Text, Box} from './base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flex from "./base/Flex";
import Chart from 'react-apexcharts'

const styles = {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(31,41,51, 0.5)',
    overflow: 'hidden',
    borderRadius: '8px',
    ':hover': {
        backgroundColor: 'rgba(31,41,51, 0.8)'
    }
};

const CardBox = ({text, cases, cases_prev, percentage, ...props}) => {

    const isNegative = cases - cases_prev < 0;
    const isZero = cases - cases_prev === 0;
    const series = [Number(percentage || 0).toFixed(2)];

    const options = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: ["#1ca8dd"],
                stops: [0, 100]
            }
        },
        colors: ["#9e86ff"],
        stroke: {
            lineCap: "round"
        },
        plotOptions: {
            radialBar: {
                hollow: {
                  margin: 15,
                    size: "60%"
                },
                track: {
                    background: '#2c3b47',
                },
                dataLabels: {
                    name: {
                        show: true,
                        fontSize: "20px"
                    },
                    value: {
                        show: true,
                        color: '#fff',
                        fontSize: "11px"
                    }
                }
            }
        },
        labels: [cases]
    };

  return (
    <Box mb={1} key={props.key} __css={styles}>
      <Box>
          <Chart options={options} series={series} type="radialBar" height={150} />
      </Box>

      <Text
        fontSize={1}
        fontWeight='400'
        color='#8B97C6'
        letterSpacing={2}>
        {text}
      </Text>

        <Flex
            justifyContent={'center'}
        >
            <Text
                color={isNegative ? 'danger' : 'success'}
                p={2}
            >
                {!isZero && <><FontAwesomeIcon icon={isNegative ? 'caret-down' : 'caret-up' }/> {isNegative ? (0 - (cases - cases_prev)) : (cases -cases_prev)}</>}
                {isZero && <FontAwesomeIcon icon="minus"/>}
            </Text>
        </Flex>

    </Box>
  );
};

export default CardBox;
