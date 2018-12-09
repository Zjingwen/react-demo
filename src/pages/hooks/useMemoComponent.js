import React,{
  useMemo,
  useState,
  useEffect,
} from 'react';
import Fieldset from '@Component/Fieldset';

function MemoizedLet({num}){
  const memo = useMemo(()=> num,[]);

  return (
    <Fieldset title='MemoizedLet'>
      <p>记忆 num > {memo}</p>
      <p>原始 num > {num}</p>
    </Fieldset>
  )
};

function MemoizedConst({num}){
  const memo = useMemo(()=> num,[num]);

  return (
    <Fieldset title='MemoizedConst'>
      <p>记忆 num > {memo}</p>
      <p>原始 num > {num}</p>
    </Fieldset>
  )
};

function useMemoComponent(){
  const [num,setNum] = useState([1,2,3]);

  useEffect(()=>{
    setTimeout(()=>{
      setNum([3,4,5]);
    },3000);
  },[]);

  return (
    <Fieldset title='useMemoComponent'>
      <MemoizedLet num={num} />
      <MemoizedConst num={num}/>
    </Fieldset>
  )
};

export default useMemoComponent;