import { useParams } from "react-router-dom"
import { useQueryTodo } from "../../services/todos"
import { Container, List, Item } from './styles'

interface Todo {
  id: string
  title: string
  completed: boolean
}

export function TodoPage() {

  const { id } = useParams()

  const { data, status } = useQueryTodo<Todo>(Number(id))

  if (status === 'loading') {
    return <p>Carregando...</p>
  }

  if (status === 'error') {
    return <p>Erro ao carregar os dados</p>
  }

  return (
    <Container>
      <h1>Todo {id}</h1>
      <List>
        <Item isCompleted={data.completed}>
          <span>{data.title}</span>
        </Item>
      </List>
    </Container>
  )
}