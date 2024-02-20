
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-300 px-3 py-2 rounded-3xl">

          <button className='outline-none px-4 py-1 rounded-full  shadow-lg' style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}>Red</button>

          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "orange" }}>Orange</button>

          <button onClick={() => setColor("teal")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "teal" }}>Teal</button>

          <button onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "cyan" }}>Cyan</button>

          <button onClick={() => setColor("lime")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "lime" }}>Lime</button>

          <button onClick={() => setColor("aquamarine")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "aquamarine" }}>Aquamarine</button>
        </div>
      </div>
    </div>
  )
}

export default App
