import React,{useState} from 'react';
import Fieldset from '@Component/Fieldset';

function UseStateComponent(){
  const [count, setCount] = useState(0);

  return(
    <Fieldset title='useState'>
      <p>Count: {count}</p>
      <button onClick={()=>{setCount(count+1)}}>++</button>
      <button onClick={()=>{setCount(count-1)}}>--</button>
    </Fieldset>
  )
};

export default UseStateComponent;