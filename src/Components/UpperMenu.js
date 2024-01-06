// Import React and the useTestMode hook from the TestModeContext
import React from 'react';
import { useTestMode } from '../Context/TestModeContext';

// Functional component for the upper menu, displaying countdown and time mode options
const UpperMenu = ({ countDown }) => {
  // Destructure setTestTime from the useTestMode hook
  const { setTestTime } = useTestMode();

  // Function to update the test time based on the selected time mode
  const updateTime = (e) => {
    setTestTime(Number(e.target.id));
  };

  // JSX rendering for the upper menu component
  return (
    <div className='upper-menu'>
      {/* Display the countdown */}
      <div className='counter'>
        <div className='countdown-text'>{countDown}</div>
      </div>

      {/* Display time mode options with click handlers to update the test time */}
      <div className='modes'>
        <div className='time-mode' id={15} onClick={updateTime}>
          15s
        </div>
        <div className='time-mode' id={30} onClick={updateTime}>
          30s
        </div>
        <div className='time-mode' id={60} onClick={updateTime}>
          60s
        </div>
        <div className='time-mode' id={75} onClick={updateTime}>
          75s
        </div>
      </div>
    </div>
  );
};

// Export the UpperMenu component as the default export
export default UpperMenu;
