import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import FormContainer from './FormContainer';

const SearchBox = ({ history }) => {
  //const [keyword, setKeyword] = useState('');
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (keyword.trim()) {
  //     history.push(`/search/${keyword}`);
  //   } else {
  //     history.push('/');
  //   }
  // };
  return (
    <FormContainer>
      <Form>
        <Form.Control
          className='mt-5 mb-5'
          type='text'
          name='searchbox'
          // onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search...'
        ></Form.Control>
      </Form>
    </FormContainer>
  );
};
export default SearchBox;
