import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Amplify from '@aws-amplify/core';

/** Presentational */
import App from './Components/App';
import { GlobalStyles } from './global';

/** Amplify config */
import awsconfig from './aws-exports';

/** Service worker */
import * as serviceWorker from './serviceWorker';

/** Configure amplify */
Amplify.configure(awsconfig);

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//based on:
//https://blog.logrocket.com/authentication-react-apps-aws-amplify-cognito/
