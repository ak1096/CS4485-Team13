import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import teaching from '../images/teacher.svg';

const useStyles = makeStyles(() => ({
  customInput: {
    width: "70%",
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
  const [subjects, setSubjects] = useState([]);
  const [selectedChips, setSelectedChips] = useState([]);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [biography, setBiography] = useState('');

  async function registerTutor() {
    const res = await fetch('http://localhost:8080/auth/tutor-register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName, 
        email,
        password, 
        biography,
        subjects
      })
    }) 
    const data = await res.json();
    console.log(data);
  }

  const handleBiographyChange = (event) => {
    setBiography(event.target.value);
    console.log('biography: ' + biography);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log('password: ' + password);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    console.log('firstName: ' + firstName);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    console.log('lastName: ' + lastName);
  };

  const handleEmailChange = (e) => {
    const temp = e.target.value;
    setEmail(temp);
    console.log('email: ' + email);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(temp) && temp.endsWith('@utdallas.edu'));
  }
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
          setSubjects([...subjects, newLabel]);
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
    registerTutor();
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

<Typography variant="h4" gutterBottom> Register as Tutor </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <TextField
              id="standard-basic"
              label="first name"
              className={classes.customInput}
              variant="outlined"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <TextField
              id="standard-basic"
              label="last name"
              className={classes.customInput}
              variant="outlined"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </Box>

          <div style={{ marginBottom: "3%" }} />

          <TextField
            id="standard-basic"
            label="email"
            className={classes.customInput}
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
          {submitted && email.trim() !== '' ? (isValid ? <p>Email is valid</p> : <p>Email is invalid</p>) : null}

          <div style={{ marginBottom: "3%" }} />

          <TextField
            id="standard-basic"
            label="password"
            className={classes.customInput}
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange} />

          <div style={{ marginBottom: "3%" }} />


          <TextField
            id="outlined-textarea"
            label="biography"
            multiline
            value={biography}
            onChange={handleBiographyChange}
            sx={{ width: '70%' }}
            inputProps={{
              style: {
                height: "70%",
              },
            }}
          />

          <div style={{ marginBottom: "3%" }} />

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

          <div style={{ marginBottom: "3%" }} />

          <Button
            variant="contained"
            className={classes.customButton}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>

        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center" style={{ marginTop: '20%', paddingBottom: '5%' }} >
            <img src={teaching} alt="teach" />
          </Box>
        </Grid>
      </Grid>
    </Box>


  );
}