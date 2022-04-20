import React from 'react';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Form } from 'react-bootstrap';
const InputMessage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center '>
      <SentimentVerySatisfiedIcon
        id='emojiMessageIcon'
        sx={{ color: '#A9C97D' }}
      />
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
