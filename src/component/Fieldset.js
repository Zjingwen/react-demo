import React from 'react';

const Fieldset = function(props){
  return(
    <fieldset>
      <legend>{props.title}</legend>
      {props.children}
    </fieldset>
  );
};

Fieldset.defaultProps = {
  title: 'fieldset'
}

export default Fieldset;