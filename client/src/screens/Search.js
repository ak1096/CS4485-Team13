import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField } from '@material-ui/core';
import TutorCard from '../components/TutorCard';

function Tutors() {
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8080/tutors');
      const data = await response.json();
      console.log("data:\n" + data)
      setTutors(data);
    }
    fetchData();
  }, []);

  const filteredTutors = tutors.filter((tutor) => {
    const fullName = `${tutor.firstName} ${tutor.lastName}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      tutor._id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <TextField
        label="Search"
        variant="outlined"
        margin="normal"
        onChange={handleSearchChange}
      />
      <Grid container spacing={2}>
        {filteredTutors.map((tutor) => (
          <Grid item key={tutor._id} xs={12} sm={6} md={4}>
            <TutorCard tutor={tutor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Tutors;
