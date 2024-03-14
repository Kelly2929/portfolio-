import { useState } from "react";
import "./App.css";
import EventExample from "./components/EventExample";

function App() {
  const [countapp, setCountApp] = useState(10);
  return (
    <>
      {/* <h2>Forms</h2>
      <h2>Error Boundary</h2> */}
      <h2>Event Handler</h2>
      {countapp}
      <EventExample />
    </>
  );
}

export default App;