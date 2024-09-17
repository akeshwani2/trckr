import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from './firebase';
import { Button } from '@chakra-ui/react';


const Content = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/');
          }).catch((error) => {
            console.error("Error signing out: ", error);
          });
    }

  return (
    <div className='content'>
        Hi
        <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  )
}

export default Content