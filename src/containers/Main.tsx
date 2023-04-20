import React from 'react';
import './todoApp.css';
import 'animate.css';

const Main = () => {
    return (
        <>
            {/* <div id='mobile'>모바일용입니다.</div> */}
            <div id='main'>
                <h1 className='animate__animated animate__bounce'>To Do List</h1>
                <div>
                    <div>♥</div>
                    <div><a href='/todoApp'>메모하기</a></div>
                </div>
            </div>
        </>
    );
};

export default Main;