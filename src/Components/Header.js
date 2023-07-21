import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import AccountCircle from './AccountCircle';

import logo from '../asset/TypingProBTransparent.png';

const Header = () => {
  const [animatedText, setAnimatedText] = useState('');
  const targetText = 'Unlock Your Typing Potential';
  const location = useLocation();

  useEffect(() => {
    let currentIndex = 0;
    const animationInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setAnimatedText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(animationInterval);
      }
    }, 200); // Adjust the animation speed by changing the interval duration (in milliseconds)

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  // To display the page title in your website alongside the active link,

  useEffect(() => {
    document.title = getTitle(location.pathname);
  }, [location]);

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/':
        return 'TypingPro | Home';
      case '/tutorial':
        return 'TypingPro | Tutorial';
      case '/about':
        return 'TypingPro | About Us';
        case '/user':
          return 'TypingPro | User Page';
      default:
        return 'Typing Pro';
    }
  };

  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <h6 className='logo-heading'>{animatedText}</h6>
      </div>

      <div className='navbar'>
        <div className='nav-links'>
          <Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          HOME
          </Link>
          <Link to='/tutorial' className={`nav-link ${location.pathname === '/tutorial' ? 'active' : ''}`}>
            TUTORIAL
          </Link>
          <Link to='/about' className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            ABOUT US
          </Link>
         
        </div>

        <div className='user-icon'>
          <AccountCircle />
        </div>
      </div>
    </div>
  );
};

export default Header;

      
    
  


    
