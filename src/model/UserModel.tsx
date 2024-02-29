export interface User {
  id: string
  nome: string
  email: string
  ativo: boolean
  avatar: string
  descricao: string
  createdAt: string
  updateAt: string
  opcaoenqueteid: string
}

export interface UserResponse {
  user: User
}
