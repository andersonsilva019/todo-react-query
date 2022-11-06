import { Link } from 'react-router-dom'
import { useQueryTodos } from '../../services/todos'
import { Container, List, Item } from './styles'

interface Todo {
  id: string
  title: string
  completed: boolean
}

export function TodosPage() {

  const { data, status, error, isFetching, refetch } = useQueryTodos<Todo[]>()

  if (status === 'loading') {
    return <p>Carregando...</p>
  }

  if (status === 'error') {
    return <p>Erro ao carregar os dados</p>
  }

  return (
    <Container>
      <h1>Todos {isFetching ? 'Fetching' : ''} <button onClick={() => refetch()} >Refresh</button></h1>
      <List>
        {data.map(todo => (
          <Link to={`/todo/${todo.id}`}>
            <Item isCompleted={todo.completed}>
              <span>{todo.title}</span>
            </Item>
          </Link>
        ))}
      </List>
    </Container>
  )
}