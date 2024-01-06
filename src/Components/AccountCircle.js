import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Box, Modal, Tab, Tabs } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { ThemeContextProvider, useTheme } from '../Context/ThemeContext';
import GoogleButton from 'react-google-button';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import errorMapping from '../Utils/errorMapping';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import background from '../assest/lady.svg';
import logo from '../assest/TypingProBTransparent.png';

const AccountCircle = () => {
  // State for managing modal open/close and tab value
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  // Use the useTheme hook to get the current theme
  const { theme } = useTheme();

  // React Router DOM's navigate function
  const navigate = useNavigate();

  // Use Firebase's useAuthState hook to get the user's authentication state
  const [user] = useAuthState(auth);

  // Open the modal if the user is not logged in; navigate to user page if logged in
  const handleModalOpen = () => {
    if (user) {
      // Navigate to the user page
      navigate('/user');
    } else {
      setOpen(true);
    }
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Handle tab change
  const handleValueChange = (e, v) => {
    setValue(v);
  };

  // Logout function
  const logout = () => {
    auth
      .signOut()
      .then((res) => {
        toast.success('Logged Out', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch((err) => {
        toast.error('Not able to Logout!', {
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

  // Google sign-in using Firebase authentication
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        toast.success('Google Logged In Successfully!', {
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
        toast.error(errorMapping[err.code] || 'Not able to use Google Authentication', {
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
      {/* User Icon */}
      <span title='user'>
        <AccountCircleIcon onClick={handleModalOpen} style={{ cursor: 'pointer', marginRight: '10px', color: 'black' }} />
      </span>

      {/* Logout Icon (visible when user is logged in) */}
      <span title='logout'>{user && <LogoutIcon onClick={logout} style={{ cursor: 'pointer', color: 'black' }} />}</span>

      {/* Authentication Modal */}
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
          {/* Authentication Tabs */}
          <div style={{ width: '300px', textAlign: 'center', margin: '2rem', color: 'black', fontFamily: 'open sans,Arial,sans-serif' }}>
            <AppBar position='static'>
              <Tabs onChange={handleValueChange} value={value} variant='fullWidth'>
                <Tab label='login' style={{ color: theme.textColor }}></Tab>
                <Tab label='signup' style={{ color: theme.textColor }}></Tab>
              </Tabs>
            </AppBar>

            {/* Render login or signup form based on the selected tab */}
            {value === 1 && <SignupForm handleClose={handleClose} />}
            {value === 0 && <LoginForm handleClose={handleClose} />}

            {/* Google Sign-in Button */}
            <Box>
              <span>OR</span>
              <GoogleButton style={{ width: '100%', marginTop: '12px' }} onClick={handleGoogleSignIn} />
            </Box>
          </div>

          {/* Additional Content (Logo and Background Image) */}
          <div className='photo-div'>
            <span className='my-logo'>
              <img src={logo} alt='logo' />
            </span>
            <h1>Unlock Your Typing Potential</h1>
            <div className='my-image'>
              <img src={background} alt='background photo' />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AccountCircle;
