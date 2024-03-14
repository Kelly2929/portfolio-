
import { useState } from "react";

const EventExample = (props) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello");
  const [bgColor, setBgColor] = useState("");

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
 
    >
      <h3>Event Example</h3>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => add()}>Add</button><br/>
      <button>Add One from App</button>
      <div>
        <input onChange={(e) => setMessage(e.target.value)} />
        <h4>{message}</h4>
      </div>
    </div>
  );
};

export default EventExample;