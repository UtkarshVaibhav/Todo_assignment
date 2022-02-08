import React, { useState } from 'react';
import {TodoInput} from './TodoInput';
import {Todo} from './Todo' 
export const Todos = () => {
    const [todos,setTodo]=useState([]);
    const onAdd=(newTodo)=>{
        setTodo([...todos,newTodo])
    }
    const onUpdateTodos = (updatedTodo)=>{
        const newTodoList=todos.map((todo)=>{
            if(todo.id === updatedTodo.id){
                return updatedTodo;
            }
            else{
                return todo;
            }
        });
        setTodo(newTodoList);
    }
    const onDeleteItem=(itemToDelete)=>{
        const newTodoList=todos.filter(todo=>todo.id!==itemToDelete.id);
        setTodo(newTodoList)
    }
    return (
        <div>
            <div className='todoinput'>
            <TodoInput onAdd={onAdd}/>
            </div>
            <div>
                <ul>
                    {todos.map((todo)=>{
                        return(
                            <>
                            <Todo key={todo.id} todo={todo} onDeleteItem={onDeleteItem} onUpdateTodos={onUpdateTodos} />
                            <br/>
                            </>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};