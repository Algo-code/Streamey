import axios from 'axios';
import {
  CHAT_FAIL,
  CHAT_REQUEST,
  CHAT_SUCCESS,
  USER_CHATS_FAIL,
  USER_CHATS_REQUEST,
  USER_CHATS_SUCCESS,
} from '../constants/ChatConstants';

export const getUserChats = (userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_CHATS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token} `,
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/${userId}/chats`,
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

export const getSpecificChat =
  (userId, chatId) => async (dispatch, getState) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState();

      console.log(userInfo.token);
      dispatch({ type: CHAT_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token} `,
        },
      };
      const { data } = await axios.get(
        `http://localhost:5000/api/${userId}/chat/${chatId}`,
        config
      );

      dispatch({
        type: CHAT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CHAT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
