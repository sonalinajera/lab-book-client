import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

test('renders app without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>, div);

  //cleanup 
  ReactDOM.unmountComponentAtNode(div);
});
