import React,{useState,useEffect} from 'react';

function UseEffectComponent(props){
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status){
    setIsOnline(status.isOnline);
  };

  function subScript(f){
    f({isOnline: 1});
    props.callback('subScript');
  };

  function unSubScript(f){
    f({isOnline: 0});
    props.callback('unSubScript');
  };

  useEffect(()=>{
    subScript(handleStatusChange);
    
    return ()=> {
      unSubScript(handleStatusChange);    
    }
  });
  
  if (isOnline === null) {
    return <p>Loading...</p>;
  };

  return <p>{isOnline ? 'Online' : 'Offline'}</p>;
};

export default UseEffectComponent;