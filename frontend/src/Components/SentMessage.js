import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const SentMessage = ({ content }) => {
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
      className='d-flex flex-row-reverse'
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
            backgroundColor: '#A9C97D',
            wordWrap: 'breakWord',
            padding: '1ch',

            borderRadius: '10px 0px 10px 10px',
          }}
          onClick={handleVisibility}
        >
          {content}
        </Typography>
        <div
          className='d-flex flex-row-reverse justify-content-between'
          style={{
            width: 'inherit',
            visibility: read,
            fontSize: '3px',
            transition: '3s',
          }}
        >
          <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}>
            12:32pm
          </Typography>
          <Typography
            style={{ fontSize: '12px', color: '#A9C97D', fontWeight: 'bold' }}
          >
            Seen
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default SentMessage;
