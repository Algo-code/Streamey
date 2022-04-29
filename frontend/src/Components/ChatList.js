import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Divider, Fab, ListItem } from '@mui/material';
import List from '@mui/material/List';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { Chat } from '../data';
import Message from './Message';
import Loader from './Loader';

export default function ChatList({ contacts }) {
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
        {contacts ? (
          contacts.contacts.map(
            ({ _id, username, lastMsg, profileImageUrl }) => (
              <Link
                key={_id}
                to={`/home/chat/${_id}`}
                state={{
                  username: username,
                  profileImageUrl: profileImageUrl,

                  id: _id,
                }}
                style={{ textDecoration: 'none' }}
              >
                <ListItem className='m-0 p-1' key={_id} button>
                  <ListItemAvatar>
                    <Avatar
                      alt={username.toUpperCase()}
                      src={profileImageUrl}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={username}
                    secondary={lastMsg}
                    style={{ color: '#000', fontWeight: 'bold' }}
                  />
                </ListItem>
                <Divider variant='inset' component='li' />
              </Link>
            )
          )
        ) : (
          <Loader />
        )}
        <Fab
          className='d-flex ml-auto'
          color='primary'
          size='small'
          style={{
            backgroundColor: '#A9C97D',
            position: 'sticky',
            bottom: '10%',
            left: '80%',
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
