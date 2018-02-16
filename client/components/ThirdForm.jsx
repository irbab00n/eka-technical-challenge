import React from 'react';
import * as types from '../types';
import SaveButton from './SaveButton.jsx';

export default class ThirdForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      streetAddress: '',
      city: '',
      state: '',
      zipCode: ''
    }
    this.updateStreetAddress = this.updateStreetAddress.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateZipCode = this.updateZipCode.bind(this);
  }

  updateStreetAddress(e) {
    this.setState({
      streetAddress: e.target.value
    });
  }

  updateCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  updateState(e) {
    this.setState({
      state: e.target.value
    });
  }

  updateZipCode(e) {
    this.setState({
      zipCode: e.target.value.toString()
    });
  }

  render() {

    return (

      <div className="fh content-container flex-column-centered" id="right-content">
        <form className="flex-column">
          <span>Address:</span>
          <input 
            placeholder="Enter Address..."
            onChange={(e) => {
              this.updateStreetAddress(e);
            }}
          />
          <span>City:</span>
          <input 
            placeholder="Enter City..."
            onChange={(e) => {
              this.updateCity(e);
            }}
          />
          <span>State:</span>
          <input 
            placeholder="Enter State..."
            onChange={(e) => {
              this.updateState(e);
            }}
          />
          <span>Zip Code:</span>
          <input
            placeholder="Enter Zipcode..."
            onChange={(e) => {
              this.updateZipCode(e);
            }}
          />
        </form>
        <SaveButton
          onClick={() => this.props.actions.updateFormThunk(types.UPDATE_FORM_THREE, this.state)}
          label="Save"
        />
      </div>

    );

  }
}