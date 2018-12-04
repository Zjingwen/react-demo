import React,{Component,useState,useEffect} from 'react';

function FriendStatus(props){
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status){
    // console.log(status);
    setIsOnline(status.isOnline);
  };

  function subScript(f){
    f({isOnline: 1});
    console.log('subScript');
  };

  function unSubScript(f){
    f({isOnline: 0});
    console.log('unSubScript');
  };

  useEffect(()=>{
    subScript(handleStatusChange,);
    
    return ()=> {
      unSubScript(handleStatusChange);    
    }
  },[]);
  
  console.log(props);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

class Hooks extends Component{
  constructor(props){
    super(props);
    console.log('constructor');
    this.state = {
      show: true,
    }
  };

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  render(){
    const {show} = this.state;
    return(
      <React.Fragment>
        <h1>Hooks</h1>
        {show && <FriendStatus text='1111'/>}
        <button onClick={()=> this.setState({show: !show})}>show</button>
      </React.Fragment>
    );
  }
};

export default Hooks;
