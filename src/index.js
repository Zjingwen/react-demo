import React from 'react';
import ReactDOM from 'react-dom';

const App = function(){
  return(
    <React.Fragment>
      <h1>hello React</h1>
    </React.Fragment>
  )
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);