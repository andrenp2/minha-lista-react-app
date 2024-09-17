import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number

  constructor(
    _titulo: string,
    _prioridade: enums.Prioridade,
    _status: enums.Status,
    _descricao: string,
    _id: number
  ) {
    this.titulo = _titulo
    this.prioridade = _prioridade
    this.status = _status
    this.descricao = _descricao
    this.id = _id
  }
}

export default Tarefa
