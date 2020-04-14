import React from 'react';
import {Heading, Flex, Box} from './base';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const styles = {
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '10px 5%'
};

const MainContainer = ({children}) => {
  return (
    <Box as='main' __css={styles}>
      <Flex mb={2} pb='1' justifyContent='space-between'>
        <Box __css={{width: '100%'}}>

          <Heading
              mb={4}
            fontSize={[2, 2, 4, 4]}
            color='white'>
            <FontAwesomeIcon icon="virus" size="1x"/> Covid-19 Mauritius
          </Heading>
        </Box>
      </Flex>
      {children}
    </Box>
  );
};

export default MainContainer;
