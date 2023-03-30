import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles(() => ({
  customInput: {
    width: "50%",
  },
  customButton: {
    backgroundColor: '#F99285',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#456B63',
    },
    width: "70%",
    height: "5%"
  },
}));

export default function TutorSignUp() {
    const [submitted, setSubmitted] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedChips, setSelectedChips] = useState([]);
    const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            const newLabel = inputValue.trim();
            if (newLabel && !selectedChips.some((chip) => chip.label.toLowerCase() === newLabel.toLowerCase())) {
              const newChip = { label: newLabel };
              setSelectedChips([...selectedChips, newChip]);
            }
            setInputValue('');
          }
      };
    
    const handleDeleteChip = (chipToDelete) => () => {
        setSelectedChips((chips) => chips.filter((chip) => chip.label !== chipToDelete.label));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        console.log('button clicked')
      };

    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
      
    <Grid item xs={6} container
      direction="column"
      justifyContent="center"
      alignItems="center">
  
      <TextField
        id="outlined-textarea"
        label="Biography"
        placeholder="Placeholder"
        multiline
        sx={{width: '70%'}}
        inputProps={{
            style: {
              height: "70%",
            },
          }}
      />

      <div style={{marginBottom: "3%"}}/>

      <TextField 
        label="Enter skills"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        sx={{width: '70%'}}
        InputProps={{
          startAdornment: selectedChips.map((chip) => (
            <Chip
              key={chip.label}
              label={chip.label}
              onDelete={handleDeleteChip(chip)}
              sx={{ margin: '4px' }}
            />
          ))
        }}/>

      <div style={{marginBottom: "3%"}}/>

      <Button
        variant="contained"
        className={classes.customButton}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>

    </Grid>  
    <Grid style={{height: '102vh', width: '50%' , backgroundColor: '#C88A36'}} item xs={6}/>
  </Grid>
</Box>

  
  );
}