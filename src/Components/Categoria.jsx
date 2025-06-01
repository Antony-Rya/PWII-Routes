import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Categoria() {
    const { id } = useParams()
    const [categorias] = useState([
        {
            id: 1,
            nome: 'Eletrônico',
            descricao: 'Produtos eletrônicos.'
        },
        {
            id: 2,
            nome: 'Móbilia',
            descricao: 'Móveis do lar.'
        },
        {
            id: 3,
            nome: 'Livros',
            descricao: 'Livros para leitura.'
        }
    ])

    const categoria = categorias.find(c => c.id === parseInt(id))

    return (
        <div>
            {categoria ? (
                <p>
                    Exibindo categoria: {categoria.nome} - {categoria.descricao}
                </p>
            ) : (
                <p>Não há categorias com esse ID</p>
            )}
        </div>
    )
}
