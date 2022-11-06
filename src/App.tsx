import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TodosPage } from './pages/Todos'
import { TodoPage } from './pages/Todo'
import { GlobalStyles } from './styles/global'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path="/todo/:id" element={<TodoPage />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}
