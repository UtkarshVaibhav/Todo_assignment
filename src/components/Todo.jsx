import React, {useState}from 'react';
import styles from "./todo.module.css"
export const Todo = ({todo,onDeleteItem}) => {
    const [isStriked,setIsStriked]=useState(false);
  return (
    <li className={ isStriked?styles.todoItemStrike:styles.todoItem }>
        <span>
            <input type="checkbox" onChange={()=>{setIsStriked(!isStriked)}}/>
            <span className={ isStriked?styles.strike:styles.normal }>{todo.value}</span>
        </span>
        <button className={styles.deleteBtn} onClick={()=>{onDeleteItem(todo)}}>-</button>
    </li>
  );
};

