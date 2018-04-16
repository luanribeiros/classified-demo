import React from 'react'
import { render } from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

render(
  <App />,
  document.querySelector('[data-js="root"]')
);
registerServiceWorker();
