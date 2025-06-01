import { useParams } from "react-router-dom"
import BotaoVoltar from "./BotaoVoltar/BotaoVoltar"
import { useState } from "react"

export default function Produto() {
    const { id } = useParams()
    const [produtos] = useState([
        {
            id: 1,
            nome: 'Celular',
            descricao: 'Celular Barato.',
            preco: 1000
        },
        {
            id: 2,
            nome: 'Mesa de jantar',
            descricao: 'Mesa para reunir a família.',
            preco: 700
        },
        {
            id: 3,
            nome: 'Livro: Mágico de Óz',
            descricao: 'Livro de aventura e fantasia.',
            preco: 100
        }
    ])

    const produto_filtrado = produtos.filter(produto => produto.id === parseInt(id))

    return (
        <div>
            {produto_filtrado.length > 0 ? (
                <ul>
                    {produto_filtrado.map(produto => (
                        <li key={produto.id}>
                            Exibindo produto: {produto.nome} - {produto.descricao} - R$ {produto.preco}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Não há produtos com esse ID</p>
            )}
            <BotaoVoltar />
        </div>
    )
}
