import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store = createStore();
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: {
        currentUser: window.currentUser.id
      }
    };
    store = createStore(preloadedState);
    delete window.currentUser;
  } else {
    store = createStore();
  }
  


  // TEST START
  // window.dispatch = store.dispatch;
  // window.getState = store.getState;
  // ReactDOM.render(<h1>Hi</h1>, root);
  // TEST END
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

})