import { useParams } from "react-router-dom"


export default function About(){
    const {id} = useParams()
    return <h1>Sobre o projeto. de ID: {id}</h1>
}