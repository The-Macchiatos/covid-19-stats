import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/summary.json';
import { ResponsivePie } from '@nivo/pie'


const Origin = () => {
    const origin = [{
            "id": "local",
            "label": "Local",
            "value": data.source.local,
            "color": "hsl(259, 70%, 50%)"
        },
        {
            "id": "imported",
            "label": "Imported",
            "value": data.source.imported,
            "color": "hsl(259, 70%, 50%)"
        }
    ];

    return (
        <>
            <Box __css={{height: 500}}>
                <Text
                    fontSize={[2, 2, 3, 4]}
                    mt={'30'}
                    textAlign={'center'}
                    fontWeight='500'
                    color='white'>
                    Cases by origin
                </Text>
                <ResponsivePie
                    data={origin}
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
                                id: 'local'
                            }
                        },
                        {
                            match: {
                                id: 'imported'
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

export default Origin;
