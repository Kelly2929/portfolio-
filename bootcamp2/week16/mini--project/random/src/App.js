import React, { useState, useEffect } from 'react';
import './App.css';
import quotes from './QuotesDatabase'; 

const QuoteBox = () => {

  const [quote, setQuote] = useState(quotes[0]);
  const [color, setColor] = useState(generateRandomColor());

  useEffect(() => {
    setQuote(generateRandomQuote());
  }, []); 

  function generateRandomQuote() {
    let index;
    let newQuote;
    do {
      index = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[index];
    } while (newQuote === quote);
    return newQuote;
  }

  function generateRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  }

  function handleNewQuote() {
    setQuote(generateRandomQuote());
    setColor(generateRandomColor());
  }

  const style = {
    backgroundColor: color,
    color: color
  };

  return (
    <div id="quote-box" style={{ backgroundColor: style.backgroundColor }}>
      <h1 id="quote" style={{ color: style.color }}>{quote?.quote}</h1>
      <p id="author">{quote?.author}</p>
      <button id="new-quote" style={{ backgroundColor: style.color }} onClick={handleNewQuote}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteBox;


