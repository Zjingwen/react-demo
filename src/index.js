import React from 'react';
import ReactDOM from 'react-dom';

class Cat extends React.Component{
  render(){
    const mouse = this.props.mouse;
    const STYLE={
      width: '100px',
      height: '100px',
      backgroundColor: '#FF00FF',
      position: 'absolute',
      left: mouse.x,
      top: mouse.y
    };

    return(
      <div style={STYLE}></div>
    )
  }
}

class MouseTracker extends React.Component{
  constructor(props){
    super(props);
    this.state={
      x: 0,
      y: 0,
    };
  }

  handleMouseMove(event){
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render(){
    return (
    <div style={{ height: '100%' }} onMouseMove={(e)=> this.handleMouseMove(e)}>
      <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      {this.props.render(this.state)}
    </div>
    )
  }
}

class App extends React.Component{
  constructor(){
    super();
  };

  render(){
    return(
      <React.Fragment>
        <h1>Move the mouse around!</h1>
        <MouseTracker render={mouse=>(
          <Cat mouse={mouse}/>
        )}/>
      </React.Fragment>
    )
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);