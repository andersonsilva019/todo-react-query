import { useParams } from "react-router-dom"
import { Container, List, Item } from './styles'

export function Todo() {

  const { id } = useParams()

  return (
    <Container>
      <h1>Todo {id}</h1>
      <List>
        <Item isCompleted>
          <span>Terminar atividade de robótica</span>
        </Item>
      </List>
    </Container>
  )
}