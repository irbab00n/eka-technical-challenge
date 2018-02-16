import React from 'react';

const Landing = (props) => {

  console.log(props);

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
            Click the button to get started!
          </h2>
        </div>
        <div className="fh content-container flex-row-centered" id="right-content">
          <a href="/onboard">
            <button className="button bg-blue font-white" >
              Start Onboarding!
            </button>
          </a>
        </div>
      </div>

    </div>

  );

};

export default Landing;