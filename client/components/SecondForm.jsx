import React from 'react';
import * as types from '../types';
import SaveButton from './SaveButton.jsx';

export default class SecondForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
  }

  updateFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  updateLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  updatePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value.toString()
    });
  }

  render() {

    return (

      <div className="fh content-container flex-column-centered" id="right-content">
        <form className="flex-column">
          <span>First Name:</span>
          <input
            placeholder="First name..."
            onChange={(e) => {
              this.updateFirstName(e);
            }}
          />
          <span>Last Name:</span>
          <input
            placeholder="Last name..."
            onChange={(e) => {
              this.updateLastName(e);
            }}
          />
          <span>Phone Number:</span>
          <input
            placeholder="(xxx) xxx-xxxx"
            onChange={(e) => {
              this.updatePhoneNumber(e);
            }}
          />
        </form>
        <SaveButton
          onClick={() => this.props.actions.updateFormThunk(types.UPDATE_FORM_TWO, this.state, this.props.userId)}
          label="Save"
        />
      </div>

    );

  }
}