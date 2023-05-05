import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField } from '@material-ui/core';
import TutorCard from '../components/TutorCard';
import { GET_TUTORS } from '../data/apiEndpoints';
import { useGoogleAuth } from '../components/auth';
import GoogleButton from 'react-google-button';

function Tutors() {
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { isSignedIn, handleSignIn, handleSignOut } = useGoogleAuth();


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${GET_TUTORS}`);
      const data = await response.json();
      setTutors(data);
    }
    fetchData();
  }, []);

  const filteredTutors = tutors.filter((tutor) => {
    const fullName = `${tutor.firstName} ${tutor.lastName}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      tutor._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subjects.some((subject) =>
      subject.toLowerCase().includes(searchTerm.toLowerCase())
    )
    );
  });
  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '7%' }}>
      <TextField
        label="search name, id, or subject"
        variant="outlined"
        margin="normal"
        onChange={handleSearchChange}
        style={{ width: '70%' }}
      />
      <div style={{ marginTop: '3%' }}>
      {isSignedIn ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleButton type="light" label='Sign Out with Google' onClick={handleSignOut} />
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GoogleButton type="light" onClick={handleSignIn} />
        </div>
      )}
    </div>
      <Grid container spacing={3} style={{marginTop: '4%'}}>
        {filteredTutors.map((tutor) => (
          <Grid item key={tutor._id} xs={6}>
            <TutorCard tutor={tutor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Tutors;