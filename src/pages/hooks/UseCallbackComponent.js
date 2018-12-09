import React,{
  useCallback,
  useState,
  useEffect,
} from 'react';
import Fieldset from '@Component/Fieldset';

let InputComponentStateFunc = null;
function InputComponentState(){
  const [state,setState] = useState(0);
  function handleClick(){
    setState(state=> state+1);
  };
  
  console.group('InputComponentStateFunc');
    console.log(InputComponentStateFunc === handleClick);
  console.groupEnd();

  InputComponentStateFunc = handleClick;

  return (
    <Fieldset title='InputComponentState'>
      <input type='button' value={state} onClick={handleClick}/>
    </Fieldset>
  )
};

let InputComponentCallbackFunc = null;
function InputComponentCallback(){
  const [state,setState] = useState(0);
  const handleClick = useCallback((event) => {
    setState(state=> state+1);
    event.persist();
  },[]);
  
  console.group('InputComponentCallbackFunc');
    console.log(InputComponentCallbackFunc === handleClick);
  console.groupEnd();
  
  InputComponentCallbackFunc = handleClick;

  return (
    <Fieldset title='InputComponentCallback'>
      {}
      <input type='button' value={state} onClick={handleClick}/>
    </Fieldset>
  )
};

function MemoizedConst ({num}){
  const memoizedCallback = useCallback(()=>{
    return num;
  },[]);

  return (
    <Fieldset title='MemoizedConst'>
      <p>记忆 num > {memoizedCallback()}</p>
      <p>原始 num > {num}</p>
    </Fieldset>
  )
};

function MemoizedLet ({num}){
  const memoizedCallback = useCallback(()=>{
    return num;
  },[num]);

  return (
    <Fieldset title='MemoizedLet'>
      <p>记忆 num > {memoizedCallback()}</p>
      <p>原始 num > {num}</p>
    </Fieldset>
  )
};

function UseCallbackComponent (){
  let [num,setNum] = useState([1,2,3]);
  useEffect(()=>{
    setTimeout(function(){
      setNum([3,4,5])
    },3000);
  },[]);
  
  return (
    <Fieldset title='useCallback'>
      <InputComponentState />
      <InputComponentCallback />
      <MemoizedConst num={num}/>
      <MemoizedLet num={num}/>
    </Fieldset>
  );
};

export default UseCallbackComponent;