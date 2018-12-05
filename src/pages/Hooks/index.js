import React,{Component} from 'react';
import Fieldset from '@Component/Fieldset';

import UseEffectComponent from './UseEffectComponent';
import UseStateComponent from './UseStateComponent';
import TodosComponent from './TodosComponent';


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
  };

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
          <button onClick={()=> this.setState({show: !show})}>show</button>
          {show && <UseEffectComponent callback={(e)=> this.handleEffect(e)}/>}
        </Fieldset>

        <Fieldset title='todos'>
          <TodosComponent />
        </Fieldset>
      </React.Fragment>
    );
  }
};

export default Hooks;
