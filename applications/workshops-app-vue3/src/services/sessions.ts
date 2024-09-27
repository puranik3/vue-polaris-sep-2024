import axios from 'axios'

type VoteType = 'upvote' | 'downvote'
type Level = 'Basic' | 'Intermediate' | 'Advanced'

interface ISession {
  id: number
  workshopId: number
  sequenceId: number
  name: string
  speaker: string
  duration: number
  level: Level
  abstract: string
  upvoteCount: number
}

const vote = async (sessionId: number, voteType: VoteType) => {
  const response = await axios.put<ISession>(`/sessions/${sessionId}/${voteType}`)

  return response.data
}

const requestNewSession = async (session: Omit<ISession, 'id'>) => {
  const response = await axios.post<ISession>(`/sessions`, session, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data // new session object (includes the auto-generated id, ...)
}

export { vote, requestNewSession }
export type { ISession, VoteType, Level }
