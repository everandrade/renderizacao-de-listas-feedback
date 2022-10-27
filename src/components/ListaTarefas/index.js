import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import ListaCompletado from "../listaCompletado";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [listaConcluida, setListaConcluida] =useState([])
  const [novaTarefa, setNovaTarefa] = useState("");

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const adicionaTarefaEnter =(event)=> {
    if (event.charCode == 13){
      const novaLista = [...lista, novaTarefa]
      setLista(novaLista)
      setNovaTarefa("")
    }
  }

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    const novaLista = [...listaConcluida, tarefa]
    setListaConcluida(novaLista)
    setLista(listaFiltrada);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={adicionaTarefaEnter}
         
        />
        <AddTaskButton onClick={adicionaTarefa} id="buttonEnter">Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul><h2>Tarefas Pendentes</h2>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>

      <ListaContainer>
        <ul><h2>Concluidas</h2>
          {listaConcluida.map((tarefa, index) => {
             
            return(
              <ListaCompletado key={index}>
                <p>{tarefa}</p>
              </ListaCompletado>
            )
              
          })}
        </ul>
      </ListaContainer>
      
      <LinhaHorizontal/>
    </ListaTarefasContainer>
  );
}