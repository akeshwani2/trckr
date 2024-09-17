import React from 'react'
import "./App.css"
import { useNavigate } from 'react-router-dom'
import { Button } from "@chakra-ui/react";


const Dashboard = ({className}) => {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleSignUpClick = () => {
        navigate("/signup")
    }

  return (
    <div className={`${className} flex items-center justify-center min-h-screen`}>
        <div className='dash-container'>
            <form>
                <div className='dash-t'>
                <h1>welcome to trckr</h1>
                </div>
                <div className='dash-log'>
                <Button colorScheme="red" bg="#FF1744" p={7} fontSize="xl" mr={4} onClick={handleLoginClick}>Login</Button>
                <Button colorScheme="green" bg="#00FF66" p={7} fontSize="2xl" onClick={handleSignUpClick}>Sign Up</Button>
                </div>

                
            </form>
        </div>
    </div>

  )
}

export default Dashboard