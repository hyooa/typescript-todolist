import React from 'react';
import { Todo } from '../modules/todos';
import './todo.css';

type TodoHeadProps = {
    todos : Todo[];
}

const TodoHead = ({ todos } : TodoHeadProps) => {
    const todoLen = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: '2-digit' });
    const dayname = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
        <div id='todoHead'>
            <h1>{dateString}</h1>
            <div>{dayname}</div>
            <div>할 일 <span>{todoLen.length}</span>개 남음</div>
        </div>
    );
};

export default TodoHead;