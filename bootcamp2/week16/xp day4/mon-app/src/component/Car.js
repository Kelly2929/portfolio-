// src/Components/Car.js
import React, { useState } from 'react';
import Garage from './Garage.js'; // Import the Garage component

const Car = ({ carInfo }) => {
  const [color, setColor] = useState("red"); // Assuming you've added a color state from Part II

  return (
    <div>
      <h2>This car is {color} {carInfo.model}</h2>
      <Garage size="small" /> {/* Include Garage component with size prop */}
    </div>
  );
};

export default Car;
