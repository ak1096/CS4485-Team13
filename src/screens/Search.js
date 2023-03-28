import * as React from 'react';
import TutorCard from '../components/Card';
import SearchBar from "material-ui-search-bar";

export default function Search() {
  return (
    <div style={{marginTop: '5rem'}}>
        <SearchBar align='left' style={{marginLeft: '10%', marginTop: '3%',  maxWidth: '50%'}} placeholder='enter tutor name' />
        <TutorCard />
    </div>
    
    
  );
}