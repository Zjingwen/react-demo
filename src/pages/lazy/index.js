/* eslint-disable */
import React, {
  Component,
  lazy,
  Suspense,
} from 'react';
import Fieldset from '@Component/Fieldset';

const TimeFun = lazy(()=> import('./TimeFun'));
const TimeClass = lazy(()=> import('./TimeClass'));

class Index extends Component {
  render() {
    const Time = new Date().toString();
    return (
      <Fieldset title='lazy'>
      <Suspense fallback={<div>Loading...</div>}>
        <p>parent: {Time}</p>
        <TimeFun />
        <TimeClass />
      </Suspense>
      </Fieldset>
    );
  }
}

export default Index;