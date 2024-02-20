import { useState, useMemo, useRef } from 'react'
import './App.css'

const style = {
  border: "1px solid black"
}

const expensiveCalculation = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}


function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const todoAdd = () => {
    setTodos((prev) => [...prev, "This is new"])
  }

  const increaseCount = () => {
    setCount((prevcount) => prevcount + 1)
  }

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };


  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>
      }
      )}

      <button onClick={todoAdd}>Add your todo</button>

      <hr />
      <hr />

      <div>
        Count: {count}
        <br />
        <button onClick={increaseCount} style={style}>+</button>
        <br />
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>

      {/* Use Ref */}
      <div>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </>
  )
}

export default App
