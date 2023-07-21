import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import errorMapping from '../Utils/errorMapping';

const SignupForm = ({handleClose}) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const {theme} = useTheme();

    const handleSubmit = () =>{
    if(!email || !password || !confirmPassword) {
        toast.warning('Please Fill all details!', {
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
    if(password !== confirmPassword){
        toast.warning('Password mismatch!', {
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

    auth.createUserWithEmailAndPassword(email, password).then((res)=>{
        
        toast.success('User Created', {
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
     <h1 className='create-your-acnt-title'>Create Your Account</h1>
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
            <TextField
                variant='outlined'
                type='confirmpassword'
                label='Enter Your ConfirmPassword'
                onChange={(e)=>setConfirmPassword(e.target.value)}
                InputLabelProps={{
                    style : {
                      color: 'black',
                      
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
            onClick={handleSubmit}>SignUp</Button>
        </Box>
    </div>
  )
}

export default SignupForm;


          