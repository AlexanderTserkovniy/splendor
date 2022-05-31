import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Layout from '../../layouts/MainLayout';

const LazyStartWizard = lazy(() => import('../StartWizard/StartWizardInjected'));
const LazyGame = lazy(() => import('../Game/Game'));

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/start"
            element={
              <Suspense fallback={'Loading...'}>
                <LazyStartWizard />
              </Suspense>
            }
          />
          <Route
            path="/game"
            element={
              <Suspense fallback={'Loading...'}>
                <LazyGame />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
