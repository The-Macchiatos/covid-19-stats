import React from 'react';
import {Text, Box} from '../base';
import data from '../../data/summary.json';
import { ResponsivePie } from '@nivo/pie'
import useCurrentScreen from '../../utils/getResizedScreen';

const legends = {
  anchor: 'bottom',
  direction: 'row',
  translateY: 25,
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
  radialLabelsLinkHorizontalLength: 24,
  margin: { top: 0, right: 80, bottom: 30, left: 90 },
  legends: [{...legends}]
};

const mobileProps = {
  radialLabelsLinkHorizontalLength: 14,
  margin: { top: 20, right: 0, bottom: 120, left: 13 },
  legends: [{...legends,  translateY: 35}]
};

const Origin = () => {
  let isMobile = useCurrentScreen();
  const pieProps = isMobile ? mobileProps : commonProps;

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
            <Box __css={isMobile ? {height: 305} : {height: 320}}>
                <Text
                    fontSize={[2, 2, 3, 4]}
                    sx={{
                      mt: 40
                    }}
                    textAlign={'center'}
                    fontWeight='500'
                    color='white'>
                    Cases by origin
                </Text>
                <ResponsivePie
                    data={origin}
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
                    {...pieProps}
                />
            </Box>
        </>
    );
};

export default Origin;
