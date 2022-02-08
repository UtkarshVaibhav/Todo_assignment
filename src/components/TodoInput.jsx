import React, {useState}from 'react';
import { v4 } from 'uuid';
export const TodoInput = ({onAdd}) => {
    const [value,setValue]=useState("");
  return (
    <div>
        <input className='addinput' type="text" value={value} onChange={(evnt)=>{setValue(evnt.currentTarget.value)}} placeholder='Add a to-do...'/>
        <button className='addbutton' onClick={()=>{
            if(value){
                onAdd({value,id:v4()})
                setValue("");
            }
            else{
                alert('Enter Item');
            }

        }}>+</button>
    </div>
  );
};
