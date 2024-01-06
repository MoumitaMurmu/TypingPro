import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import errorMapping from '../Utils/errorMapping';

const LoginForm = ({ handleClose }) => {
    // State variables for managing email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = () => {
        // Check if email and password are provided
        if (!email || !password) {
            toast.warning('Fill all details!', {
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

        // Sign in with email and password using Firebase authentication
        auth.signInWithEmailAndPassword(email, password)
            .then((res) => {
                // Display success message and close the modal
                toast.success('Logged In!', {
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

                {/* Login Button */}
                <Button
                    variant='contained'
                    size='large'
                    className='sign-up-btn'
                    onClick={handleSubmit}
                >
                    Login
                </Button>
            </Box>
        </div>
    );
};

export default LoginForm;
