import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Loader from '../Components/Loader';

import ChooseChat from '../Components/ChooseChat';
import { useDispatch, useSelector } from 'react-redux';

import Message from '../Components/Message';
import { LinkContainer } from 'react-router-bootstrap';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../Components/FormContainer';
import { Link } from 'react-router-dom';

const Profile = () => {
  /*const userProfile = useSelector((state) => state.userLogin);
   const { loading, error, user } = userProfile;                      fix  to  Proper implementation
   */
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const user = userInfo.user;
  const [userName, setUserName] = useState(user.username);

  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [confirmPassword, setConfrimPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else {
      //dispatch profile update
    }
  };

  return (
    <Container>
      <LinkContainer to='/home'>
        <Button className='mt-3'>Back</Button>
      </LinkContainer>
      <FormContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            {message && <Message severity='info'>{message}</Message>}
            {error && <Message severity='error'>{error}</Message>}
            <h2>Update Profile</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='userName' className='p-1 m-1'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Username'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='email' className='p-1 m-1'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='password' className='p-1 m-1'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='confrimPassword' className='p-1 m-1'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfrimPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary' className=' m-1'>
                Update
              </Button>
            </Form>
          </>
        )}
      </FormContainer>
    </Container>
  );
};

export default Profile;
