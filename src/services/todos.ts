import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

async function getTodos(){
  const { data } = await api.get('/todos')
  return data
}

async function getTodoById(id: string){
  const { data } = await api.get(`/todos/${id}`)
  return data
}

export function useQueryTodos<T>(){
  return useQuery<T>({
    queryKey: ['todos'],
    queryFn: getTodos,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  })
}

export function useQueryTodo<T>(id: string){
  return useQuery<T>({
    queryKey: ['todos', id],
    queryFn: () => getTodoById(id),
    staleTime: 1000 * 60 * 5, // 5 minutes

  })
}