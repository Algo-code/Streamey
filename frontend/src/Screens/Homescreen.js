import React from 'react';
import { Link } from 'react-router-dom';
const Homescreen = () => {
  return (
    <div>
      <h1>Homescreen</h1>
      <Link to='/Login'>Login</Link>
      <br />
      <Link to='/Signup'>Register</Link>
    </div>
  );
};

export default Homescreen;
