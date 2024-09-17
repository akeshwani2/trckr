import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./App.css"
import { Button } from '@chakra-ui/react';

const firebaseErrors = {
  'auth/email-already-in-use': 'This email is already in use. Please try logging in.',
  'auth/invalid-email': 'The email address is not valid.',
  'auth/weak-password': 'The password is too weak. Please choose a stronger password.',
  'auth/missing-password': 'Please enter a password.',
};

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/login");
        } catch (err) {
            const errorMessage = firebaseErrors[err.code] || 'An unexpected error occurred. Please try again.';
            setError(errorMessage); 
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up!</h2>
                    <div>
                        <label htmlFor="email">
                            Email: 
                            <div>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password: 
                            <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                        </label>
                    </div>
                    <div>
                        <Button bg="#D100D1" fontSize="xl" type="submit">
                            <p>Sign Up</p>
                        </Button>
                    </div>
                    <br />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <p>Already Registered?
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;