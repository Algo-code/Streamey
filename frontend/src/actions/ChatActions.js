import axios from 'axios';
import {
  USER_CHATS_FAIL,
  USER_CHATS_REQUEST,
  USER_CHATS_SUCCESS,
} from '../constants/ChatConstants';

export const getUserChats = (userId, chatId) => async (dispatch) => {
  try {
    dispatch({ type: USER_CHATS_REQUEST });
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/${userId}/chat/${chatId}`,
      config
    );

    dispatch({
      type: USER_CHATS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_CHATS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
