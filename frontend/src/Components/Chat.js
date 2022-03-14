import React from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Form } from 'react-bootstrap';

export const Chat = () => {
  return (
    <Form>
      <Card className='chat' style={{ borderBottom: 'none' }}>
        <CardHeader
          avatar={<Avatar alt='Tony Stark' src='path' />}
          title='Tony Stark'
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
      </Card>
    </Form>
  );
};
