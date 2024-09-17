import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../../store'

// const tarefas = [
//   {
//     titulo: 'Estudar TypeScript',
//     descricao: 'Ver aula 3 da EBAC',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE
//   },
//   {
//     titulo: 'Finalizar o projeto React',
//     descricao: 'Finalizar as aulas do projeto 5',
//     prioridade: enums.Prioridade.URGENTE,
//     status: enums.Status.CONCLUIDA
//   },
//   {
//     titulo: 'Estudar o desafio técnico',
//     descricao: 'Rever os códigos do desafio',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE
//   }
// ]

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
