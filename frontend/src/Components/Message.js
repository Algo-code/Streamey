import { Avatar, Box, Paper, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { Row } from 'react-bootstrap';

const Message = () => {
  return (
    <>
      <Box
        style={{
          wordWrap: 'breakWord',
          padding: '1ch',
          maxWidth: '40vw',
          borderRadius: '10px',
          display: 'flex',
          float: 'left',
          clear: 'both',
          alignItems: 'center',
          backgroundColor: 'red',
          marginBottom: '1ch',
        }}
      >
        <Typography>Change the world by being yourself.</Typography>
      </Box>

      <Box
        style={{
          wordWrap: 'breakWord',
          padding: '1ch',
          maxWidth: '40vw',
          clear: 'both',
          borderRadius: '10px',
          display: 'flex',
          float: 'right',
          alignItems: 'center',
          backgroundColor: 'aqua',
          marginBottom: '1ch',
        }}
      >
        <Typography>Way to go!</Typography>
      </Box>
    </>
  );
};

export default Message;
