import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import NewUser from './NewUser';

test('renders app without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter>
    <NewUser />
  </BrowserRouter>, div);

  //cleanup 
  ReactDOM.unmountComponentAtNode(div);
});
