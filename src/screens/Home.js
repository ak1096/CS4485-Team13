import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Notifications from '../components/Notifications';
import MiniCard from '../components/MiniCard';
import trophy from '../images/trophy.svg'
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ width: '100%', mt: '7rem', pl:'5rem' }}>
      <Grid container rowSpacing={4} columnSpacing={4}>
      <Grid item xs={12} sm={6}>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} sm={6}>
            <Item 
            container spacing={0}
            style={{minHeight: '25vh' }}
            >
            <img style={{marginTop:'5%', paddingBottom:'5%'}} src={trophy} alt="trophy" />
            <Typography variant="body1" gutterBottom>
                Member since February 2023
            </Typography>
          </Item>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Item>
                <Typography variant="h1">25</Typography>
                <Typography variant="subtitle1">tutoring hours</Typography>
            </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h4">Upcoming Appointments</Typography>
            <MiniCard initials='JD' name="John Doe" date="February 14, 2023"/>
            <MiniCard initials='PT' name="Paige Turner" date="February 21, 2023"/>
            <MiniCard initials='MP' name="Megan Jovon Ruth Pete" date="February 28, 2023"/>
        </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h4">Notifications</Typography>
            <Notifications />
        </Item>
        </Grid>
      </Grid>
    </Box>
  );
}