import React from 'react';
import Header from '../Header/Header'
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import ExperimentsPage from '../../routes/UserHomePage/UserHomePage';
import ExperimentPage from '../../routes/ExperimentPage/ExperimentPage';
import NotFound from '../../routes/NotFound/NotFound'
import newExperimentFrom from '../../routes/newExperimentForm/newExperimentFrom';
import ObservationPage from '../../routes/ObservationPage/ObservationPage'
import newObservationForm from '../../routes/newObservationForm/newObservationForm';

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
        <Route 
          exact
          path={'/newExperiment'}
          component={newExperimentFrom}
        />
        <Route 
          exact
          path={'/observations/:observation_id'}
          component={ObservationPage}
          />
          <Route 
          exact
          path={'/newObservation'}
          component={newObservationForm}
        />
        <Route
              component={NotFound}
            />
  
      </Switch>

    </main>
    </div>
  );
}

export default App;