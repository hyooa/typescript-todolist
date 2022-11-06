import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';
import './todo.css';

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
    if (todos.length === 0) return <div id='none'>등록된 할 일이 없습니다.</div>

    return (
        <ul id='todoList'>
            {todos.map(todo => (
                <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />
            ))}
        </ul>
    );
};

export default TodoList;