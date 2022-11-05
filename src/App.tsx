import { Routes, Route } from 'react-router-dom'
import { Todos } from './pages/Todos'
import { Todo } from './pages/Todo'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </>
  )
}
