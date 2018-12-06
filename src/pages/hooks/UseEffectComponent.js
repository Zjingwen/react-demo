import React,{useState,useEffect} from 'react';
import Fieldset from '@Component/Fieldset';

function A(){
  const [count,setCount] = useState(0)

  useEffect(()=>{
    document.getElementById('useEffect-A-count').innerText = `count: ${count}`;
  });

  function handleClick(){
    setCount(count+1);
  };

  return (
    <Fieldset title='useEffect-在componentDidMount、componentDidUpdate时触发'>
      <p id='useEffect-A-count'></p>
      <input type='button' value='更新' onClick={handleClick}/>
    </Fieldset>
  )
};

function B(){
  return (
    <Fieldset title='useEffect-在componentWillUnmunt时触发'>
      TODO
    </Fieldset>
  )
};

function UseEffectComponent(){
  return(
    <React.Fragment>
      <A />
      <B />
    </React.Fragment>
  )
};

export default UseEffectComponent;