import React,{
  useImperativeMethods,
  useRef,
  forwardRef,
} from 'react';
import Fieldset from '@Component/Fieldset';

function FancyInput(props,ref){
  const inputRef = useRef(null);
  useImperativeMethods(ref,()=>({
    focus: ()=>{
      inputRef.current.focus();
    }
  }));

  return <input type='input' placeholder='useRef' ref={inputRef}/>
};

const Input = forwardRef(FancyInput);

function UseImperativeMethodsComponent(){
  const fancyInputRef = useRef(null);
  function handleClick(){
    fancyInputRef.current.focus();
  };

  return (
    <Fieldset title='UseImperativeMethods'>
      <Input ref={fancyInputRef}/>
      <input type='button' value='获取焦点' onClick={handleClick}/>
    </Fieldset>
  )
};

export default UseImperativeMethodsComponent;