import Select from 'react-select';
import { themeOptions } from '../Utils/themeOptions';
import { useTheme } from '../Context/ThemeContext';
import logo from '../asset/TypingProBTransparent.png';
import{BsLinkedin} from 'react-icons/bs';
import{BsGithub} from 'react-icons/bs';
const Footer = () => {
 

   
    const{setTheme, theme} = useTheme();
    const handleChange=(e)=>{
    //   console.log(e);
      
      setTheme(e.value);
      localStorage.setItem('theme', JSON.stringify(e.value));
    }

    const handleGithub = (e) =>{
      window.open("https://github.com/MoumitaMurmu/typing-test", '_blank');
    }
  
    const handleLinkedin = () =>{
      window.open("https://www.linkedin.com/in/moumita-murmu-832637218/", '_blank');
    }

   

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
                          <a href='/' onClick={handleLinkedin}><BsLinkedin/></a>

                          <a href='/' onClick={handleGithub}><BsGithub/></a>
                         </div>
                         <div className='footer__copyright'>
                           <small>&copy; MOUMITA MURMU. All right reserved.</small>
                         </div>
                    </div>
                
     
               
                  

    
                    <div className='theme-wrapper'>
               
                <div className='themeButton' title='ThemeButton'>
                    <Select
                  
                    onChange={handleChange}
                    options={themeOptions}
                    menuPlacement='top'
                    defaultValue={{label: theme.label, value: theme}}
                    styles={{
                      control: styles=>({
                        ...styles, 
                        backgroundColor: theme.background,
                        cursor: 'pointer'
                        
                      }),
                      menu: styles=>({
                        ...styles, 
                        backgroundColor: theme.background
                      }),
                      option: (styles,{isFocused})=>{
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
       
    

   
  )
}

export default Footer;




      
     