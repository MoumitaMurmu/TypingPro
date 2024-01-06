// Import necessary components and dependencies
import React, { useEffect } from 'react';
import Graph from './Graph';
import { toast } from 'react-toastify';
import { auth, db } from '../firebaseConfig';
import { Button } from '@mui/material';

// Stats component definition
const Stats = ({
  wpm,
  accuracy,
  correctChars,
  incorrectChars,
  missedChars,
  extraChars,
  graphData,
  resetTest,
}) => {
  // Use a Set to filter out duplicate time values in the graph data
  let timeSet = new Set();
  const newGraph = graphData.filter((i) => {
    if (!timeSet.has(i[0])) {
      timeSet.add(i[0]);
      return i;
    }
  });

  // Function to push data to Firebase database
  const pushDataToDB = () => {
    // Check if accuracy is a valid number
    if (isNaN(accuracy)) {
      toast.error('Invalid test', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    // Reference to the 'Results' collection in Firestore
    const resultsRef = db.collection('Results');
    const { uid } = auth.currentUser;

    // Add test results to the database
    resultsRef
      .add({
        wpm: wpm,
        accuracy: accuracy,
        timeStamp: new Date(),
        characters: `${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
        userID: uid,
      })
      .then((res) => {
        toast.success('Data saved to the database', {
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
        toast.error('Not able to save result to the database', {
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

  // useEffect hook to push data to the database when the component mounts
  useEffect(() => {
    // Check if a user is authenticated before pushing data to the database
    if (auth.currentUser) {
      pushDataToDB();
    } else {
      // Display a warning if the user is not authenticated
      toast.warning('Login to save the result', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  }, []);

  // Render the Stats component
  return (
    <div className='stats-Box'>
      <div className='left-stats'>
        <div className='title'>WPM</div>
        <div className='subtitle'>{wpm}</div>
        <div className='title'>Accuracy</div>
        <div className='subtitle'>{accuracy}</div>
        <div className='title'>Characters</div>
        <div className='subtitle'>{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>
        <div className='btn'>
          {/* Button to reset the test */}
          <Button variant="contained" onClick={() => { resetTest() }}>Back to Test</Button>
        </div>
      </div>
      <div className='right-stats'>
        {/* Graph component displaying the typing performance over time */}
        <Graph graphData={newGraph} />
      </div>
    </div>
  );
};

// Export the Stats component
export default Stats;
