import React, {
  useState,
} from 'react';
import Fieldset from '@Component/Fieldset';

const MemoComponent = React.memo((props)=>{
  return (
    <div>{props.time}</div>
  );
}, (prevProps, nextProps)=>{
  if (prevProps.time !== nextProps.time) {
    return null;
  }
  return false;
});

function Memo() {
  const [time, setTime] = useState(new Date().toString());

  return (
    <Fieldset title='memo'>
      memo
      <input type='button' value='更新时间' onClick={()=>setTime(new Date().toString())} />
      <MemoComponent time={time} />
    </Fieldset>
  );
};

export default Memo;
