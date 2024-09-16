import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import './Login.css';
import './App.css';

const firebaseErrors = {
    'auth/email-already-in-use': 'This email is already in use. Please try logging in.',
    'auth/invalid-email': 'The email address is not valid.',
    'auth/weak-password': 'The password is too weak. Please choose a stronger password.',
    'auth/missing-password': 'Please enter a password.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
};

const Login = ({ className} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // To track login errors
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state before attempting login
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/content');
        } catch (err) {
            const errorMessage = firebaseErrors[err.code] || 'Invalid credentials. Please try again.';
            setError(errorMessage);
        }
    }

    const handleForgotPassword = () => {
        navigate('/forgot-password')
    }

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives a Google Access token, used to access the google API
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed in user info
            const user = result.user;
            console.log("User Info: ", user);
            navigate("/content")

            // Redirecthandle user info as needed
        }) 
        .catch((error) => {
            // Error handling
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error)

            console.error("Error during Google sign in: ", errorCode, errorMessage)
        });
    }
    return (
        <form onSubmit={handleSubmit} className={className}>
            <h2 className='log-title'>Login</h2>
            <div className='email-container'>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className='text-box'
            />
            </div>
            <div className='password-container'>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className='text-box'
            />
            </div>
            <div className='login-button-container'>
            <button type="submit" onClick={handleSubmit} className='login-button'>Login</button>
            </div>
            {error && <p className="error">{error}</p>}
            <div className='google-button-container'>
            <button type="button" className='google-button' onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
            <div className='forgot-password-container'>
            <button type="button" className='forgot-password-button' onClick={() => handleForgotPassword(email)}>Forgot Password?</button>
            </div>
        </form>
    )
}

export default Login;