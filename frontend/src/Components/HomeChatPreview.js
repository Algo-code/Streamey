import React from 'react';
//import Chat from '../Chat';

import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';

const Chat = [
  {
    id: 1,
    userName: 'Tony Stark',
    lastMsg: 'one two thre four five seven ten 12  ',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 2,
    userName: 'Chris',
    lastMsg: 'I funded then one two thre four five seven ten 12  ',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 3,
    userName: 'Steve Rogers',
    lastMsg: 'The  dandles will be on  five seven ten 12  ',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 4,
    userName: 'Antony',
    lastMsg: 'one two thre four five seven ten 12  ',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 5,
    userName: 'Medow',
    lastMsg: 'one two thre four five seven ten 12  ',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    userName: 'Natasha',
    lastMsg: 'I will bring the cake',
    person: '/static/images/avatar/4.jpg',
  },
];

const HomeChatPreview = () => {
  return (
    <React.Fragment>
      {' '}
      <Paper
        square
        sx={{ pb: '50px' }}
        style={{ maxHeight: '65vh', overflow: 'auto' }}
      >
        <Typography
          variant='h5'
          gutterBottom
          component='div'
          sx={{ p: 2, pb: 0 }}
        >
          New Chat
        </Typography>
        <Typography
          variant='h5'
          gutterBottom
          component='div'
          sx={{ p: 2, pb: 0 }}
        >
          Chats
        </Typography>
        <List sx={{ mb: 2 }}>
          {Chat.map(({ id, userName, lastMsg, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}

              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt={userName} src={person} />
                </ListItemAvatar>
                <ListItemText primary={userName} secondary={lastMsg} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
};

export default HomeChatPreview;
