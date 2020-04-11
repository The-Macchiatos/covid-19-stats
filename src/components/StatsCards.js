import React from 'react';
import {Text, Box} from './base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flex from "./base/Flex";
import Image from "./base/Image";

const styles = {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(0,62,80, 0.5)',
    overflow: 'hidden',
    borderRadius: '8px',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: 'rgba(0,62,80, 0.8)'
    }
};

const CardBox = ({text, cases, cases_prev, ...props}) => {

    const isNegative = cases - cases_prev < 0;
    const isZero = cases - cases_prev === 0;
  return (
    <Box mb={4} key={props.key} __css={styles}>
{/*      <Flex alignItems='center' justifyContent='center'>
        <Image mt='3' height={'3.4rem'} mb='2' alt={`flaticon-${props.logo}`} src={`./icon-${props.logo}.svg`}/>
      </Flex>*/}
      <Text
        fontSize={6}
        color='#FFFFFF'>
        {cases}
      </Text>
      <Text
        fontSize={1}
        fontWeight='400'
        color='#8B97C6'
        letterSpacing={2}>
        {text}
      </Text>

        <Text
            color={isNegative ? 'danger' : 'success'}
            py={2}
        >
            {!isZero && <><FontAwesomeIcon icon={isNegative ? 'caret-down' : 'caret-up' }/> {isNegative ? (0 - (cases - cases_prev)) : (cases -cases_prev)}</>}
            {isZero && <FontAwesomeIcon icon="minus"/>}
        </Text>
    </Box>
  );
};

export default CardBox;
