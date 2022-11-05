import { Link } from 'react-router-dom'
import { Container, List, Item } from './styles'

export function Todos() {
  return (
    <Container>
      <h1>Todos</h1>
      <List>
        <Link to="/todo/1">
          <Item isCompleted>
            <span>Terminar atividade de robótica</span>
          </Item>
        </Link>
      </List>
    </Container>
  )
}