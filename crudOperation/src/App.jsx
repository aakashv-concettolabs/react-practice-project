
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Form from './Components/Form'
import Read from './Components/Read'
import Update from './Components/Update'



export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Form />} />
        <Route path='/read' element={<Read />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

