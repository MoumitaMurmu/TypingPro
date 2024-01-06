// Import necessary components and dependencies
import Select from 'react-select';
import { themeOptions } from '../Utils/themeOptions';
import { useTheme } from '../Context/ThemeContext';
import logo from '../assest/TypingProBTransparent.png';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

// Footer component definition
const Footer = () => {
  // Destructure values and functions from the theme context
  const { setTheme, theme } = useTheme();

  // Handle theme change when the user selects a new theme
  const handleChange = (e) => {
    setTheme(e.value);
    localStorage.setItem('theme', JSON.stringify(e.value));
  }

  // Open GitHub link in a new tab
  const handleGithub = () => {
    window.open("https://github.com/MoumitaMurmu/TypingPro", '_blank');
  }

  // Open LinkedIn link in a new tab
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/moumita-murmu-832637218/", '_blank');
  }

  // Render the footer component
  return (
    <div className='footer'>
      <a href='/' className='footer__logo'><img src={logo} alt='logo'/></a>
      <div className='footer-content'>
        <ul className='permalinks'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/tutorial'>Tutorial</a></li>
        </ul>
        <div className='footer__socials'>
          <span onClick={handleLinkedin}><BsLinkedin/></span>
          <span onClick={handleGithub}><BsGithub/></span>
        </div>
        <div className='footer__copyright'>
          <small>&copy; MOUMITA MURMU. All right reserved.</small>
        </div>
      </div>
      
      <div className='theme-wrapper'>
        <div className='themeButton' title='ThemeButton'>
          {/* Theme selection dropdown using the 'Select' component */}
          <Select
            onChange={handleChange}
            options={themeOptions}
            menuPlacement='top'
            defaultValue={{ label: theme.label, value: theme }}
            styles={{
              control: styles => ({
                ...styles, 
                backgroundColor: theme.background,
                cursor: 'pointer'
              }),
              menu: styles => ({
                ...styles, 
                backgroundColor: theme.background
              }),
              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  backgroundColor: (!isFocused) ? theme.background : theme.textColor,
                  color: (!isFocused) ? theme.textColor : theme.background,
                  cursor: 'pointer'
                }
              }
            }}
          />  
        </div>
      </div>
    </div>
  );
}

// Export the Footer component
export default Footer;
