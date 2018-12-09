import React,{
  useState,
  useEffect,
  useLayoutEffect,
  useMutationEffect,
} from 'react';
import Fieldset from '@Component/Fieldset';

function Effect(){
  const [state,setState] = useState('请看log')
  useEffect(()=>{
    setTimeout(()=>{
      console.log('useEffect');
    });
  },[]);

  useLayoutEffect(()=>{
    setTimeout(()=>{
      console.log('useLayoutEffect');
    });
  },[]);

  useMutationEffect(()=>{
    setTimeout(()=>{
      console.log('useMutationEffect');
    });
  },[]);

  return (
    <React.Fragment>
      {state}
    </React.Fragment>
  )
}

function useMutationEffectComponent(){
  const [show,setShow] = useState(false);
  return (
    <Fieldset title='useMutationEffect'>
      { show && <Effect />}
      <input type='button' value='show' onClick={()=>setShow(!show)}/>
    </Fieldset>
  )
};

export default useMutationEffectComponent;