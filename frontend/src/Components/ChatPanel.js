import {
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Paper,
  Divider,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import React from 'react';
import { useLocation } from 'react-router-dom';

import ChatContainer from './ChatContainer';
import InputMessage from './InputMessage';
import MessageList from './MessageList';

const ChatPanel = () => {
  const location = useLocation();
  const { userName, messages, id } = location.state;

  return (
    <Paper style={{ borderRadius: '10px', paddingBottom: '2ch' }}>
      <Card style={{ borderBottom: 'none', borderRadius: '10px 10px 0px 0px' }}>
        <CardHeader
          avatar={<Avatar alt={userName} src='path' />}
          title={userName}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
      </Card>
      <ChatContainer>
        <MessageList messages={messages} id={id} />
      </ChatContainer>
      <Divider
        variant='middle'
        sx={{
          marginLeft: '3ch',
          marginRight: '3ch',
          marginTop: '1ch',
          marginBottom: '2ch',
        }}
      />
      <InputMessage />
    </Paper>
  );
};

export default ChatPanel;
