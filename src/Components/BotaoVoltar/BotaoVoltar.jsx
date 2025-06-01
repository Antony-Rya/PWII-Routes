import {useNavigate } from 'react-router-dom';

function BotaoVoltar(){
    const navigate = useNavigate();
    const voltar = () => {
        navigate('/')
    }
    return (
        <button onClick={voltar}>Voltar</button>
    )
}

export default BotaoVoltar;