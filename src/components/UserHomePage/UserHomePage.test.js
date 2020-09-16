import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import UserHomePage from './UserHomePage';

test('renders app without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter>
    <UserHomePage />
  </BrowserRouter>, div);

  //cleanup 
  ReactDOM.unmountComponentAtNode(div);
});
