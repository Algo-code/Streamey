import React from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from './FormContainer';
import { Link } from 'react-router-dom';
const RegisterForm = () => {
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

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='Enter your username' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter your email address' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter your password' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Confrim Password</Form.Label>
          <Form.Control type='password' placeholder='Confrim your password' />
        </Form.Group>

        <Button variant='primary' type='submit' style={{ width: '100%' }}>
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
