import React from 'react';
import { BrowserRouter as Router, Switch, Route, hashHistory } from 'react-router-dom';

import Landing from './components/Landing.jsx';
import Onboard from './components/Onboard.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hi!'
    };
  }

  render() {

    const { formIndex, userId, actions } = this.props;

    return (

      <div className="fw fh flex-row-centered">
        <Router history={hashHistory}>
          <Switch>
            <Route exact path="/" render={() => <Landing formIndex={formIndex} actions={actions} userId={userId} />} />
            <Route path="/onboard" render={() => <Onboard formIndex={formIndex} actions={actions} userId={userId} />} />
          </Switch>
        </Router>
      </div>

    );

  }
}