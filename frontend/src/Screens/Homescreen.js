import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import AdSpace from '../Components/AdSpace';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import SearchBox from '../Components/SearchBox';
import ChatList from '../Components/ChatList';
import ChatPanel from '../Components/ChatPanel';
import ChooseChat from '../Components/ChooseChat';
import { useDispatch, useSelector } from 'react-redux';
import { listContacts } from '../actions/UserActions';
import Message from '../Components/Message';
import { getUserChats } from '../actions/ChatActions';
function Homescreen() {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: userLoading, error: userError, userInfo } = userLogin;

  const contactList = useSelector((state) => state.contactList);
  const { loading, error, contacts } = contactList;

  const userChats = useSelector((state) => state.userChats);
  const { loading: loadingChats, error: errorChats, chats } = userChats;

  const dispatch = useDispatch();
  const id = localStorage.getItem('id');

  useEffect(() => {
    dispatch(listContacts(userInfo.user._id));
    userInfo.user.chats.forEach((index) => {
      dispatch(getUserChats(userInfo.user._id, index));
    });
  }, [dispatch, id, userInfo.user.chats, userInfo.user._id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Container>
            <SearchBox />
            {error && <Message severity='error'>{error}</Message>}
            <Row>
              <Grid
                container
                spacing={{ sx: 1, md: 2 }}
                direction={{ sx: 'column', md: 'row' }}
              >
                <Grid item md={3}>
                  {' '}
                  <ChatList contacts={contacts} />
                </Grid>
                <Grid item md={6}>
                  <Outlet />
                </Grid>
                <Grid item md={2}>
                  {' '}
                  <AdSpace />
                </Grid>
              </Grid>
            </Row>
            <Link to='/Login'>Login</Link>
            <br />
            <Link to='/Signup'>Register</Link>
          </Container>
        </>
      )}
    </>
  );
}

export default Homescreen;
