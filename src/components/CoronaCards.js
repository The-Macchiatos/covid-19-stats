import React from 'react';
import {Image, Text, Flex, Box} from './base';

const styles = {
  height: '10rem',
  width: '17rem',
  textAlign: 'center',
  backgroundColor: '#252A41',
  border: '1px solid #DCDEE0',
  overflow: 'hidden',
  borderRadius: '8px',
  ':hover': {
    backgroundColor: 'rgb(51,	58,	86)',
    cursor: 'pointer'
  }
};

const CardBox = ({text, cases, ...props}) => {
  return (
    <Box mb={4} key={props.key} __css={styles}>
      <Flex alignItems='center' justifyContent='center'>
        <Image mt='3' height={'3.4rem'} mb='2' alt={`flaticon-${props.logo}`} src={`./icon-${props.logo}.svg`}/>
      </Flex>
      <Text
        fontSize={5}
        color='#FFFFFF'>
        {cases}
      </Text>
      <Text
        fontSize={3}
        fontWeight='400'
        color='#8B97C6'
        letterSpacing={2}>
        {text}
      </Text>
    </Box>
  );
};

export default CardBox;
