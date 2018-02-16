import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import actions from './actions';
import reducers from './reducers';

import App from './App.jsx';

import '../public/style.css';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

const ConnectedApp = connect(
  state => state,
  mapDispatchToProps
)(App);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);