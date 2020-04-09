import React, {useEffect} from 'react';
import {Flex} from './components/base';
import data from './data/stats.json';
import MainContainer from './components/MainContainer';
import CardBox from './components/CoronaCards';
import AllCases from './components/Charts/AllCases';
import NewCases from './components/Charts/NewCases';
import Gender from "./components/Charts/Gender";
import Age from "./components/Charts/Age";
import Origin from "./components/Charts/Origin";

function App() {

  const active = data[data.length - 1]['active']['total'];
  const recovered = data[data.length - 1]['recovered'];
  const deceased = data[data.length - 1]['death'];
  const total = active + recovered + deceased;

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
      cases: total,
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
      <NewCases/>
      <Gender/>
      <Age/>
      <Origin/>
    </>

  );
}

export default App;
