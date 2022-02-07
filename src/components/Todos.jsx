import React, { useState } from 'react';
import {TodoInput} from './TodoInput';
import {Todo} from './Todo' 
import {CompletedTodos} from './CompletedTodos'
export const Todos = () => {
    const [todos,setTodo]=useState([]);
    const onDeleteItem=(itemToDelete)=>{
        const newTodoList=todos.filter(todo=>todo.id!==itemToDelete.id);
        setTodo(newTodoList)
    }
    return (
        <div>
            <div className='todoinput'>
            <TodoInput todos={todos} setTodo={setTodo}/>
            </div>
            <div>
                <ul>
                    {todos.map((todo)=>{
                        return(
                            <Todo key={todo.id} todo={todo} onDeleteItem={onDeleteItem} />
                        )
                    })}
                </ul>
                <CompletedTodos todos={todos}/>
            </div>
        </div>
    );
};