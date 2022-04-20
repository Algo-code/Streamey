import * as React from 'react';

import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Button, Divider, Fab, ListItem } from '@mui/material';
import List from '@mui/material/List';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { Chat } from '../data';

export default function ChatList() {
  return (
    <>
      <Typography variant='h5' sx={{ position: 'static' }}>
        Chats
      </Typography>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: '60vh',
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {Chat.map(({ id, userName, lastMsg, person, messages }) => (
          <Link
            key={id}
            to={`/chat/${id}`}
            state={{
              userName: userName,
              person: person,
              messages: messages,
              id: id,
            }}
            style={{ textDecoration: 'none' }}
          >
            <ListItem className='m-0 p-1' key={id} button>
              <ListItemAvatar>
                <Avatar alt={userName} src={person} />
              </ListItemAvatar>
              <ListItemText
                primary={userName}
                secondary={lastMsg}
                style={{ color: 'primary' }}
              />
            </ListItem>
            <Divider variant='inset' component='li' />
          </Link>
        ))}
        <Fab
          className='d-flex ml-auto'
          color='primary'
          aria-label='add'
          size='small'
          style={{
            backgroundColor: '#A9C97D',
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
        >
          <AddIcon
            style={{
              color: '#ffffff',
            }}
          />
        </Fab>
      </List>
    </>
  );
}
