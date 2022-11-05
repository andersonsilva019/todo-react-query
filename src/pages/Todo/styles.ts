import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;

  h1 {
    color: #C4C4CC;
    font-size: 2rem;
    font-weight: bold;
  }
`

export const List = styled.ul`
  margin-top: 2rem;

  a { 
    text-decoration: none;
  }
`

interface ItemProps {
  isCompleted: boolean;
}

export const Item = styled.li<ItemProps>`
  list-style: none;
  padding: 1rem 1.5rem;
  background-color: ${props => props.isCompleted ? '#015F43' : '#F75A68'};
  color: #FFF;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 1rem;
`