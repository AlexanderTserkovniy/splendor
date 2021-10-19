import React from 'react';
import cover from '../../images/cover.jpeg';
import StartWizard from '../StartWizard/StartWizard';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <header>
          <Link to="/">
            <h1 className={styles.heading}>
              <img src={cover} alt="Cover" className={styles.cover} />
              <span className="text">
              Splendor the Board Game
            </span>
            </h1>
          </Link>
        </header>
        <article>
          <p>
            <Link to="/start">Start new game</Link>
          </p>

          <Switch>
            <Route path="/start">
              <StartWizard />
            </Route>
          </Switch>
        </article>
      </div>
    </Router>
  );
}

export default App;
