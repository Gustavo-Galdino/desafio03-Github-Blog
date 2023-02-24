import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface IssuesData {
  title: string
  created_at: string
  body: string
  id: number
  number: number
  comments: number
  user: { login: string }
  html_url: string
}

interface IssuesContextType {
  issues: IssuesData[]
  fetchIssues: (query?: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

interface IssuesProviderProps {
  children: ReactNode
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssuesData[]>([])

  async function fetchIssues(query: string = '') {
    const headers = {
      Authorization: `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`,
    }
    const response = await api.get(
      'search/issues?q= repo:Gustavo-Galdino/desafio03-Github-Blog',
      {
        headers,
        params: {
          q: `${query} repo:Gustavo-Galdino/desafio03-Github-Blog`,
        },
      },
    )
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
