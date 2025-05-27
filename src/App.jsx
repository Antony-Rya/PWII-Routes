import './App.css';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import { Link } from 'react-router-dom'
import Botao from './Components/Botao/Botao'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/about/10'>About</Link>
          <Botao />
        </nav>
        <header className="App-header">

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about/:id' element={<About />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
