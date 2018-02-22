import React from 'react';
import * as types from '../types';
import SaveButton from './SaveButton.jsx';

export default class FirstForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  updateUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  render() {

    return (

      <div className="fh content-container flex-column-centered" id="right-content">
        <form className="flex-column">
          <span>Username:</span>
          <input 
            placeholder="Enter username..."
            onChange={(e) => {
              this.updateUsername(e);
            }}
          />
          <span>Password:</span>
          <input 
            placeholder="Enter password..."
            onChange={(e) => {
              this.updatePassword(e);
            }}
          />
          <span>Email:</span>
          <input placeholder="Enter email..."
            placeholder="Enter password..."
            onChange={(e) => {
              this.updateEmail(e);
            }}
          />
        </form>

        <SaveButton
          onClick={() => this.props.actions.updateFormThunk(types.UPDATE_FORM_ONE, this.state, this.props.userId)}
          label="Save"
        />
      </div>

    );

  }
}