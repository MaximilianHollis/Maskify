import React from 'react';
import { login } from '../Data/Login';
import Login from '../Elements/Login/Login'

function Home() {
  return (
    <>
     <Login {...login}/>
    </>
  );
}

export default Home;
