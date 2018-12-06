import React,{useState,useEffect} from 'react';
import Fieldset from '@Component/Fieldset';
import axios from 'axios';

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
      <p id='useEffect-A-count'>Count: </p>
      <input type='button' value='更新' onClick={handleClick}/>
    </Fieldset>
  )
};

function B(){
  const [show,setShow] = useState(true);
  
  function Child(){
    useEffect(()=>{
      console.log('componentDidMount');
      return ()=>{
        console.log('componentWillUnmount');
      }
    });

    return (
      <React.Fragment>
        <p>B-Child</p>
      </React.Fragment>
    )
  };
  
  return (
    <Fieldset title='useEffect-在componentWillUnmunt时触发'>
      <p>请查看log</p>
      <input type='button' value='show' onClick={()=>setShow(!show)}/>
      {show && <Child/>}
    </Fieldset>
  )
};

function C(){
  const json = axios.get('/api/user');
  json.then(res=>{
    const data = res.data.result;
    console.log(data);
  });
  return (
    <Fieldset title='useEffect-ajax请求数据'>
      TODO
    </Fieldset>
  )
};

function UseEffectComponent(){
  return(
    <React.Fragment>
      <A />
      <B />
      <C />
    </React.Fragment>
  )
};

export default UseEffectComponent;