import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import './base.css';

import Landing from './components/landing';
import Home from './components/home';

import reportWebVitals from './reportWebVitals';
import Footer from './components/footer';

/*Load in roboto font */
WebFont.load({
  google: {
    families: ['Roboto Mono']
  }
});

/**  
 * @TODO Need to have logic to check for login, if logged in go straight to home, else go to landing

*/

ReactDOM.render(
  <React.StrictMode>
    <Landing />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
