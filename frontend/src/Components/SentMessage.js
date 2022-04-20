import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const SentMessage = ({ content }) => {
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
        >
          {content}
        </Typography>
        <div
          className='d-flex flex-row-reverse justify-content-between'
          style={{ width: 'inherit', visibility: 'hidden' }}
        >
          <Typography>12:32pm</Typography>
          <Typography>Seen</Typography>
        </div>
      </Box>
    </div>
  );
};

export default SentMessage;
