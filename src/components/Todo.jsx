import React, {useState}from 'react';
import styles from "./todo.module.css"
import {TodoInput} from './TodoInput'
export const Todo = ({todo,onDeleteItem,onUpdateTodos}) => {
    const [isStriked,setIsStriked]=useState(false);
    const [isEditModeOn,setIsEditModeOn]=useState(false);
    const onAdd = (newTodo) => {
      onUpdateTodos({...newTodo,id:todo.id})
      setIsEditModeOn(false);
      setIsStriked(false);
    }
  return (
    <li className={ isStriked?styles.todoItemStrike:styles.todoItem }>
      {isEditModeOn?(
        // <input className={styles.editInput} type="text"/>
        <TodoInput onAdd={onAdd}/>
      ) :
        <span>
            <input type="checkbox" onChange={()=>{setIsStriked(!isStriked)}}/>
            <span className={ isStriked?styles.strike:styles.normal }>{todo.value}</span>
        </span> 
    }
      <span>
          <button className={styles.deleteBtn} onClick={()=>{onDeleteItem(todo)}}>-</button>
          <button className={styles.editBtn} onClick={()=>{setIsEditModeOn(!isEditModeOn)}}>{isEditModeOn?'Cancel': 'Edit'} </button>
      </span> 
    </li>
  );
};

