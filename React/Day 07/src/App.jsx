import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title:"Jack",
      title:"I am good"
    },
    {
      title:"Ron",
      title:"I am great"
    },
    {
      title:"John",
      title:"I am just john"
    },
  ])

  const Todo= ({todo})=>{
    return(<>
    <div class="m-4 border-1">
  <div className="todo">{todo.title}</div>
  <div className="todo">{todo.desc}</div>
  </div>
  </>
  )}


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn?<button>Showbtn is true</button>:<button>Showbtn is false</button>}
       
       {/* {showbtn&&<button>Showbtn is true</button>} */}
 

       {todos.map(todo =>{
        return <Todo todo ={todo}/>
       })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>Toggle
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
