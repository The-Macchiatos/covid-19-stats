import React, {memo} from 'react';
import {Box, Flex, Heading} from './base';
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
                        as="h1"
                        fontSize={[2, 2, 4, 4]}
                        color='white'>
                        <FontAwesomeIcon icon="virus" size="1x"/> Covid-19 Mauritius
                    </Heading>
                    <Heading
                        mb={4}
                        fontSize={[1, 1, 3, 3]}
                        as={'h2'}
                        color='rgba(255,255,255,0.6)'>
                        Latest updates and live statistics
                    </Heading>
                </Box>
            </Flex>
            {children}
        </Box>
    );
};

export default memo(MainContainer);
