import axios from 'axios'
import type { ISession } from './sessions'

// const baseUrl = process.env.VUE_APP_BASE_URL;

// console.log(baseUrl);

type Category =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'language'
  | 'devops'
  | 'mobile'

interface IWorkshop {
  name: string
  category: Category
  id: number
  description: string
  startDate: string
  endDate: string
  time: string
  location: {
    address: string
    city: string
    state: string
  }
  modes: {
    inPerson: boolean
    online: boolean
  }
  imageUrl: string
  sessions?: ISession[]
}

// using fetch - we have not handled error using catch - whoever calls getWorkshops() will handle the error (if any)
const getWorkshops = async (page = 1) => {
  const response = await axios.get<IWorkshop[]>(`/workshops`, {
    params: {
      _page: page
    }
  })

  // return response.data as IWorkshop[]
  return response.data
}

const getWorkshopById = async (id: number | string) => {
  const response = await axios.get<Required<IWorkshop>>(`/workshops/${id}`, {
    params: {
      _embed: 'sessions'
    }
  })

  return response.data
}

// named exports
export { getWorkshops, getWorkshopById }
export type { IWorkshop, Category }
