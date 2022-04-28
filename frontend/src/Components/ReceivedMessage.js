import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const ReceivedMessage = ({ content }) => {
  const [read, setRead] = useState('hidden');
  const handleVisibility = (e) => {
    if (read === 'hidden') {
      setRead('visible');
    } else {
      setRead('hidden');
    }
  };

  return (
    <div
      className='d-flex flex-row'
      style={{
        marginBottom: '1ch',

        alignItems: 'center',
      }}
    >
      <Box
        style={{
          maxWidth: '50ch',
        }}
      >
        <Typography
          style={{
            backgroundColor: '#f0f0f0',
            wordWrap: 'breakWord',
            padding: '1ch',
            borderRadius: '0px 10px 10px 10px',
            textAlign: 'left',
          }}
          onClick={handleVisibility}
        >
          {content}
        </Typography>
        <div
          className='d-flex flex-row justify-content-between'
          style={{ width: 'inherit', visibility: read }}
        >
          <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}>
            12:32pm
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default ReceivedMessage;
