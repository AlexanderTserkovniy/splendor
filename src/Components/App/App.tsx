import React from 'react';
import cover from '../../images/cover.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <article className="App-header">
        <img src={cover} className="App-cover" alt="cover" />
      </article>
    </div>
  );
}

export default App;
