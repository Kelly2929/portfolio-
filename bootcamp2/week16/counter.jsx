import { useState } from "react";

const Counter = (props) => {
  //   console.log(props);
  const [number, setNumber] = useState(0);
  //   let count = 0;

  const add = () => {
    // count++;
    setNumber(number + 1);
    // console.log("count=>", count);
  };
const minus=()=>{
    setNumber(number-1);
}
  return (
    <div>
      <button> onClick={minus}- </button>
      <h2>Counter: {number}</h2>
      <button onClick={add}> + </button>
    </div>
  );
};
export default Counter;