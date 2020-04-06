import React from 'react';
import {Flex, Text, Box, Link} from "./components/base";

function App() {
  return (
      <Flex
          px={2}
          color='white'
          bg='background'
          alignItems='center'>
        <Text p={2} fontWeight='bold'>Rebass</Text>
        <Box mx='auto' />
        <Link variant='nav' href='#!'>
          Profile
        </Link>
      </Flex>
  );
}

export default App;
