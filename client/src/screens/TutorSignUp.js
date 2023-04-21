import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useStyles } from "../styles/styling";
import { Button, Typography, Link } from '@material-ui/core';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import teaching from '../images/teacher.svg';
import useForm from './CustomHook.js';
import WeekdayPicker from '../components/WeekdayPicker';

export default function TutorSignUp() {
  const [submitted, setSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [selectedChips, setSelectedChips] = useState([]);
  const [biography, setBiography] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);

  const handleSelectedDaysChanged = (days) => {
    setSelectedDays(days);
  }

  const { password, firstName, lastName, email, isValid, handlePasswordChange, handleFirstNameChange, handleLastNameChange, handleEmailChange } = useForm();

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
        subjects,
        selectedDays
      })
    })
    const data = await res.json();
    console.log(data);
  }

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

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

  const handleSubmit = () => {
    if (isValid) {
      // console.log("selectedDays"+ selectedDays);
      setSubmitted(true);
      registerTutor();
      alert('Registration successful, login')
    } else {
      return console.log("invalid email: ");
    }
  };

  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={6} container
          direction="column"
          justifyContent="center"
          alignItems="center">

          <Typography variant="h4" gutterBottom> Register as Tutor </Typography>

          <Box width="70%">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth
                  label="first name"
                  variant="outlined"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth
                  label="last name"
                  className={classes.customInput}
                  variant="outlined"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </Grid>
            </Grid>

          </Box>

          <div className={classes.divider} />

          <TextField
            id="standard-basic"
            label="email"
            className={classes.customInput}
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
          {submitted && email.trim() !== '' ? (isValid ? <p>Email is valid</p> : <p>Email is invalid</p>) : null}

          <div className={classes.divider} />

          <TextField
            id="standard-basic"
            label="password"
            className={classes.customInput}
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange} />

          <div className={classes.divider} />


          <TextField
            id="outlined-textarea"
            label="biography"
            multiline
            value={biography}
            onChange={(e) => { setBiography(e.target.value); }}
            sx={{ width: '70%' }}
            inputProps={{
              style: {
                height: "70%",
              },
            }}
          />

          <div className={classes.divider} />

          <TextField
            label="Subjects"
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value) }}
            onKeyDown={handleInputKeyDown}
            sx={{ width: '70%' }}
            InputProps={{
              startAdornment: selectedChips.map((chip) => (
                <Chip
                  key={chip.label}
                  label={chip.label}
                  onDelete={handleDeleteChip(chip)}
                  sx={{ margin: '4px' }}
                />
              ))
            }} />

          <div className={classes.divider} />
          <Typography variant='h6'>Availability</Typography>

          <WeekdayPicker onSelectedDaysChanged={handleSelectedDaysChanged} />

          {/* <div className={classes.divider} /> */}

          <Button
            variant="contained"
            className={classes.customButton}
            onClick={handleSubmit}
            disabled={!password || !firstName || !lastName || !email || !biography || !subjects}
          >
            Sign Up
          </Button>
          <div className={classes.divider} />
          <Typography variant="body1">Have an account? <Link href="/login">Sign in</Link></Typography>

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