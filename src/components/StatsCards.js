import React from 'react';
import {Text, Box} from './base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flex from "./base/Flex";
import Image from "./base/Image";
import {ResponsivePie} from "@nivo/pie";
import data from "../data/summary";

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
    const data = [
        {
            "id": "highlight",
            "label": "highlight",
            "value": Number(percentage || 0).toFixed(2)
        },
        {
            "id": "rest",
            "label": "rest",
            "value": Number(100 - percentage || 0).toFixed(2)
        }
    ];

  return (
    <Box mb={1} key={props.key} __css={styles}>
{/*      <Flex alignItems='center' justifyContent='center'>
        <Image mt='3' height={'3.4rem'} mb='2' alt={`flaticon-${props.logo}`} src={`./icon-${props.logo}.svg`}/>
      </Flex>*/}
      <Box width={100} height={100}>
          <ResponsivePie
              data={data}
              innerRadius={0.8}
              padAngle={0.7}
              cornerRadius={3}
              enableRadialLabels={false}
              enableSlicesLabels={false}
              colors={{ scheme: 'accent' }}
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
                          id: 'highlight'
                      }
                  }
              ]}
          />
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
            <Text
                color={'white'}
                p={2}
            >
                {percentage && `${Number(percentage).toFixed(2)} %` }
            </Text>
        </Flex>



    </Box>
  );
};

export default CardBox;
