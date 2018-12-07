import React,{useState,useEffect} from 'react';
import Fieldset from '@Component/Fieldset';
import axios from 'axios';

function A(){
  const [count,setCount] = useState(0)

  useEffect(()=>{
    document.getElementById('useEffect-A-count').innerText = `Count: ${count}`;
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
      };
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
  const [data,setData] = useState(null);
  const getData = function(){
    const json = axios.get('/api/user');
    json.then(res=>{
      const data = res.data.result;
      setData(data);
    });
  };

  useEffect(()=>{
    getData();
  },[]);

  function handleClick(){
    getData();
  };

  return (
    <Fieldset title='useEffect-ajax请求数据'>
      <input type='button' value='更新数据' onClick={handleClick}/>
      {(()=>{
        return data && Object.keys(data).map((v,i)=><p key={i}>{v}：{data[v]}</p>)
      })()}
    </Fieldset>
  )
};

function D(){
  const [count,setCount] = useState(0);
  const [double,setDouble] = useState(count*2);
  const [three,setThree] = useState(count*3);
  
  useEffect(()=>{
    setDouble(count*2);
  },[count*2])

  useEffect(()=>{
    setThree(count*3);
  },[])// 为空数组，表示不依赖props或者state，将不会更新

  return (
    <Fieldset title='userEffect-利用第二个参数跳过效果优化'>
      <p>+1: {count}</p>
      <p>*2: {double}</p>
      <p>*3: {three}</p>
      <input type='button' value='click' onClick={()=>setCount(count+1)}/>
    </Fieldset>
  )
};

function UseEffectComponent(){
  return(
    <React.Fragment>
      <A />
      <B />
      <C />
      <D />
    </React.Fragment>
  )
};

export default UseEffectComponent;