import React from 'react';
import cover from '../../images/cover.jpeg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header>
        <img src={cover} alt="Cover" className={styles['App-cover']} />
      </header>
    </div>
  );
}

export default App;
