
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {

  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setData(res.data))
      .catch((error) => setError(error.message))
  }, [])

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Axios</h1>
      {error !== "" && <h2>{error}</h2>}
      <div className="grid">
        {data.map((post) => {
          const { id, title, body } = post;
          return <div className='card' key={id}>
            <h2>{title.slice(0, 15).toUpperCase()}</h2>
            <p>{body.slice(0, 100)}</p>
          </div>
        })}
      </div>
    </>
  )
}


