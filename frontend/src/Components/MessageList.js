import React from 'react';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

const MessageList = ({ messages, id }) => {
  return (
    <div style={{ padding: '1ch' }}>
      {messages.map(({ fromId, type, content }) =>
        fromId == id ? (
          <SentMessage content={content} />
        ) : (
          <ReceivedMessage content={content} />
        )
      )}
    </div>
  );
};

export default MessageList;
