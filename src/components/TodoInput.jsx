import React, {useState}from 'react';
import { v4 } from 'uuid';
export const TodoInput = ({todos,setTodo}) => {
    const [value,setValue]=useState("");
  return (
    <div>
        <button className='addbutton' onClick={()=>{
            if(value){
                setTodo([...todos,{value: value,id: v4(),}]);
                setValue("");
            }
            else{
                alert('Enter Item');
            }

        }}>+</button>
        <input className='addinput' type="text" value={value} onChange={(evnt)=>{setValue(evnt.currentTarget.value)}} placeholder='Add a to-do...'/>
    </div>
  );
};
