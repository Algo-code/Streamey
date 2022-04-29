import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from './FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/UserActions';
import Message from './Message';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const redirect = location.search ? location.search.split('=')[1] : '/';
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  useEffect(() => {
    if (userInfo) {
      history('/home');
    } else {
      return loading;
    }
  }, [history, userInfo, loading, dispatch]);

  return (
    <FormContainer>
      <Form>
        <Form.Group className='d-flex justify-content-center'>
          <Form.Label>
            <h1>Log in</h1>
          </Form.Label>
        </Form.Group>

        <Form.Group className='d-flex justify-content-center'>
          <Form.Label>
            <h2>Welcome Back!</h2>
          </Form.Label>
        </Form.Group>
        {error && <Message severity='error'>{error}</Message>}
        {loading && <Loader />}
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className='mb-3 d-flex justify-content-between'
          controlId='formBasicCheckbox'
        >
          <Form.Check type='checkbox' label='Remember Me' />
          <a href='/'>Forgot Password?</a>
        </Form.Group>
        <Button
          variant='primary'
          onClick={handleLogin}
          username='test1'
          style={{ width: '100%' }}
        >
          Sign in
        </Button>

        <Form.Group className='mt-3 mb-2 ' controlId='formBasicCheckbox'>
          <Button
            variant='outline-primary'
            type='submit'
            style={{ width: '100%' }}
          >
            Sign in with Google
          </Button>
        </Form.Group>
        <Form.Group className=' mt-3 d-flex justify-content-center'>
          <Form.Label>
            <p>
              Don't have an account? <Link to='/Signup'>Register</Link>
            </p>
          </Form.Label>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
