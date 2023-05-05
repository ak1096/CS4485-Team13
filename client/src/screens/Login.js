import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from '@mui/material/Link';
import online from '../images/online.svg';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
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
  const navigate = useNavigate();
  const [_, setCookies] = useCookies(["access_token"]);

  async function loginUser() {
    const res = await fetch('http://localhost:3000/login', {
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
    // console.log(data);
    if (data.token) {
      setCookies("access_token", data.token);
      // console.log('userID: ', data.userID);
      window.localStorage.setItem("userID", data.userID);
      navigate('/dashboard');
    } else {
      alert(data.message);
    }
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

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    loginUser();
    console.log('button clicked');
  };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center" style={{ marginTop: '25%' }} >
            <img src={online} alt="login" />
          </Box>
        </Grid>
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

          <Button
            variant="contained"
            className={classes.customButton}
            onClick={handleSubmit}
          >
            Sign In
          </Button>

          <div style={{ marginBottom: "3%" }} />

          <Typography variant="body1">Don't have an account yet? Sign up <Link href="/">here</Link></Typography>
          {/*                 
            {submitted && <Typography>You have submitted: {email}, {password}</Typography>} */}
        </Grid>
      </Grid>
    </Box>
  );
}