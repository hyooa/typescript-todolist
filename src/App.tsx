import React from 'react';
import './App.css';
import TodoApp from './containers/TodoApp';
import { Routes, Route } from 'react-router-dom';
import Main from './containers/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/todoApp' element={<TodoApp />}></Route>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
