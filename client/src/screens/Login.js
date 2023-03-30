import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from '@mui/material/Link';

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
  async function loginUser() {
    // e.preventDefault();
    const res = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }) 
    const data = await res.json();
    console.log(data);
  }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log('email: ' + email);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log('password: ' + password);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        loginUser();
        console.log('button clicked')
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
                <h1> TIHKR </h1>
                <TextField 
                id="standard-basic" 
                label="email" 
                className={classes.customInput} 
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                />

                <div style={{marginBottom: "3%"}}/>

                <TextField 
                id="standard-basic" 
                label="password" 
                className={classes.customInput} 
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange} />

                <div style={{marginBottom: "3%"}}/>

                <Button
                variant="contained"
                className={classes.customButton}
                onClick={handleSubmit}
                >
                Sign In
                </Button>

                <div style={{marginBottom: "3%"}}/>

                <Typography variant="body1">Don't have an account yet? Sign up <Link href="/signup">here</Link></Typography>
{/*                 
            {submitted && <Typography>You have submitted: {email}, {password}</Typography>} */}
        </Grid>  
      </Grid>
    </Box>
  );
}