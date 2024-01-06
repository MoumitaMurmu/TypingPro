import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { SlBadge } from 'react-icons/sl';

const UserInfo = ({ totalTestsTaken }) => {
  // Get the authenticated user's information
  const [user] = useAuthState(auth);

  return (
    <>
      <div className='user-profile'>
        <div className='user'>
          <div className='picture'>
            {/* Display user profile picture (placeholder with AccountCircleIcon) */}
            <AccountCircleIcon style={{ display: 'block', transform: 'scale(6)', margin: 'auto', marginTop: '2rem' }} />
          </div>
          <div className='info'>
            {/* Display user email and account creation time */}
            <div className='email'>
              <MailOutlineIcon style={{ marginRight: '5px', fontSize: '30px' }} /> {user.email}
            </div>
            <div className='joined-at'>
              {user.metadata.creationTime}
            </div>
          </div>
        </div>

        <div className='total-tests'>
          {/* Display a badge icon and the total number of tests taken */}
          <span><SlBadge style={{ marginLeft: '2rem' }} /></span>
          <span>Total Tests Taken - {totalTestsTaken}</span>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
