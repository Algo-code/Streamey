import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <CircularProgress
      style={{
        color: '#A9C97D',
        width: '2rem',
        height: '2rem',
        margin: 'auto',
        display: 'block',
      }}
    />
  );
};

export default Loader;
