import {
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Paper,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import React from 'react';
import { useLocation } from 'react-router-dom';

import ChatContainer from './ChatContainer';
import InputMessage from './InputMessage';
import MessageList from './MessageList';

const ChatPanel = () => {
  const location = useLocation();
  const { userName } = location.state;
  return (
    <Paper>
      <Card fullWidth style={{ borderBottom: 'none' }}>
        <CardHeader
          fullWidth
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
        <MessageList />
      </ChatContainer>

      <InputMessage />
    </Paper>
  );
};

export default ChatPanel;
