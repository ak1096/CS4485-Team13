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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        console.log('username: ' + username);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log('password: ' + password);
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
                    value={username}
                    onChange={handleUsernameChange}
                    />
                    <TextField 
                    id="standard-basic" 
                    label="last name" 
                    className={classes.customInput} 
                    variant="outlined"
                    value={username}
                    onChange={handleUsernameChange}
                    />
                </Box>

                <div style={{marginBottom: "3%"}}/>

                <TextField 
                id="standard-basic" 
                label="email" 
                className={classes.customInput} 
                variant="outlined"
                value={username}
                onChange={handleUsernameChange}
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
                Sign Up
                </Button>

                <div style={{marginBottom: "3%"}}/>

                <Typography variant="body1">Have an account? <Link href="/login">Sign in</Link></Typography>
                
            {submitted && <Typography>You have submitted: {username}, {password}</Typography>}
        </Grid>  
      </Grid>
    </Box>
  );
}