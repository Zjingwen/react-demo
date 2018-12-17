import React from 'react';
import Fieldset from '@Component/Fieldset';

function createFactory() {
  const li = React.createFactory('li');
  const Child1 = li(null, 'child-1');
  const Child2 = li(null, 'child-2');

  const Root = React.createElement('ul', '', Child1, Child2);

  return (
    <Fieldset title='createFactory'>
      {Root}
    </Fieldset>
  );
}

export default createFactory;
