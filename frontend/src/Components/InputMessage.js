import {
  Paper,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Box,
  TextField,
} from '@mui/material';

import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Form } from 'react-bootstrap';
const InputMessage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center '>
      <SentimentVerySatisfiedIcon sx={{ color: '#A9C97D' }} />
      <Form.Control
        type='text'
        placeholder='Type something'
        style={{
          borderRadius: '37px',
          width: '20vw',
          backgroundColor: '#f0f0f0',
        }}
      />
      <SendIcon id='InputMessageIcon' />
      <CallIcon id='InputMessageIcon' />
      <VideoCallIcon id='InputMessageIcon' />
    </div>
  );
};

export default InputMessage;
