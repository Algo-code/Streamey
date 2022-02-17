import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from './FormContainer';

const LoginForm = () => {
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
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter your email address' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter your password' />
        </Form.Group>
        <Form.Group
          className='mb-3 d-flex justify-content-between'
          controlId='formBasicCheckbox'
        >
          <Form.Check type='checkbox' label='Remember Me' />
          <a href='/'>Forgot Password?</a>
        </Form.Group>
        <Button variant='primary' type='submit' style={{ width: '100%' }}>
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
