import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/summary.json';
import { ResponsivePie } from '@nivo/pie'


const Age = () => {
    const age = [{
            "id": "0020",
            "label": "<20",
            "value": data.age['0020'],
            "color": "hsl(259, 70%, 50%)"
        },
        {
            "id": "2139",
            "label": "21 - 39",
            "value": data.age['2139'],
            "color": "hsl(259, 70%, 50%)"
        },
        {
            "id": "4059",
            "label": "40 - 59",
            "value": data.age['4059'],
            "color": "hsl(259, 70%, 50%)"
        },
        {
            "id": "6000",
            "label": "60+",
            "value": data.age['6000'],
            "color": "hsl(259, 70%, 50%)"
        }
    ];

    return (
        <>
            <Text
                fontSize={[2, 2, 3, 4]}
                mt={'30'}
                textAlign={'center'}
                fontWeight='500'
                color='white'>
                Cases by age
            </Text>
            <Box __css={{height: 500}}>
                <ResponsivePie
                    data={age}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
                                id: '0020'
                            }
                        },
                        {
                            match: {
                                id: '2139'
                            }
                        },
                        {
                            match: {
                                id: '4059'
                            }
                        },
                        {
                            match: {
                                id: '6000'
                            }
                        }
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            translateY: 56,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </Box>
        </>
    );
};

export default Age;
