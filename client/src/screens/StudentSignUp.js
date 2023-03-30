import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Link, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import student from '../images/student.svg'; // import your image component here

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
    width: "50%",
    height: "5%"
  },
}));

export default function LoginPage() {
  async function registerUser() {
    const res = await fetch('http://localhost:8080/auth/student-register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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


  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [year, setYear] = useState('');

  const handleYearChange = (event) => {
    setYear(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    registerUser();
  };

  const classes = useStyles();



  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '17.6ch' },
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

          <FormControl fullWidth style={{ width: '50%' }}>
            <InputLabel>year</InputLabel>
            <Select value={year} onChange={handleYearChange} >
              <MenuItem value="Freshman">Freshman</MenuItem>
              <MenuItem value="Sophomore">Sophomore</MenuItem>
              <MenuItem value="Junior">Junior</MenuItem>
              <MenuItem value="Senior">Senior</MenuItem>
              <MenuItem value="Graduate">Graduate</MenuItem>
            </Select>
          </FormControl>

          <div style={{ marginBottom: "3%" }} />

          <Button
            variant="contained"
            className={classes.customButton}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>

          <div style={{ marginBottom: "3%" }} />

          <Typography variant="body1">Have an account? <Link href="/login">Sign in</Link></Typography>

          {/* {submitted && isValid && <Typography>You have submitted: {email}, {password}</Typography>} */}
        </Grid>
      </Grid>
    </Box>
  );
}