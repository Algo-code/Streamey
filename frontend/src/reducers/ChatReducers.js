import {
  USER_CHATS_REQUEST,
  USER_CHATS_SUCCESS,
  USER_CHATS_FAIL,
  CHAT_REQUEST,
  CHAT_SUCCESS,
  CHAT_FAIL,
} from '../constants/ChatConstants';

export const userChatsReducer = (state = { chats: [] }, action) => {
  switch (action.type) {
    case USER_CHATS_REQUEST:
      return { ...state, loading: true };
    case USER_CHATS_SUCCESS:
      return { loading: false, chats: action.payload };
    case USER_CHATS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const chatReducer = (state = { chat: {} }, action) => {
  switch (action.type) {
    case CHAT_REQUEST:
      return { ...state, loading: true };
    case CHAT_SUCCESS:
      return { loading: false, chat: action.payload };
    case CHAT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
