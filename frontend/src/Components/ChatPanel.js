import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Paper,
  Divider,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ChatContainer from './ChatContainer';
import InputMessage from './InputMessage';
import MessageList from './MessageList';
import { useDispatch, useSelector } from 'react-redux';
import { getUserChats } from '../actions/ChatActions';

const ChatPanel = () => {
  const location = useLocation();
  const { username, _id, profileImageUrl } = location.state;

  const userChats = useSelector((state) => state.userChats);
  const { loading: loadingChats, error: errorChats, chats } = userChats;
  const chatId = [];

  const dispatch = useDispatch();
  const id = localStorage.getItem('id');

  useEffect(() => {
    dispatch(getUserChats(id));
  }, [dispatch, id]);
  chats.chats.forEach((element) => {
    chatId.push(element._id);
  });
  const messages = [
    { fromId: '6', type: 'text', content: 'hello this is Natasha', time: '' },
    { fromId: '2', type: 'text', content: 'hie', time: '' },

    { fromId: '6', type: 'text', content: 'How are you?', time: '' },

    { fromId: '2', type: 'text', content: 'fine', time: '' },

    {
      fromId: '6',
      type: 'text',
      content: 'SON Formatter and JSON Validator',
      time: '',
    },
    { fromId: '1', type: 'text', content: 'Just wandering…', time: '' },
    {
      fromId: '6',
      type: 'text',
      content: 'ok lets make this happen',
      time: '',
    },
  ];
  return (
    <Paper style={{ borderRadius: '10px', paddingBottom: '2ch' }}>
      <Card style={{ borderBottom: 'none', borderRadius: '10px 10px 0px 0px' }}>
        <CardHeader
          avatar={<Avatar alt={username.toUpperCase()} src={profileImageUrl} />}
          title={username}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
      </Card>
      <ChatContainer>
        <MessageList messages={messages} _id={_id} chatId={chatId} />
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
