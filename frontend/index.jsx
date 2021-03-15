import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
// import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser.id
      }
    };
  }
  const store = createStore(preloadedState);

//   ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<h1>Hi</h1>, root);

})