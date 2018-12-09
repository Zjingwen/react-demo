import React from 'react';

import UseEffectComponent from './UseEffectComponent';
import UseStateComponent from './UseStateComponent';
import UseContentComponent from './UseContextComponent';
import UseReducerComponent from './UseReducerComponent';
import TodosComponent from './TodosComponent';
import UseCallbackComponent from './UseCallbackComponent';
import UseMemoComponent from './useMemoComponent';

function Hooks(){
  return(
    <React.Fragment>
      <h1>Hooks</h1>
      <UseStateComponent />
      <UseEffectComponent />
      <TodosComponent />
      <UseContentComponent />
      <UseReducerComponent />
      <UseCallbackComponent />
      <UseMemoComponent />
    </React.Fragment>
  );
};

export default Hooks;
