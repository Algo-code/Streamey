import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, CardHeader, IconButton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import ChatTabPanel from './ChatTabPanel';
import { Form } from 'react-bootstrap';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Form style={{ width: '40vw', height: '60vh', border: '1px solid' }}>
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
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function HomeChat() {
  const [value, setValue] = React.useState(0);
  const [name, setname] = React.useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event, userName) => {
    setname(userName);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 443,
      }}
    >
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {Chat.map(({ id, userName, lastMsg, person }) => (
          <Tab
            key={id}
            className='m-0 p-1'
            label={
              <ListItem className='m-0 p-0'>
                <ListItemAvatar>
                  <Avatar alt={userName} src={person} />
                </ListItemAvatar>
                <ListItemText primary={userName} secondary={lastMsg} />
              </ListItem>
            }
          />
        ))}
      </Tabs>

      <TabPanel value={value} index={0}>
        Item Six
      </TabPanel>
    </Box>
  );
}
