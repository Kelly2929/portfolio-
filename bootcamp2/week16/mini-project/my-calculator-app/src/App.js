
import React, { useState } from 'react';

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    switch(operation) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        if (number2 === 0) {
          alert('Cannot divide by zero');
          return;
        }
        setResult(number1 / number2);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <input 
        type="number" 
        value={number1} 
        onChange={(e) => setNumber1(+e.target.value)} 
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input 
        type="number" 
        value={number2} 
        onChange={(e) => setNumber2(+e.target.value)} 
      />
      <button onClick={handleCalculate}>Calculate</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
