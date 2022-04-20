import { Box, Typography } from '@mui/material';
import React from 'react';

const ReceivedMessage = ({ content }) => {
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
          }}
        >
          {content}
        </Typography>
        <div
          className='d-flex flex-row justify-content-between'
          style={{ width: 'inherit' }}
        >
          <Typography>12:32pm</Typography>
        </div>
      </Box>
    </div>
  );
};

export default ReceivedMessage;
