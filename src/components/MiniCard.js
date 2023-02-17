import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { UpcomingList } from '../data/Tutors';

export default function MiniCard(props) {
  return (
    UpcomingList.map((text, index) => (
      <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
            {text.initials}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={text.name} secondary={text.date} />
        </ListItem>
      </List>
    ))
  );
}