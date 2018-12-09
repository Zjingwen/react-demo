import React,{useRef} from 'react';
import Fieldset from '@Component/Fieldset';

function useRefComponent(){
  const inputEl = useRef(null);
  
  function handleClick(){
    inputEl.current.focus();
  }
  return(
    <Fieldset title='useRef'>
      <input type='input' placeholder='useRef' ref={inputEl} />
      <input type='button' value='获取焦点' onClick={handleClick} />
    </Fieldset>
  )
};

export default useRefComponent;