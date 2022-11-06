import React, { FormEvent, useState } from 'react';
import './todo.css';

// props로 전달 받을 데이터 타입 지정
type TodoInsertProps = {
    onInsert : (text : string) => void; // 리턴 값 없을 때 void
}

// 보여지는 화면
const TodoInsert = ({onInsert} : TodoInsertProps) => {
    const [value, setValue] = useState(''); // ↓ 복붙 (onChange 커서올려서)
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onSubmit = (e:FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue(""); // 비우기
    }
    return (
        <div id='todoInsert'>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={value} placeholder='할 일을 등록하세요.' required></input>
                <button type='submit'>등록</button>
            </form>
        </div>
    );
};

export default TodoInsert;