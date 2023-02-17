import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';

const TutorCard = (props) => {
  return (
    <Card sx={{ marginLeft: '10%', marginTop: '2%', maxWidth: '50%' }}>
      <CardHeader
        avatar={
          <Avatar>
            {props.initials}
          </Avatar>
        }
        title={props.name}
        subheader={props.subtitle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip label={props.subject1} />
        <Chip label={props.subject2} />
      </CardActions>
    </Card>
  );
}

export default TutorCard;
