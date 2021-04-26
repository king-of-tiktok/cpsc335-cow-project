import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'firebase/app';
import 'firebase/auth';
import '../components/firebase_config';

import { Button, Container } from 'semantic-ui-react'

function Dashboard() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return (
    <Container textAlign='center'>
      <div>
        <h1>🤠 Logged in as: {firebase.auth().currentUser?.displayName}</h1>
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      </div>
    </Container>
  );
}

export default Dashboard