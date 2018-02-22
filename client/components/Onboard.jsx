import React from 'react';
import FirstForm from './FirstForm.jsx';
import SecondForm from './SecondForm.jsx';
import ThirdForm from './ThirdForm.jsx';

const headers = [
  'Please enter an account name, a password, and your email',
  'Please enter your first name, last name, and phone number',
  'Please enter in your full address'
];

export default class Onboard extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  renderHeader(index) {
    return headers[index];
  }

  renderForm(forms, index) {
    return forms[index];
  }

  render() {

    let { userId, actions } = this.props

    const forms = [
      <FirstForm actions={actions} userId={userId}/>,
      <SecondForm actions={actions} userId={userId}/>,
      <ThirdForm actions={actions} userId={userId}/>
    ];

    return(

      <div className="fh fw flex-column-centered">

      <div>
        <h1>
          EKA Technical Challenge
        </h1>
      </div>

      <div className="fh fw flex-dynamic-centered bg-blue">
        <div className="content-container flex-row-centered">
          <h2 className="font-white">
            <center>
              {
                this.renderHeader(this.props.formIndex)
              }
            </center>
          </h2>
        </div>
        {
          this.renderForm(forms, this.props.formIndex)
        }
      </div>

    </div>

    );

  }
}