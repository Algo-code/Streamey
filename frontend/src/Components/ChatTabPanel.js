import { Box, Typography } from '@mui/material';
import React from 'react';

const ChatTabPanel = ({ userName }) => {
  return (
    <div>
      <Box sx={{ p: 3 }}>
        <Typography>{userName}</Typography>
      </Box>
    </div>
  );
};

export default ChatTabPanel;
