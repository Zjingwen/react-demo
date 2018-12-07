import React,{
  useState,
  useContext,
  createContext,
} from 'react';
import Fieldset from '@Component/Fieldset';

const CountContext = createContext();
function A(){
  function ChildA(){
    const countChild = useContext(CountContext);
    return (
      <p>
        Child A count: {countChild * 2}
      </p>
    )
  };

  function ChildB(){
    const countChild = useContext(CountContext);
    return (
      <p>
        Child B count: {countChild * 3}
      </p>
    )
  };

  const [count,setCount] = useState(0);

  return (
    <Fieldset title='useContext'>
      <CountContext.Provider value={count}>
        <ChildA />
        <ChildB />
      </CountContext.Provider>
      <input type='button' value='++' onClick={()=>setCount(count+1)}/>
    </Fieldset>
  )
};

function UseContentComponent(){
  return(
    <React.Fragment>
      <A />
    </React.Fragment>
  )
};

export default UseContentComponent;