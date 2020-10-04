import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../Data/Home';
import InfoSection from '../Elements/InfoSection/InfoSection'
import Pricing from '../Elements/Pricing/Pricing'

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne}/>
      <Pricing />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
