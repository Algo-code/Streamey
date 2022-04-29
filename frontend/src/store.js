import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  contactListReducer,
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
} from './reducers/UserReducers';
import { userChatsReducer } from './reducers/ChatReducers';
const reducer = combineReducers({
  //useer stuff
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  contactList: contactListReducer,
  userProfile: userProfileReducer,
  //useer stuff

  //chat statee
  userChats: userChatsReducer,
  //chat state
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
