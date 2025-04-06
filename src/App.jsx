import { useState } from 'react'
import './App.css'
import Todolist from './components/Todolist'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, settodos] = useState([]);
  const [data ,setdata] = useState("");
  const [id, setid] = useState("");

    // form handling
    const prevent = (e) => {
        e.preventDefault();


        if(id) {
          const dsa = todos.find((to) => to.id === id);          
          settodos(
            todos.map((todo) => todo.id === dsa.id ? { ...todo , task:data , isedited:!todo.isedited } : todo ) 
          )
          setid("");
          setdata("");
          
          return;
        }

        if(data) {
          settodos(
            [ ...todos , { id:uuidv4() , task:data , completed:false , isedited:false } ]
          )
          setdata("");
        } 
    }
  // remove todo
  const removetodo = (id) => {
    settodos(
      todos.filter((todo) => todo.id !== id )
    )
  }

  // complete todo
  const completed = (id) => {
    settodos(
      todos.map((todo) => todo.id === id ? { ...todo , completed:!todo.completed } : todo ) 
    )
  }

  // edited todo
  const edited = (id) => {
    settodos(
      todos.map((todo) => todo.id === id ? { ...todo , isedited:!todo.isedited } : todo ) 
    )
    editor(id);
  }
  const editor = (id) => {
    const edit = todos.find((t) => t.id === id);
    setdata(edit.task);
    setid(id);
  }

  
  return (
    <>
      <div className='todo-list-wrapper'>
        <h2>To-Do List</h2>

        <div className='tododata'>
              <form 
              action=""
              className="todo-form"
              onSubmit={(e) => prevent(e)}>

                  <input 
                  type="text"
                  placeholder="enter your task" 
                  value={data} 
                  onChange={(e) => setdata(e.target.value)} />

                  <button>{id ? "Save" : "Add"}</button>

              </form>
        </div>

        <div className='tododata-list'>

          {
            todos.map((todo) => <Todolist key={todo.id} todo={todo} removetodo={removetodo} completed={completed} edited={edited}  /> )
          }

        </div>
      </div>
    </>
  )
}

export default App
