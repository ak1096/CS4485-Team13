import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TutorCard from '../components/Card';
import SearchBar from "material-ui-search-bar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Search() {
  return (
    <div style={{marginTop: '5rem'}}>
        <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
                
                {/* <Typography variant='h3' align='left' style={{marginLeft: '20%', marginTop: '3%'}}>
                    Tutor Search
                </Typography> */}

                
            </Grid>
            <Grid item xs={4}>
                
            </Grid>
        </Grid>
        <SearchBar align='left' style={{marginLeft: '10%', marginTop: '3%',  maxWidth: '50%'}} placeholder='enter tutor name' />
        <TutorCard initials='JD' name='John Doe' subtitle='subtitle' desc='This is a description' subject1='MATH 2414' subject2='CS 3377'/>
        <TutorCard initials='PT' name='Paige Turner' subtitle='subtitle 2' desc='This is another description' subject1='CHEM 1301' subject2='PHYS 2325'/>
    </div>
    
    
  );
}