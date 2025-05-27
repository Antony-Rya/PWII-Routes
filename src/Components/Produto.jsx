import { useParams } from "react-router-dom"
export default function Contato(){
    const {id} = useParams()
    return <h1> Produto com o id {id}</h1>
}