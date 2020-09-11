import React from 'react';
import Header from '../Header/Header'
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import ExperimentsPage from '../../routes/UserHomePage/UserHomePage';
import ExperimentPage from '../../routes/ExperimentPage/ExperimentPage';
import NotFound from '../../routes/NotFound/NotFound'
import ObservationPage from '../../routes/ObservationPage/ObservationPage'
import NewExperimentForm from '../../routes/NewExperimentForm/NewExperimentForm'
import NewObservationForm from '../../routes/NewObservationForm/NewObservationForm';
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'

function App() {
  
  return (
    <div className='App'>
      <header className='App_header'>
        <Header />
      </header>
      <main className='App_main'>

        <Switch>
          <Route
            exact
            path={'/'}
            component={LandingPage} />
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
            component={NewExperimentForm}
          />
          <Route
            exact
            path={'/observations/:observation_id'}
            component={ObservationPage}
          />
          <Route
            exact
            path={'/newObservation'}
            component={NewObservationForm}
          />
          <Route
            exact
            path={'/login'}
            component={LoginPage}
          />
           <Route
              path={'/register'}
              component={RegistrationPage}
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