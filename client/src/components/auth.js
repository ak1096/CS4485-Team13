import { gapi } from 'gapi-script';
import { useState, useEffect } from 'react';

export const useGoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: 'AIzaSyCk3RPD4PCqBf8lLSfU1V1QgfX3cyv1EHg',
        clientId: '8710076267-j28sd4rsk4k7kv3qbj8ejf3in0huk6vq.apps.googleusercontent.com',
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