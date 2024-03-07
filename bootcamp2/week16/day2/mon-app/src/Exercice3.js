
  
import React, { Component } from 'react';
import './Exercice.css';
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
class Exercice extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is a Paragraph</p>
        <a href="https://www.example.com">This is a Link</a>
        <form>
          <label>
            This is a Form:
            <input type="text" name="name" placeholder="Enter your name"/>
          </label>
          <button type="submit">Submit</button>
        </form>
        <img src="display-images-in-react-8ff1f5b1cf9a" width="150" height="100" alt="React Logo" />
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}
export default Exercice;










