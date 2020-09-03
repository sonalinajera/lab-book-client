import React from 'react';
import Header from '../Header/Header'
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import ExperimentsPage from '../../routes/UserHomePage/UserHomePage';
import ExperimentPage from '../../routes/ExperimentPage/ExperimentPage';

function App() {
  return (
    <div className='App'>
      <header className='App_header'>
      <Header/>
      </header>
    <main className='App_main'>
      
      <h2>LabBook </h2>
      <Switch>
        <Route 
          exact
          path={'/'}
          component={LandingPage}/>
        <Route 
          exact
          path={'/experiments'}
          component={ExperimentsPage}
          />
        <Route 
          exact
          path={'/experiments/:experiments_id'}
          component={ExperimentPage}
          />
      </Switch>

    </main>
    </div>
  );
}

export default App;