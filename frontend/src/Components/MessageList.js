import React from 'react';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

const MessageList = ({ messages, id }) => {
  return (
    <div style={{ padding: '1ch' }}>
      {messages.map(({ fromId, type, content, index }) =>
        fromId == id ? (
          <SentMessage content={content} key={index} />
        ) : (
          <ReceivedMessage content={content} key={index} />
        )
      )}
    </div>
  );
};

export default MessageList;
