import React from 'react';
import MountingComponent from './MountingComponent';
import NewpropsComponent from './NewpropsComponent';
import SetStateComponent from './SetStateComponent';
import ForceUpdateComponent from './ForceUpdateComponent';
import GetDerivedStateFromPropsComponent from './GetDerivedStateFromPropsComponent';
import ShuldComponentUpdateComponent from './ShouldComponentUpdateComponent';
import GetShapshotBeforeUpdateComponent from './GetShapshotBeforeUpdateComponent';
import ComponentDidMountComponent from './ComponentDidMountComponent';
import ComponentWillUnmountComponent from './ComponentWillUnmountComponent';
import ComponentDidCatchComponent from './ComponentDidCatchComponent';

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
      <ComponentDidMountComponent />
      <ComponentWillUnmountComponent />
      <ComponentDidCatchComponent />
    </div>
  );
};
export default lifecycle;
