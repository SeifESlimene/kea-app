import React from 'react';
import ReactDOM from 'react-dom';
// import thunkPlugin from 'kea-thunk';
// import sagaPlugin from 'kea-saga';
import { resetContext, getContext } from 'kea';
// import { loadersPlugin } from 'kea-loaders';
import listenersPlugin from 'kea-listeners';
// import localStoragePlugin from 'kea-localstorage';
// import socketPlugin from 'kea-socket.io';
// import { routerPlugin } from 'kea-router';
import { Provider } from 'react-redux';
import App from './components/App';

resetContext({
  createStore: true,
  plugins: [
    // loadersPlugin({}),
    // thunkPlugin,
    // socketPlugin,
    // sagaPlugin({ useLegacyUnboundActions: false }),
    // routerPlugin({}),
    listenersPlugin,
    // localStoragePlugin,
  ],
});

ReactDOM.render(
  <Provider store={getContext().store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
