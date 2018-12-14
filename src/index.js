import './style';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import routerConfig from './router';
import Fieldset from './component/Fieldset';

function HOCnav(Component) {
  return class Hoc extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Fieldset title='head'>
            {routerConfig.map((v, i)=>{
              return <Link to={v.path} key={i}>{v.name}</Link>;
            })}
          </Fieldset>
          <Component />
        </React.Fragment>
      );
    }
  };
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {routerConfig.map((v, i)=>{
        v.component = HOCnav(v.component);
        return <Route {...v} exact key={i} />;
      })}
    </Switch>
  </BrowserRouter>,
  document.getElementById('app'),
);
