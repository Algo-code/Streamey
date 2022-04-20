import { Container, Grid } from '@mui/material';
import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import AdSpace from '../Components/AdSpace';
import Header from '../Components/Header';

import SearchBox from '../Components/SearchBox';
import ChatList from '../Components/ChatList';
import ChatPanel from '../Components/ChatPanel';
import ChooseChat from '../Components/ChooseChat';
const Homescreen = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <SearchBox />

        <Row>
          <Grid container spacing={3}>
            <Grid item md={3}>
              {' '}
              <ChatList />
            </Grid>
            <Grid item md={7}>
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
    </React.Fragment>
  );
};

export default Homescreen;
