import {
  USER_CHATS_REQUEST,
  USER_CHATS_SUCCESS,
  USER_CHATS_FAIL,
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
