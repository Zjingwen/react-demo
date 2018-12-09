import React,{useReducer} from 'react';
import Fieldset from '@Component/Fieldset';

function reducer(state,action){
  switch(action){
    case 'reset':
      return 0;
      break;
    case 'increment':
      return state+1;
      break;
    case 'decrement':
      return state-1;
      break;
    default:
      return state;
  };
};

function useReduceComponent(){
  const [state,dispatch] = useReducer(reducer,0,'reset');

  return (
    <Fieldset title='useReduce'>
      <p>{state}</p>
      <input type='button' value='++' onClick={()=>dispatch('increment')}/>
      <input type='button' value='--' onClick={()=>dispatch('decrement')}/>
      <input type='button' value='reset' onClick={()=>dispatch('reset')}/>
    </Fieldset>
  );
};

export default useReduceComponent;