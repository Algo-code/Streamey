import {
  TextField,
  Paper,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const InputMessage = () => {
  return (
    <Paper>
      <Box sx={{ display: 'flex' }}>
        <AddIcon
          sx={{ width: '5%', color: 'action.active', ml: 1, mr: 1, my: 1.5 }}
        />
        <TextField
          sx={{ width: '85%', float: 'center' }}
          multiline
          maxRows={4}
          id='input-with-sx'
          placeholder='Type here...'
        />
        <SendIcon
          sx={{ width: '5%', color: 'action.active', mr: 1, ml: 1, my: 1.5 }}
        />
      </Box>
    </Paper>
  );
};

export default InputMessage;
