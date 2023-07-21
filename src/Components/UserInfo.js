import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@mui/material';
import {SlBadge} from 'react-icons/sl';

const UserInfo = ({totalTestsTaken}) => {
    const [user] = useAuthState(auth);
   


    
  return (
    <>
    <div className='user-profile'>
        <div className='user'>
            <div className='picture'>
                <AccountCircleIcon style={{display: 'block', transform: 'scale(6)', margin: 'auto', marginTop: '2rem'}}/>
            </div>
            <div className='info'>
                <div className='email'>
                   <MailOutlineIcon style={{marginRight: '5px', fontSize:'30px'}}/>{user.email}
                </div>
                <div className='joined-at'>
                   {user.metadata.creationTime}
                </div>
            </div>

        </div>
        <div className='total-tests'>
        <span><SlBadge style={{ marginLeft: '2rem'}}/></span>

             <span>Total Test Taken - {totalTestsTaken}</span>

        </div>
       

    </div>
</>
  )
}

export default UserInfo;


       