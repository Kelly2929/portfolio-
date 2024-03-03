import React, { useState } from 'react';
import './App.css'; 
function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 2 },
    { name: "Python", votes: 4 },
    { name: "JavaScript", votes: 5 }, 
    { name: "Java", votes: 1 }
  ]);

  const incrementVote = (languageName) => {
    setLanguages(languages.map(lang => {
      if (lang.name === languageName) {
        return { ...lang, votes: lang.votes + 1 };
      }
      return lang;
    }));
  };

  return (
    <div className="vote-container">
      <h1>Vote Your Language!</h1>
      {languages.map((language, index) => (
        <div key={index} className="language-row">
          <div className="votes">{language.votes}</div>
          <div className="language-name">{language.name}</div>
          <button onClick={() => incrementVote(language.name)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;
