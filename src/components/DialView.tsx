import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer'; // Import the React Speedometer component
import './DialView.css'; // Import your CSS file

interface DialProps {
  min: number;
  max: number;
  current: number;
}

const DialView: React.FC<DialProps> = ({ min, max, current }) => {
  const textColor = '#000'; // Define text color

  return (
    <div className="dial-container">
      <ReactSpeedometer
        minValue={min}
        maxValue={max}
        value={current}
        needleColor="steelblue"
        textColor={textColor}
        currentValueText={`Today's Push-ups: ${current}`} // Display current value as text
        
      />
      
    </div>
  );
};

export default DialView;