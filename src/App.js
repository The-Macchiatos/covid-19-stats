import React, {useEffect} from 'react';
import {Flex} from './components/base';
import data from './data/stats.json';
import MainContainer from './components/MainContainer';
import CardBox from './components/CoronaCards';
import AllCases from './components/Charts/AllCases';

function App() {
  const cardData = [
    {
      name: 'Active Cases',
      cases: data[data.length - 1]['active']['total'],
      logo: 'active'
    },
    {
      name: 'Recovered',
      cases: data[data.length - 1]['recovered'],
      logo: 'recovered'
    },
    {
      name: 'Deceased',
      cases: data[data.length - 1]['death'],
      logo: 'deceased'
    },
    {
      name: 'Total',
      cases: data[data.length - 1]['total'],
      logo: 'people'
    }
  ];

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.backgroundColor = '#1E202A';
  });

  return (
    <>
      <MainContainer>
        <Flex mb={4} justifyContent={'space-between'} flexWrap='wrap'>
          {cardData.map((item, key) => (
            <CardBox
              key={key}
              text={item.name}
              {...item}
            />))
          }
        </Flex>
      </MainContainer>
      <AllCases/>
    </>

  );
}

export default App;
