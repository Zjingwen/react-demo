import React from 'react';
import MountingComponent from './MountingComponent';
import NewpropsComponent from './NewpropsComponent';
import SetStateComponent from './SetStateComponent';
import ForceUpdateComponent from './ForceUpdateComponent';
import GetDerivedStateFromPropsComponent from './getDerivedStateFromPropsComponent';
import ShuldComponentUpdateComponent from './shouldComponentUpdateComponent';
import GetShapshotBeforeUpdateComponent from './getShapshotBeforeUpdateComponent';

function lifecycle() {
  return (
    <div>
      <h1>生命周期</h1>
      <MountingComponent />
      <NewpropsComponent />
      <SetStateComponent />
      <ForceUpdateComponent />
      <GetDerivedStateFromPropsComponent />
      <ShuldComponentUpdateComponent />
      <GetShapshotBeforeUpdateComponent />
    </div>
  );
};
export default lifecycle;
