import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, PostContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { IssuesContext } from '../../context/IssueContext'

export function Post() {
  const { issues } = useContext(IssuesContext)

  return (
    <Container>
      {issues.map((item) => {
        return (
          <PostContainer key={item.id}>
            <NavLink to={`/post/${item.number}`}>
              <header>
                <strong>{item.title}</strong>
                <span>
                  {item.created_at
                    ? formatDistanceToNow(new Date(item.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })
                    : 'Data não encontrada'}
                </span>
              </header>
              <section>
                <ReactMarkdown>{item.body}</ReactMarkdown>
              </section>
            </NavLink>
          </PostContainer>
        )
      })}
    </Container>
  )
}
