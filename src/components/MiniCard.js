import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function MiniCard(props) {
  return (
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          {props.initials}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.date} />
      </ListItem>
    </List>
  );
}