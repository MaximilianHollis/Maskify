import React from 'react';
import { login } from '../Data/Login';
import Login from '../Elements/Login/Login'

function LoginPage() {
  return (
    <>
      <Login {...login} />
    </>
  );
}

export default LoginPage;
