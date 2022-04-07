import React from 'react';
import StartWizard from '../StartWizard/StartWizard';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from '../../layouts/MainLayout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/start">
            <StartWizard/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
