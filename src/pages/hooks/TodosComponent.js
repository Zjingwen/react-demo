import React,{useState} from 'react';
import Fieldset from '@Component/Fieldset';

function InputComponent(props){
  const [val,setVal] = useState(props.val || "");
  
  function callback(){
    props.callback(val)
    setVal('');
  }

  return (
    <React.Fragment>
      <input 
        value={val}
        placeholder={props.placeholder} 
        onChange={(e)=>setVal(e.target.value)}
      />
      <input type='button' value={props.name} onClick={()=>callback()}/>
    </React.Fragment>
  )
};

function TodosComponent(){
  const [list,setList] = useState([{
    val: 'AAA',
    show: false,
  },
  {
    val: 'BBB',
    show: false,
  },
  {
    val: 'CCC',
    show: false,
  }]);
  
  const p = list.map((v,i)=> 
    <p key={i}>
      <input type='button' value='修改' onClick={(e)=>handleModify(e,i)}/>
      {i}. 
      {(()=>{
        if(v.show){
          return (
            <InputComponent val={v.val} name='确定' callback={(e)=>handleEdit(e,i)}/>
          )
        }else{
          return (
            <React.Fragment>
              {v.val}
              <input type='button' value='删除' onClick={(e)=>handleRemove(e,i)}/>
            </React.Fragment>
          )
        }
      })()}
    </p>
  );

  function remove(arr,item){
    var result = [];
    arr.forEach((v,i)=>{
      if(i !== item){ result.push(v)}
    });

    return result;
  };

  function handleEdit(e,i){
    list[i] = {
      val: e,
      show: false,
    };

    setList(list);
  };

  function handleModify(e,i){
    list[i].show = !list[i].show;
    setList(list);
    e.preventDefault();
  }

  function handleRemove(e,i){
    setList(remove(list,i));
    e.preventDefault();
  };

  function handleSubmit(e){
    let val = {
      val: e,
      show: false,
    };
    setList(list.concat(val));
  };

  return(
    <Fieldset title='todos'>
      <InputComponent name='添加' placeholder='输入' callback={handleSubmit}/>
      {p}
    </Fieldset>
  )
};

export default TodosComponent;