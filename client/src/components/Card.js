import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import { TutorList } from "../data/Tutors";

const TutorCard = () => {
  return (
    TutorList.map((text, index) => (
      <Card key={index} sx={{ marginLeft: '10%', marginTop: '2%', maxWidth: '50%' }}>
        <CardHeader
          avatar={
            <Avatar> {text.initials} </Avatar>
          }
          title={text.name}
          subheader={text.subtitle}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="left">
            {text.desc}
          </Typography>
        </CardContent>
        <CardActions>
          {text.subjects.map((subj, ind) => {
            return (
              <Chip label={subj} />
            )
          })}
        </CardActions>
      </Card>
    ))
  );
}

export default TutorCard;
