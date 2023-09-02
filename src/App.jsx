import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import './App.css'

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },{
      text: "Meet a friend for lunch",
      isCompleted: false,
    },{
      text: "Build a really cool todo app",
      isCompleted: false,
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1 className='todo-list'>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} removeTodo={removeTodo} />
      ))}
      <TodoForm addTodoHandler={addTodo}/>
    </div>
  );
}

export default App;
