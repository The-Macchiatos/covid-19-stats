import React, {memo} from 'react';
import {Box, Flex, Heading, Text} from './base';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getLastUpdated} from "../utils/processedData";

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
                        fontSize={[3, 3, 4, 4]}
                        color='white'>
                        <FontAwesomeIcon icon="virus" size="1x"/> Covid-19 Mauritius
                        <Text
                            sx={{float: 'right'}}
                            color="white"
                            fontSize={[1, 1, 1, 1]}
                        ><strong>Last updated:</strong> {getLastUpdated()}</Text>
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
