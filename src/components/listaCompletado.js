import { Tarefa } from "./ListaTarefas/styled"

function ListaCompletado (props) {
    return (
        <Tarefa>
            <s>{props.tarefa}</s>
        </Tarefa>
    )
}

export default ListaCompletado