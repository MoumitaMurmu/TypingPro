import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import errorMapping from '../Utils/errorMapping';

const SignupForm = ({ handleClose }) => {
    // State variables for managing email, password, and confirmPassword
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = () => {
        // Check if email, password, and confirmPassword are provided
        if (!email || !password || !confirmPassword) {
            toast.warning('Please Fill all details!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            return;
        }

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            toast.warning('Password mismatch!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            return;
        }

        // Create user with email and password using Firebase authentication
        auth.createUserWithEmailAndPassword(email, password)
            .then((res) => {
                // Display success message and close the modal
                toast.success('User Created', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
                handleClose();
            })
            .catch((err) => {
                // Display error message or a generic message if the error code is not mapped
                toast.error(errorMapping[err.code] || 'Some error occurred', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            });
    };

    return (
        <div>
            {/* Create Your Account Title */}
            <h1 className='create-your-acnt-title'>Create Your Account</h1>

            {/* Form Container */}
            <Box
                p={3}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}
            >
                {/* Email Input */}
                <TextField
                    variant='outlined'
                    type='email'
                    label='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                    InputLabelProps={{
                        style: {
                            color: 'black',
                        },
                    }}
                    inputProps={{
                        style: {
                            color: 'black',
                        },
                    }}
                />

                {/* Password Input */}
                <TextField
                    variant='outlined'
                    type='password'
                    label='Enter Your Password'
                    onChange={(e) => setPassword(e.target.value)}
                    InputLabelProps={{
                        style: {
                            color: 'black',
                        },
                    }}
                    inputProps={{
                        style: {
                            color: 'black',
                        },
                    }}
                />

                {/* Confirm Password Input */}
                <TextField
                    variant='outlined'
                    type='confirmpassword'
                    label='Enter Your ConfirmPassword'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputLabelProps={{
                        style: {
                            color: 'black',
                        },
                    }}
                    inputProps={{
                        style: {
                            color: 'black',
                        },
                    }}
                />

                {/* Sign Up Button */}
                <Button
                    variant='contained'
                    size='large'
                    className='sign-up-btn'
                    onClick={handleSubmit}
                >
                    SignUp
                </Button>
            </Box>
        </div>
    );
};

export default SignupForm;
