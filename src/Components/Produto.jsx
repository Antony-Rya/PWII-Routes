import { useParams } from "react-router-dom"
import BotaoVoltar from "./BotaoVoltar/BotaoVoltar"
export default function Produto(){
    const {id} = useParams()
    return (
        <div>
            <h1> Produto com o id: {id}</h1>
            <BotaoVoltar />
        </div>
        
    )
}