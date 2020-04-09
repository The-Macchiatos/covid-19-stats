import React from 'react';
import {Text, Box} from './base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#252A41',
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
