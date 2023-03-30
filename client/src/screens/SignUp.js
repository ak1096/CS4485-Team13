import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Link, Checkbox, FormControlLabel } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
    const res = await fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName, 
        email,
        password
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
    const [isStudent, setIsStudent] = useState(false);
    const [isTutor, setIsTutor] = useState(false);

    const handleIsStudentChange = (event) => {
        setIsStudent(event.target.checked);
    };

    const handleIsTutorChange = (event) => {
        setIsTutor(event.target.checked);
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
        if (isTutor) {
            window.location.href = '/tutor-signup';
        } else {
            // window.location.href = '/';
            registerUser(event);
        }
      };

    const classes = useStyles();

    

  return (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
        <Grid style={{height: '102vh', width: '50%' , backgroundColor: '#C88A36'}} item xs={6}/>
        <Grid item xs={6} container
            direction="column"
            justifyContent="center"
            alignItems="center">
                <h1> Sign Up </h1>
                <Box  
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '17.8ch' },
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

                <div style={{marginBottom: "3%"}}/>

                <TextField 
                id="standard-basic" 
                label="email" 
                className={classes.customInput} 
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                />
                {submitted && email.trim() !== '' ? ( isValid ? <p>Email is valid</p> : <p>Email is invalid</p>) : null}

                <div style={{marginBottom: "3%"}}/>

                <TextField 
                id="standard-basic" 
                label="password" 
                className={classes.customInput} 
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange} />

                <Box  
                component="form"
                sx={{
                  '& > :not(style)': { m: 2, width: '10ch' },
                }}
                noValidate
                autoComplete="off">
                    <FormControlLabel 
                    control={<Checkbox 
                    defaultChecked 
                    checked={isStudent}
                    onChange={handleIsStudentChange}
                    disabled={isTutor}
                    />} 
                    label="Student" />

                    <FormControlLabel 
                    control={<Checkbox 
                    defaultChecked 
                    checked={isTutor}
                    onChange={handleIsTutorChange}
                    disabled={isStudent}
                    />} 
                    label="Tutor" />
                </Box>
                
                <Button
                variant="contained"
                className={classes.customButton}
                onClick={handleSubmit}
                >
                Sign Up
                </Button>

                <div style={{marginBottom: "3%"}}/>

                <Typography variant="body1">Have an account? <Link href="/login">Sign in</Link></Typography>
                {/* 
                tutor sign up:
                - upload profile picture
                - add summary
                - add description
                - add skills
                 */}
                
            {/* {submitted && isValid && <Typography>You have submitted: {email}, {password}</Typography>} */}
        </Grid>  
      </Grid>
    </Box>
  );
}