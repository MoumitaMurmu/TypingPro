import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import errorMapping from '../Utils/errorMapping';

const LoginForm = ({handleClose}) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const {theme} = useTheme();

    const handleSubmit = () =>{
        if(!email || !password){
            toast.warning('Fill all details!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
           return;
        }

        auth.signInWithEmailAndPassword(email,password).then((res)=>{
            toast.success('Logged In!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                handleClose();
        }).catch((err)=>{
            toast.error(errorMapping[err.code] || 'some error occured', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        })
    }

  return (
    <div>
        <Box
        p={3}
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}
        >
            <TextField
                variant='outlined'
                type='email'
                label='Enter Your Email'
                onChange={(e)=>setEmail(e.target.value)}
                InputLabelProps={{
                    style : {
                      color: 'black'
                    }
                }}
                inputProps={{
                    style: {
                        color: 'black'
                    }
                }}
            />
            <TextField
                variant='outlined'
                type='password'
                label='Enter Your Password'
                onChange={(e)=>setPassword(e.target.value)}
                InputLabelProps={{
                    style : {
                      color: 'black'
                    }
                }}
                inputProps={{
                    style: {
                        color: 'black'
                    }
                }}
            />
            <Button
            variant='contained'
            size='large'
            className='sign-up-btn'
            onClick={handleSubmit}>Login</Button>
        </Box>
    </div>
  )
}

export default LoginForm;


            