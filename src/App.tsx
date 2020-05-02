import React, { useState } from 'react';
import './App.css';

const truths = ["he isn't", "he has never been", "he will never be"];

function App() {
  const [stage, setStage] = useState<number>(0);
  const onClick = () => {
    setStage(stage + 1);
  }

  console.log(`stage: ${stage}`);
  const truth = truths[stage % 3];
  const opacity = 0.01 * stage;
  return (
    <div className="App" onClick={onClick}>
      <p className="the-answer">
        {truth}
      </p>
      <img src="/wojak.png" alt="big boy" style={{ opacity: opacity }} />
    </div>
  );
}

export default App;
