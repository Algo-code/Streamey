import React from 'react';
import { css } from '@emotion/css';
import ScrollToBottom from 'react-scroll-to-bottom';

const ROOT_CSS = css({
  height: '40vh',
  width: '100%',
});
const ChatContainer = ({ children }) => {
  return <ScrollToBottom className={ROOT_CSS}>{children}</ScrollToBottom>;
};

export default ChatContainer;
