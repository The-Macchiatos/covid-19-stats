import React from 'react';
import {Text, Box} from './base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flex from "./base/Flex";
import Image from "./base/Image";

const styles = {
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#003e50',
  overflow: 'hidden',
  borderRadius: '8px',
  ':hover': {
    backgroundColor: 'rgb(51,	58,	86)',
    cursor: 'pointer'
  }
};

const CardBox = ({text, cases, cases_prev, ...props}) => {
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
            color="success"
            py={2}
        >
            <FontAwesomeIcon icon="caret-up"/> {cases - cases_prev}
        </Text>
    </Box>
  );
};

export default CardBox;
