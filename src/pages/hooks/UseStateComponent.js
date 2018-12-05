import React,{useState} from 'react';

function UseStateComponent(){
  const [count, setCount] = useState(0);

  return(
    <React.Fragment>
      <p>Count: {count}</p>
      <button onClick={()=>{setCount(count+1)}}>++</button>
      <button onClick={()=>{setCount(count-1)}}>--</button>
    </React.Fragment>
  )
};

export default UseStateComponent;