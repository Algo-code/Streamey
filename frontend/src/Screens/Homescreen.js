import { Container, Grid } from '@mui/material';
import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdSpace from '../Components/AdSpace';
import Header from '../Components/Header';
import HomeChat from '../Components/HomeChat';
import SearchBox from '../Components/SearchBox';
const Homescreen = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <SearchBox />
        <Row>
          <Grid container spacing={2}>
            <Grid item md={10}>
              {' '}
              <HomeChat />
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
