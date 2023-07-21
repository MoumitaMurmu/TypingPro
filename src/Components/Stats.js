import React, { useEffect } from 'react'


import { toast } from 'react-toastify';
import { auth, db } from '../firebaseConfig';
import { Button } from '@mui/material';
import Graph from './Graph';

const Stats = (
    {wpm,
    accuracy,
    correctChars,
    incorrectChars,
    missedChars,
    extraChars,
    graphData,
    resetTest,
    
  }
) => {

let timeSet = new Set();
const newGraph = graphData.filter(i=>{
  if(!timeSet.has(i[0])){
    timeSet.add(i[0]);
    return i;
  }
});

  const pushDataToDB = () =>{
    
    if(isNaN(accuracy)){
      toast.error('invalid test', {
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
    const resultsRef = db.collection('Results');
    const{uid} = auth.currentUser;
    resultsRef.add({
    wpm: wpm,
    accuracy: accuracy,
    timeStamp: new Date(),
    characters:`${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
    userID: uid

  }).then((res)=>{
    toast.success('Data saved to db', {
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
    toast.error('not able to save result', {
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
 
useEffect(()=>{
if(auth.currentUser){
  pushDataToDB();
}
else{
  toast.warning('login to save result', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
},[]);

  return (
    <div className='stats-Box'>
        <div className='left-stats'>
            <div className='title'>WPM</div>
            <div className='subtitle'>{wpm}</div>
            <div className='title'>Accuracy</div>
            <div className='subtitle'>{accuracy}</div>
            <div className='title'>Charcters</div>
            <div className='subtitle'>{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>
            <div className='btn'><Button variant="contained" onClick={()=>{resetTest()}} >Back to Test</Button></div>

        </div>
        <div className='right-stats'>
            { /* graph will go here */ }
            <Graph graphData={newGraph}/>
        </div>
    </div>
  )
}

export default Stats;


