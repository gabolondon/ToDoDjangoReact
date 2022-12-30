import React, { useState, useEffect }  from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js';
import axios, { Axios } from 'axios'

function App() {
  const [todos, setTodos] = useState([]);
  const baseURL = "https://gabolondon-improved-enigma-6xjpr7r5747356w7-8000.preview.app.github.dev/api/todos/";

  useEffect( ()=> {
    axios.get(baseURL)
      .then((res)=> setTodos(res.data)).catch(()=> {
        alert("error al leer el API desde axios en react");
      })

  },[])


  return (
    <div >
      <Navbar bg='light' style={{ marginBottom: '20px'}}>
        <Container>
          <Navbar.Brand href='#'>
            Todo App
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <TodoForm todos={todos} setTodos={setTodos}/>
        <TodoList todos= {todos} setTodos={setTodos}/>
      </Container>
      
    </div>
  );
}

export default App;
