import { useState } from "react"
import { useParams } from "react-router-dom"
import BotaoVoltar from "./BotaoVoltar/BotaoVoltar"

export default function Categoria() {
    const { id } = useParams()
    const [categorias] = useState([
        {
            id: 1,
            nome: 'Eletrônico',
            descricao: 'Produtos eletrônicos.',
            produtos: [
                { id: 101, nome: 'Celular' },
                { id: 102, nome: 'Tablet' },
                { id: 103, nome: 'Notebook' }
            ]
        },
        {
            id: 2,
            nome: 'Móbilia',
            descricao: 'Móveis do lar.',
            produtos: [
                { id: 201, nome: 'Mesa' },
                { id: 202, nome: 'Cadeira' },
                { id: 203, nome: 'Cama' }
            ]
        },
        {
            id: 3,
            nome: 'Livros',
            descricao: 'Livros para leitura.',
            produtos: [
                { id: 301, nome: 'As aventuras de PI' },
                { id: 302, nome: 'Asa de Prata' },
                { id: 303, nome: 'Harry Potter' }
            ]
        }
    ])

    const categoria_filtrada = categorias.find(categoria => categoria.id === parseInt(id))

    return (
        <div>
            {categoria_filtrada ? (
                <div>
                    <p>
                        Exibindo categoria: {categoria_filtrada.nome} - {categoria_filtrada.descricao}
                    </p>
                    <h3>Produtos:</h3>
                    <ul>
                        {categoria_filtrada.produtos.map((produto) => (
                            <li key={produto.id}>{produto.nome}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Não há categorias com esse ID</p>
            )}
            <BotaoVoltar />
        </div>

    )
}
