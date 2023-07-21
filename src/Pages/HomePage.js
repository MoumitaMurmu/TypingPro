import React from 'react'
import Header from '../Components/Header';
import TypingBox from '../Components/TypingBox';
import Footer from '../Components/Footer';



const HomePage = () => {
  return (
    <div >
    <div>
    <Header/>
    </div>
    
    <div className="canvas">
    
    <TypingBox/>
  
    </div>
  <div>
  <Footer/>
  </div>
      
     
      </div>
  )
}

export default HomePage;

