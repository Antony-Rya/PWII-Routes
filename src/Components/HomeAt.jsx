import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Contato from './Contato';
import PagInicial from './PagInicial';

function HomeAt() {
    
    function grabId(){
        const idUser = document.querySelector('#idUser')
        return idUser
    }
    return (
        <BrowserRouter>
            <div className='HomeAt'>
                <input type="text" id='idUser' />
                
                <nav>
                    <Link to={'/'}>Home</Link>|
                    <Link to={'/contato'}>Contato</Link>|
                    <Link to={`/produto/${()=> {grabId}}`}>Ver Produto</Link>|
                    <Link to={'/Home'}>Ver Categoria</Link>

                   
                </nav>
                <Routes>
                    <Route path='/' element={<PagInicial />}></Route>
                    <Route path='/contato' element={<Contato />}></Route>
                    <Route path='/produto/:id'></Route>
                    <Route path='/categoria/:categoria'></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default HomeAt;