import React, {useEffect} from 'react';
import MainContainer from './components/MainContainer';
import CardBox from './components/StatsCards';
import AllCases from './components/Charts/AllCases';
import NewCases from './components/Charts/NewCases';
import Gender from "./components/Charts/Gender";
import Age from "./components/Charts/Age";
import Origin from "./components/Charts/Origin";
import Tiles from "./components/layout";
import {cardData} from "./utils/processedData";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCaretUp,
    faCaretDown,
    faMinus,
    faVirus,
    faViruses,
    faHeartbeat,
    faShieldVirus,
    faLungsVirus, faChartBar,
} from '@fortawesome/free-solid-svg-icons'

import './style.css';
import Box from "./components/base/Box";
import TotalCard from "./components/TotalCard";
import {styles} from "./components/Charts/styles";

library.add(faCaretUp, faCaretDown, faMinus, faVirus, faViruses, faHeartbeat, faShieldVirus, faLungsVirus, faChartBar);


function App() {

  return (
    <>
      <MainContainer>
          <Tiles columns={[1, 2, 2]} mb={1}>
              <Box>
                  <TotalCard/>
              </Box>
              <Box>
                  <Tiles columns={[1, 2, 2]} mb={4}>
                  {cardData.map((item, key) => (
                      <CardBox
                          key={key}
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
              <Tiles columns={[1, 1, 3]} >
                  <Origin/>
                  <Gender/>
                  <Age/>
              </Tiles>
          </Box>


      </MainContainer>


    </>

  );
}

export default App;
