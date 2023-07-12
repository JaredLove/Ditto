
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Ladder from './pages/Ladder'
import Home from './pages/Home'
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <body className='hero'>
  <Nav></Nav>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/ladder' element={<Ladder/>} />
  </Routes>
  </body>
  </BrowserRouter>
  )
}

export default App;
