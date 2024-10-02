import axios from 'axios'

interface ICredentials {
  email: string
  password: string
}

interface ILoginResponse {
  authToken: string
  email: string
  role: string
}

const login = async (credentials: ICredentials) => {
  const response = await axios.post<ILoginResponse>(`/login`, credentials, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.data
}

export type { ICredentials, ILoginResponse }

export { login }
