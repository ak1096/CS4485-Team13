import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, FormControlLabel, Box, Grid, Button, Link } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import teaching from '../images/teaching.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    fontStyle: 'italic'
  },
  customButton: {
    backgroundColor: '#F99285',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#456B63',
    },
    width: "50%",
    height: "5%"
  }
}));

function StartingPage() {
  const classes = useStyles();
  const [isStudent, setIsStudent] = useState(false);
  const [isTutor, setIsTutor] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleIsStudentChange = (event) => {
    setIsStudent(event.target.checked);
  };

  const handleIsTutorChange = (event) => {
    setIsTutor(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (isTutor) {
      window.location.href = '/t-signup';
    } else {
      window.location.href = '/signup';
    }
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center">
            <img style={{ marginTop: '10%', paddingBottom: '5%' }} src={teaching} alt="teaching" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h2" component="h1" className={classes.title}>
              Welcome to TIHKR!
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              A platform that allows students and tutors to arrange online tutoring sessions
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off">
              <FormControlLabel
                control={<Checkbox
                  defaultChecked
                  checked={isStudent}
                  onChange={handleIsStudentChange}
                  disabled={isTutor}
                />}
                label="I am a student" />

              <FormControlLabel
                control={<Checkbox
                  defaultChecked
                  checked={isTutor}
                  onChange={handleIsTutorChange}
                  disabled={isStudent}
                />}
                label="I am a tutor" />
            </Box>
            <div style={{ marginBottom: "3%" }} />

            <Button
              variant="contained"
              className={classes.customButton}
              onClick={handleSubmit}
              disabled={!isStudent && !isTutor}
            >
              Continue
            </Button>

            <div style={{ marginBottom: "3%" }} />

            <Typography variant="body1">Already have an account? <Link href="/login">Sign in</Link></Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StartingPage;
