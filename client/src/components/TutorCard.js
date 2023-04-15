import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Avatar,
} from '@material-ui/core';

function TutorCard({ tutor }) {
  const { firstName, lastName, biography, subjects } = tutor;
  const initials = `${firstName[0]}${lastName[0]}`;

  return (
    <Card style={{ maxWidth: '100%' }}>
      <CardHeader
        avatar={<Avatar>{initials}</Avatar>}
        title={`${firstName} ${lastName}`}
        subheader={biography}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="left">
          {biography}
        </Typography>
      </CardContent>
      <CardActions>
        {subjects.map((subject) => (
          <Chip key={subject} label={subject} />
        ))}
      </CardActions>
    </Card>
  );
}

export default TutorCard;
