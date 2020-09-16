import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import ExistingUser from './ExistingUser';

test('renders app without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter>
    <ExistingUser />
  </BrowserRouter>, div);

  //cleanup 
  ReactDOM.unmountComponentAtNode(div);
});
