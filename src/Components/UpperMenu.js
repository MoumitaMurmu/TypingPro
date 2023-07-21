

import React, { useEffect, useState } from 'react';
import { useTestMode } from '../Context/TestModeContext';

const UpperMenu = ({ countDown}) => {
  const { setTestTime } = useTestMode();

  const updateTime = (e) => {
    setTestTime(Number(e.target.id));
  };

 

  return (
    <div className='upper-menu'>
      <div className='counter'>
        <div className='countdown-text'>{countDown}</div>

      </div>
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

export default UpperMenu;





    
             