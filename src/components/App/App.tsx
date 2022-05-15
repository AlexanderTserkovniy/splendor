import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from '../../layouts/MainLayout';

const LazyStartWizard = lazy(() => import('../StartWizard/StartWizardInjected'));

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/start">
            <Suspense fallback={'Loading...'}>
              <LazyStartWizard />
            </Suspense>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
