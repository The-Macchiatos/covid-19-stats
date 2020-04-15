import React, {lazy, Suspense} from 'react';
import Tiles from "./components/layout";
import {cardData} from "./utils/processedData";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCaretUp,
    faCaretDown,
    faMinus,
    faVirus,
} from '@fortawesome/free-solid-svg-icons'

import './style.css';
import Box from "./components/base/Box";
import TotalCard from "./components/TotalCard";
import {shareStyles, styles} from './components/Charts/styles';
import ShareButtons from './components/SocialShareButtons/index';
import Flex from './components/base/Flex';
import Heading from './components/base/Heading';

const MainContainer = lazy(() => import('./components/MainContainer'));
const CardBox = lazy(() => import('./components/StatsCards'));
const AllCases = lazy(() => import('./components/Charts/AllCases'));
const NewCases = lazy(() => import('./components/Charts/NewCases'));
const Gender = lazy(() => import('./components/Charts/Gender'));
const Age = lazy(() => import('./components/Charts/Age'));
const Origin = lazy(() => import('./components/Charts/Origin'));

library.add(faCaretUp, faCaretDown, faMinus, faVirus);


function App() {

  return (
    <Suspense fallback={<h1 style={{margin: '1% 4%'}}>Loading COVID-19 statistics...</h1>}>
      <MainContainer>
          <Tiles columns={[1, 2, 2]} mb={1}>
              <Box>
                  <TotalCard/>
              </Box>
              <Box>
                  <Tiles columns={[1, 2, 2]} mb={4}>
                  {cardData.map((item, key) => (
                      <CardBox
                          key={`cardbox-${key}`}
                          text={item.name}
                          {...item}
                      />))
                  }
                  </Tiles>
              </Box>

          </Tiles>
          <AllCases/>
          <NewCases/>
          <Box __css={styles}>
              <Tiles pt={4} columns={[1, 1, 3]} >
                  <Origin/>
                  <Gender/>
                  <Age/>
              </Tiles>
          </Box>
        <Box>
          <Heading
            as={'h2'}
            fontSize={[2, 2, 3, 4]}
            mt={40}
            textAlign={'center'}
            fontWeight='500'
            color='white'>
            Share it
          </Heading>
          <Flex justifyContent='center' mt={2} pb={1} pt={1} textAlign="center" __css={shareStyles}>
            <Tiles columns={[3, 3, 3]} mb={1}>
              <ShareButtons/>
            </Tiles>
          </Flex>
        </Box>

      </MainContainer>


    </Suspense>

  );
}

export default App;
