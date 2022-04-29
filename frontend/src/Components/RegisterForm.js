import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from './FormContainer';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Message from './Message';
import Loader from './Loader';
import { register } from '../actions/UserActions';

const RegisterForm = () => {
  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfrimPassword] = useState('');
  const [message, setMessage] = useState(null);
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      setMessage(userInfo.message);
      history('/');
    }
  }, [userInfo, history]);

  const handleRegister = (e) => {
    e.preventDefault();
    //dispatch Register

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else {
      dispatch(
        register(
          email,

          username,
          password
        )
      );
    }
  };

  return (
    <FormContainer>
      <Form>
        <Form.Group className='d-flex justify-content-center'>
          <Form.Label>
            <h1>Register</h1>
          </Form.Label>
        </Form.Group>

        <Form.Group className='d-flex justify-content-center'>
          <Form.Label>
            <h5>Welcome! Create your account.</h5>
          </Form.Label>
        </Form.Group>

        {message && <Message severity='warning'>{message}</Message>}
        {error && <Message severity='error'>{loading}</Message>}
        {loading && <Loader />}
        <Form.Group className='mb-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your username'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email address'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='suppeerPassword'>
          <Form.Label>Confrim Password</Form.Label>
          <Form.Control
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfrimPassword(e.target.value)}
            placeholder='Confrim your password'
          />
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
          onClick={handleRegister}
          style={{ width: '100%' }}
        >
          Register
        </Button>

        <Form.Group className=' mt-3 d-flex justify-content-center'>
          <Form.Label>
            <p>
              I already have an account. <Link to='/Login'>Login</Link>
            </p>
          </Form.Label>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default RegisterForm;
