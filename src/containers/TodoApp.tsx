import React, { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoHead from '../components/TodoHead';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { RootState } from '../modules';
import { addTodo, removeTodo, toggleTodo } from '../modules/todos';
import './todoApp.css';

const TodoApp = () => {
    const todos = useSelector((state: RootState) => state.todos)
    const dispatch = useDispatch();

    const onInsert = (text: string) => {
        dispatch(addTodo(text))
    }
    const onToggle = (id: number) => {
        dispatch(toggleTodo(id))
    }
    const onRemove = (id: number) => {
        dispatch(removeTodo(id))
    }
    const h1Style: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3.3em',
        color: '#ffbfc3',
    }

    return (
        <div id='todoApp'>
            <a href='/'><h1 style={h1Style}>To Do List</h1></a>
            <TodoHead todos={todos}></TodoHead>
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}></TodoList>
            <TodoInsert onInsert={onInsert}></TodoInsert>
        </div>
    );
};

export default TodoApp;