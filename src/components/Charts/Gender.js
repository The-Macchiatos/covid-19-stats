import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/summary.json';
import { ResponsivePie } from '@nivo/pie'
import useCurrentScreen from '../../utils/getResizedScreen';

const legends = {
  anchor: 'bottom',
  direction: 'row',
  translateY: 20,
  itemWidth: 100,
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
  margin: { top: 20, right: 0, bottom: 120, left: 0 },
  legends: [{...legends,  translateY: 35}]
};

const Gender = () => {
  let isMobile = useCurrentScreen();
  const pieProps = isMobile ? mobileProps : commonProps;

    const gender = [{
            "id": "male",
            "label": "Male",
            "value": data.gender.male,
            "color": "hsl(259, 70%, 50%)"
        },
        {
            "id": "female",
            "label": "Female",
            "value": data.gender.female,
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
                    Cases by gender
                </Text>
                <ResponsivePie
                    data={gender}
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
                                id: 'male'
                            }
                        },
                        {
                            match: {
                                id: 'female'
                            }
                        }
                    ]}
                    {...pieProps}
                />
            </Box>
        </>
    );
};

export default Gender;
