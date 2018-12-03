import './style';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import routerConfig from './router';

function HOCnav (Component){
  return class extends React.Component{
    render(){
      return (
        <React.Fragment>
          <div>
            {routerConfig.map((v,i)=>{
              return <Link to={v.path} key={i}>{v.name}</Link>
            })}
          </div>
          <Component/>
        </React.Fragment>
      )
    } 
  }
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {routerConfig.map((v,i)=>{
        return <Route path={v.path} exact={v.exact} component={HOCnav(v.component)} key={i} />
      })}
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
