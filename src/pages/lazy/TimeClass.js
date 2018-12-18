import React from 'react';

class TimeClass extends React.Component {
  render() {
    const Time = new Date().toString();
    return <div>lazy-time-class: {Time}</div>;
  };
};

export default TimeClass;
