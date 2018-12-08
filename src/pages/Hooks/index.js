import React from 'react';

import UseEffectComponent from './UseEffectComponent';
import UseStateComponent from './UseStateComponent';
import UseContentComponent from './useContextComponent';
import UseReducerComponent from './useReducerComponent';
import TodosComponent from './TodosComponent';


function Hooks(){
  return(
    <React.Fragment>
      <h1>Hooks</h1>
      <UseStateComponent />
      <UseEffectComponent />
      <TodosComponent />
      <UseContentComponent />
      <UseReducerComponent />
    </React.Fragment>
  );
};

export default Hooks;
