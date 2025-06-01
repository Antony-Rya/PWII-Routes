import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Contato from './Contato';
import PagInicial from './PagInicial';
import Produto from './Produto'
import Categoria from './Categoria';

function HomeAt() {
    const [id, setId] = useState('')
    return (
        <BrowserRouter>
            <div className='HomeAt'>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Digite o ID do produto"
                />

                <nav>
                    <Link to={'/'}>Home</Link>|
                    <Link to={'/contato'}>Contato</Link>|
                    <Link to={`/produto/${id}`}>Ver Produto</Link>|
                    <Link to={`/categoria/${id}`}>Ver Categoria</Link>


                </nav>
                <Routes>
                    <Route path='/' element={<PagInicial />}></Route>
                    <Route path='/contato' element={<Contato />}></Route>
                    <Route path='/produto/:id' element={<Produto />}></Route>
                    <Route path='/categoria/:id' element={<Categoria />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default HomeAt;