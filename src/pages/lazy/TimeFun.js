import React from 'react';

function TimeFun() {
  const Time = new Date().toString();
  return (<div>lazy-time-fun: {Time}</div>);
};

export default TimeFun;
