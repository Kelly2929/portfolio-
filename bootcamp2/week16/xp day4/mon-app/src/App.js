
import React from 'react';
import Car from './Components/Car'; 

import ReactDOM from 'react-dom';
import Events from './Events'; 

;

ReactDOM.render(<App />, document.getElementById('root'));







const App = () => {
  const carInfo = {name: "Ford", model: "Mustang"};

  return (
    <div>
      <Events />
      <Car carInfo={carInfo} />
    </div>
  );
}

export default App;
