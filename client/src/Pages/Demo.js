import React from 'react';
import { demo } from '../Data/Demo';
import Demo from '../Elements/Demo/Demo'

function DemoPage() {
  return (
    <>
     <Demo {...demo}/>
    </>
  );
}

export default DemoPage;
