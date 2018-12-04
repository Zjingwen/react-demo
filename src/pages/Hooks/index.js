import React,{Component,useState,useEffect} from 'react';
import Fieldset from '../../component/Fieldset';

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
    subScript(handleStatusChange,);
    
    return ()=> {
      unSubScript(handleStatusChange);    
    }
  });
  
  if (isOnline === null) {
    return <p>Loading...</p>;
  };

  return <p>{isOnline ? 'Online' : 'Offline'}</p>;
};

function UseStateComponent(){
  const [count, setCount] = useState(0);

  return(
    <React.Fragment>
      <p>Count: {count}</p>
      <button onClick={()=>{setCount(count+1)}}>++</button>
      <button onClick={()=>{setCount(count-1)}}>--</button>
    </React.Fragment>
  )
};

class Hooks extends Component{
  constructor(props){
    super(props);
    this.state = {
      show: true,
      effectState: '',
    }
  };

  handleEffect(e){
    this.setState({
      effectState: e,
    })
  }

  render(){
    const {show,effectState} = this.state;
    return(
      <React.Fragment>
        <h1>Hooks</h1>
        <Fieldset title='useState'>
          <UseStateComponent />
        </Fieldset>

        <Fieldset title='useEffect'>
          <p>effectState: {effectState}</p>
          {show && <UseEffectComponent callback={(e)=> this.handleEffect(e)}/>}
          <button onClick={()=> this.setState({show: !show})}>show</button>
        </Fieldset>
      </React.Fragment>
    );
  }
};

export default Hooks;
