import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Box, Modal, Tab, Tabs } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { ThemeContextProvider, useTheme } from '../Context/ThemeContext';
import GoogleButton from 'react-google-button';
import{signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import errorMapping from '../Utils/errorMapping';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import background from '../asset/lady.svg';
import logo from '../asset/TypingProBTransparent.png';
const AccountCircle = () => {

const[open, setOpen] = useState(false);
const[value, setValue] = useState(0);

// import theme object in AccountCircle
const {theme} = useTheme();

const navigate = useNavigate();

const [user] = useAuthState(auth);

const handleModalOpen = ()=>{
  if(user){
    // navigate to the user pge
    navigate('/user');
  }
  else{
    setOpen(true);
  }

}

const handleClose = () => {
    setOpen(false);
}

const handleValueChange = (e, v) => {
setValue(v);
}

const logout = () =>{
  auth.signOut().then((res)=>{
    toast.success('Logged Out', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }).catch((err)=>{
    toast.error('Not able to Logout!', {
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

const googleProvider = new GoogleAuthProvider();

const handleGoogleSignIn = () => {
signInWithPopup(auth, googleProvider).then((res)=>{
  toast.success('Google Logged In Successfull!', {
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
  toast.error(errorMapping[err.code] || 'Not able to use Google Authentication', {
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
          <span title='user'> <AccountCircleIcon onClick={handleModalOpen} style={{cursor: 'pointer', marginRight: '10px', color: 'black'}} /></span>
                  <span title='logout'>{user && <LogoutIcon onClick={logout} style={{cursor: 'pointer', color: 'black'}} />}</span>
            <Modal
                    open={open}
                    onClose={handleClose}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    
                    }}
                    >
            <div className='signin-signup-box'>
                      <div style={{width: '300px', textAlign: 'center', margin: '2rem', color: 'black', fontFamily: 'open sans,Arial,sans-serif'} }  >
                              <AppBar position='static'>
                                  <Tabs 
                                  onChange={handleValueChange}
                                  value={value}
                                  variant='fullWidth'>
                                      <Tab label='login' style={{color: theme.textColor}}></Tab>
                                      <Tab label='signup'  style={{color: theme.textColor}}></Tab>
                                  </Tabs>
                              </AppBar>
                              {value === 1 && <SignupForm handleClose={handleClose}/>}
                              {value === 0 && <LoginForm handleClose={handleClose} />}
                             
                            <Box>
                              <span>OR</span>
                              <GoogleButton 
                                style={{width: '100%', marginTop: '12px'}}
                                onClick={handleGoogleSignIn}
                              />
                            </Box>
                            
                              
                        </div>
                        

                        <div className='photo-div'>
                        <span className='my-logo'><img src={logo} alt='logo'/></span>
                          <h1>Unlock Your Typing Potential</h1>

                         <div className='my-image'>
                         <img src={background} alt='background photo'/>

                         </div>
                        </div>
                        
             </div>
                     
                        
            </Modal>
           
       </div>
  
  )
}  
   
export default AccountCircle;
    
                 



 