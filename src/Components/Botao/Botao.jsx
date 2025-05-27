import {useNavigate } from 'react-router-dom';


function Botao(){
    const navigate = useNavigate();
    const irParaSobre = () => {
        navigate('/about/10')
    }
    return (
        <button onClick={irParaSobre}>Ir para sobre</button>
    )
}

export default Botao;