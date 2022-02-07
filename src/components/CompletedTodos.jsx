import React from 'react';
import styles from './completed.module.css'
export const CompletedTodos = ({todos}) => {
  return (
    <button className={styles.showCompleted} onClick={()=>{
        console.log(todos.value);
         return <div>todos</div>
    }}>SHOW COMPLETED TO-DOS</button>
  );
};
