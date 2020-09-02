import React from 'react';
import Header from '../Header/Header'
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import ExperimentsPage from '../../routes/ExperimentsPage/ExperimentsPage';

function App() {
  return (
    <div className='App'>
      <header className='App_header'>
      <Header/>
      </header>
    <main className='App_main'>
      
      <h2>Hey girl :D </h2>
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
      </Switch>

    </main>
    </div>
  );
}

export default App;