import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [isnumber, setIsnumber] = useState(false);
  const [ischaracter, setIscharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isnumber) {
      str += "0123456789"
    }

    if (ischaracter) str += "!@#$%&*?"  // shorthand syntax of if

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, isnumber, ischaracter, setPassword])

  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, isnumber, ischaracter, passwordGenerator])

  return (
    <>
      <div className="w-full h-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5  bg-gray-700">
        <h1 className="text-white text-center my-5 text-2xl">Password Generator</h1>

        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full text-black py-1 px-3' placeholder='password' readOnly ref={passwordRef} />

          <button onClick={copyToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex items-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={50} value={length} className='cursor-pointer' onChange={(e) => { setlength(e.target.value) }} />
            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={isnumber} id='numberInput' onChange={() => { setIsnumber((prev) => !prev) }} />
            <label htmlFor='numberInput' >Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={ischaracter} id='characterInput' onChange={() => { setIscharacter((prev) => !prev) }} />
            <label htmlFor='characterInput'>Charaters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
