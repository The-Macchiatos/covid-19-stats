import React from 'react';
import {Text, Heading, Flex, Box} from './base';

const styles = {
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '10px 5%'
};

const MainContainer = ({children}) => {
  return (
    <Box as='main' __css={styles}>
      <Flex mb={4} pb='1' justifyContent='space-between'>
        <Box>
          {/*<Image mr='1' height={'48px'} alt={`logos`} src={`./icon-logo.svg`}/>*/}
          <Heading
            fontSize={[3, 4, 5, 5]}
            color='white'>
            Covid-19 Mauritius
          </Heading>
          <Text
            fontSize={[1, 2, 2, 2]}
            mt={'20'}
            fontWeight='500'
            color='white'>
            Statistic on the Pandemic
          </Text>
        </Box>
        <Text
          fontSize={[1, 2, 2, 2]}
          mt={'20'}
          fontWeight='500'
          color='white'>
          Updated on: April 11
        </Text>
      </Flex>
      {children}
    </Box>
  );
};

export default MainContainer;
