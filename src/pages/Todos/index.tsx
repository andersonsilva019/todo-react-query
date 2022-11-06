import { useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getTodoById, useQueryTodos } from '../../services/todos'
import { Container, List, Item } from './styles'

interface Todo {
  id: number
  title: string
  completed: boolean
}

export function TodosPage() {

  const { data, status, error, isFetching, refetch } = useQueryTodos<Todo[]>()

  const queryClient = useQueryClient()

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
          <Link
            to={`/todo/${todo.id}`}
            onMouseEnter={async () => {
              await queryClient.prefetchQuery(
                ['todo', todo.id],
                () => getTodoById(todo.id),
                {
                  staleTime: 10 * 1000, // only prefetch if older than 10 seconds
                },
              )
            }}
          >
            <Item isCompleted={todo.completed}>
              <span>{todo.title}</span>
            </Item>
          </Link>
        ))}
      </List>
    </Container>
  )
}