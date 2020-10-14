import React from 'react';
import { register } from '../Data/Register';
import Register from '../Elements/Login/Register'

function Registration() {
  return (
    <>
      <Register {...register} />
    </>
  );
}

export default Registration;
