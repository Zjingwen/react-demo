import React from 'react';

import UseEffectComponent from './UseEffectComponent';
import UseStateComponent from './UseStateComponent';
import UseContentComponent from './UseContextComponent';
import UseReducerComponent from './UseReducerComponent';
import TodosComponent from './TodosComponent';
import UseCallbackComponent from './UseCallbackComponent';
import UseMemoComponent from './UseMemoComponent';
import UseRefComponent from './UseRefComponet';

function Hooks(){
  return(
    <React.Fragment>
      <h1>Hooks</h1>
      <TodosComponent />
      <UseStateComponent />
      <UseEffectComponent />
      <UseContentComponent />
      <UseReducerComponent />
      <UseCallbackComponent />
      <UseMemoComponent />
      <UseRefComponent />
    </React.Fragment>
  );
};

export default Hooks;
