import { gapi } from 'gapi-script';
import { useState, useEffect } from 'react';
import dotenv from 'dotenv';

dotenv.config();

export const useGoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: process.env.REACT_APP_API_KEY,
        clientId: process.env.REACT_APP_CLIENT_ID,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.events',
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        setIsSignedIn(authInstance.isSignedIn.get());
        authInstance.isSignedIn.listen(setIsSignedIn);
      });
    });
  }, []);

  const handleSignIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOut = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  return {
    isSignedIn,
    handleSignIn,
    handleSignOut,
  };
}