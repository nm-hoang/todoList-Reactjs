import React, {useState} from 'react';
import Form from './Components/Form.js';
import TodoList from './Components/TodoList.js';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h2>My Todo List</h2>
      </header>
      <Form todos = {todos} setTodos ={setTodos} setInputText={setInputText} />
      <TodoList/>
    </div>
  );
}

export default App;
