import React from 'react';

const SaveButton = (props) => {

  return (

    <div className="flex-column-centered button bg-blue font-white" onClick={props.onClick}>
      {props.label}
    </div>

  );

};

export default SaveButton;