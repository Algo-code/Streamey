import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificChat } from '../actions/ChatActions';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

const MessageList = ({ messages, chatId }) => {
  const specificChat = useSelector((state) => state.specificChat);
  const { loading: loadingChat, error: errorChat, chat } = specificChat;

  const dispatch = useDispatch();
  const id = localStorage.getItem('id');

  useEffect(() => {
    dispatch(getSpecificChat(id, chatId));
  }, [dispatch, id, chatId]);

  return (
    <div style={{ padding: '1ch' }}>
      {messages.map(({ sentBy, type, message, index, _id }) =>
        sentBy === id ? (
          <SentMessage content={message} key={_id} />
        ) : (
          <ReceivedMessage content={message} key={_id} />
        )
      )}
    </div>
  );
};

export default MessageList;
