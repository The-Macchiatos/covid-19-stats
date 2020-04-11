import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/summary.json';
import { ResponsivePie } from '@nivo/pie'
import useCurrentScreen from '../../utils/getResizedScreen';


const legends = {
  anchor: 'bottom',
  direction: 'row',
  translateY: 20,
  itemWidth: 80,
  itemHeight: 18,
  itemTextColor: '#ffffff',
  symbolSize: 18,
  symbolShape: 'circle',
  effects: [
    {
      on: 'hover',
      style: {
        itemOpacity: '#ffffff'
      }
    }
  ]
};

const commonProps = {
  margin: { top: 0, right: 80, bottom: 30, left: 90 },
  legends: [{...legends}]
};

const mobileProps = {
  margin: { top: 20, right: 0, bottom: 120, left: 13 },
  legends: [{...legends,  translateY: 50}]
};

const Age = () => {
  let isMobile = useCurrentScreen();
  const pieProps = isMobile ? mobileProps : commonProps;
    const age = [{
            "id": "<20",
            "label": "<20",
            "value": data.age['20'],
            "color": "hsl(259, 70%, 50%)"
        },
        {
            "id": "21-39",
            "label": "21 - 39",
            "value": data.age['21-39'],
            "color": "hsl(259, 70%, 50%)"
        },
        {
            "id": "40-59",
            "label": "40 - 59",
            "value": data.age['40-59'],
            "color": "hsl(259, 70%, 50%)"
        },
        {
            "id": "60+",
            "label": "60+",
            "value": data.age['60'],
            "color": "hsl(259, 70%, 50%)"
        }
    ];

    return (
        <>
            <Box __css={isMobile ? {height: 305} : {height: 320}}>
                <Text
                    fontSize={[2, 2, 3, 4]}
                    sx={{
                      mt: 40
                    }}
                    textAlign={'center'}
                    fontWeight='500'
                    color='white'>
                    Cases by age
                </Text>
                <ResponsivePie
                    data={age}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'set2' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#ffffff"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    fill={[
                        {
                            match: {
                                id: '20'
                            }
                        },
                        {
                            match: {
                                id: '21-39'
                            }
                        },
                        {
                            match: {
                                id: '40-59'
                            }
                        },
                        {
                            match: {
                                id: '60'
                            }
                        }
                    ]}
                    {...pieProps}
                />
            </Box>
        </>
    );
};

export default Age;
