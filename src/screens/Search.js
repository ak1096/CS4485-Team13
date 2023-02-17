import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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
        <SearchBar align='left' style={{marginLeft: '10%', marginTop: '3%',  maxWidth: '50%'}} placeholder='enter tutor name' />
        <TutorCard />
    </div>
    
    
  );
}