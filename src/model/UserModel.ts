export interface User {
  id: string
  nome: string
  email: string
  ativo: boolean
  senha: string
  avatar: string
  descricao: string
  amigos: string[]
  createdAt: string
  updateAt: string
  opcaoenqueteid: string
}

export interface UserResponse {
  user: User
}
