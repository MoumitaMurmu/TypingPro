import React from 'react'
import Header from '../Components/Header';
import fingerPosition from '../asset/keybd_hand_position.jpg';
import handPosition from '../asset/hands_baseline.png';
import fingerCorelation from '../asset/fingercorelation.jpeg';
import muscleMemory from '../asset/musclememory.jpg';
import speedGraph from '../asset/speedGraph.avif';
import Footer from '../Components/Footer';
import {BsSuitDiamondFill} from 'react-icons/bs';
import {BsFillHexagonFill} from 'react-icons/bs';
const Tutorial = () => {
  return (
    <>
        <Header/>
        <h1 className='tutorial-heading animated'><BsFillHexagonFill/>BASIC STEPS TO MASTER YOUR TYPING SKILLS<BsFillHexagonFill/></h1>
           <div className='tutorial-container'>
                  <div class="left animated">
                      <div className='step'><h1>Step-1</h1></div>
                                  <h1 style={{textAlign: 'center'}}><BsSuitDiamondFill/>Finger Placement<BsSuitDiamondFill/></h1>
                                  <img src={handPosition} alt='handPosition' title='Handposition' className='hand-position animated'/>
                                  <br/> 
                                  <ul>
            <li>  <strong>Left-hand fingers:</strong> Position your fingers on the keys A, S, D, and F. 
        </li>
                                    <li> <strong>Right-hand fingers:</strong> Place your fingers on the keys J, K, L,  
                                      and  
                                    semicolon 
                                        (;). </li>
      <li><strong>Thumb placement:</strong> Both thumbs rest on the space bar.
</li>
                                  </ul>    
                                   
                      </div>
                  
              
          
             
              <div class="right animated">
              <div className='step'><h1>Step-2</h1></div>
                    <h1 style={{textAlign: 'center'}}><BsSuitDiamondFill/>Key-Finger Correlation<BsSuitDiamondFill/></h1>
                     
                    
                        <p>
                        <strong>Each finger is responsible for hitting multiple keys.
                        On the chart you can see the coloured marks: they show you which finger and which key correlate. 
                        </strong>
                     
                        </p>
                     
                    <img src={fingerCorelation} alt='fingerposition' title='Fingerposition' className='finger-corelation animated'/>

                    
                    <ul>
                      <li> <b>Familiarize yourself with the keyboard layout:</b> Learn the arrangement of keys on 
                          the keyboard, including the row of letters, numbers, and special characters.</li>
                      <li><b>Position your fingers correctly:</b>Place your fingers on the designated home row 
                            keys (ASDF for the left hand and JKL; for the right hand) to establish a starting 
                             position for typing.</li>
                      
                    </ul>
                    </div>
               
               <div class="left step-3">
               <div className='step'><h1>Step-3</h1></div>

                      <h1 style={{textAlign: 'center'}}><BsSuitDiamondFill/>Develop Muscle Memory<BsSuitDiamondFill/></h1>
                      <div>
                      <img src={muscleMemory} alt='muscleMemory' title='Musclememory' className='muscle animated'/>
                    </div>
                <ul>
                  <li>Muscle memory plays a crucial role in typing speed and accuracy.</li>
                  <li>Practice regularly to train your fingers to automatically reach for the correct keys without 
                   looking at the keyboard.</li>
                  <li>Engage in typing exercises and drills that focus on repetition and finger movement patterns to 
                   reinforce muscle memory.</li>
                </ul>

           </div>

           <div class="right" id='step-4'>
                    <div className='step'><h1>Step-4</h1></div>

                       <h1 style={{textAlign: 'center'}}><BsSuitDiamondFill/>Improve Typing Speed<BsSuitDiamondFill/></h1>
                      
                        <img src={speedGraph} alt='speedGraph' title='Speedgraph' className='speed-up animated'/>
                        
                        <ul>
            <li>Utilize online <a href='/' style={{ background: 'yellow', borderRadius: '50px', padding: '3px'}}><strong title='TypingPro'>Typing Speed Tests</strong></a> and interactive typing lessons to assess and enhance 
              your typing speed.</li> 
            
            <li>Set achievable goals to gradually increase your typing speed over time.</li>
            <li>Concentrate on rhythm and flow, maintaining a consistent pace while minimizing errors.</li>

            <li>Focus on <strong>accuracy </strong>by typing with precision, minimizing errors, and correcting mistakes 
                promptly.</li>
           
            <li>Utilize typing software or applications that provide real-time feedback and error analysis to identify 
             areas for improvement.</li>
            <li>Learn and implement proper typing techniques such as utilizing the correct finger for each key and 
               maintaining good posture while typing.</li>
            </ul>
                      
             </div>
    </div>
    <Footer/>
  </>
  )
}

export default Tutorial;                       
                                  
                                  