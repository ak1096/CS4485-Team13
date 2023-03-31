import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Link, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { Button } from '@material-ui/core';
import { useStyles } from "../styles/styling";
import student from '../images/student.svg'; // import your image component here
import useForm from './CustomHook.js';

export default function StudentSignUp() {
  async function registerUser() {
    // make a POST request to the API endpoint for student registration
    const res = await fetch('http://localhost:8080/auth/student-register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // include the user's registration data in the request body
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        year
      })
    })

    const data = await res.json();
    console.log(data);
  }


  const [submitted, setSubmitted] = useState(false);
  const [year, setYear] = useState('');
  // destructure properties from the result of the useForm() hook
  // destructure: returns an object that contains properties for storing and updating the values of various form fields
  const { password, firstName, lastName, email, isValid, handlePasswordChange, handleFirstNameChange, handleLastNameChange, handleEmailChange } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      setSubmitted(true);
      registerUser();
    } else {
      return console.log("invalid email");
    }
  };

  const classes = useStyles();

  return (
    <Box className={classes.root} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center">
            <img style={{ marginTop: '10%', paddingBottom: '5%' }} src={student} alt="teaching" />
          </Box>
        </Grid>

        <Grid item xs={6} container
          direction="column"
          justifyContent="center"
          alignItems="center">

          <Typography variant="h4" gutterBottom> Register as Student </Typography>

          <Box width="70%">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="first name"
                  variant="outlined"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="last name"
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

          <FormControl fullWidth style={{ width: '70%' }}>
            <InputLabel>year</InputLabel>
            <Select value={year} onChange={(e) => { setYear(e.target.value); }} >
              <MenuItem value="Freshman">Freshman</MenuItem>
              <MenuItem value="Sophomore">Sophomore</MenuItem>
              <MenuItem value="Junior">Junior</MenuItem>
              <MenuItem value="Senior">Senior</MenuItem>
              <MenuItem value="Graduate">Graduate</MenuItem>
            </Select>
          </FormControl>

          <div className={classes.divider} />

          <Button
            variant="contained"
            className={classes.customButton}
            onClick={handleSubmit}
            disabled={!password || !firstName || !lastName || !email}
          >
            Sign Up
          </Button>

          <div className={classes.divider} />

          <Typography variant="body1">Have an account? <Link href="/login">Sign in</Link></Typography>

          {/* {submitted && isValid && <Typography>You have submitted: {email}, {password}</Typography>} */}
        </Grid>
      </Grid>
    </Box>
  );
}
