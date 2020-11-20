import React, { useState } from 'react'; /* STEP 0 */

export default function Spinner() {
const [spinnerOn, setSpinnerOn] = useState(true);

  const toggleSpinner = () => {
    setSpinnerOn(!spinnerOn)
  };

  return (
    <div className='widget-spinner container'>
      <h2>Spinner</h2>
      {
        spinnerOn && <div id='spinner' className='spinner'>--+--</div> 
      }
      <button id='toggleSpinner' onClick={toggleSpinner}>
        {spinnerOn ? 'Show' : 'Hide'}  
      </button>
    </div>
  );
}
