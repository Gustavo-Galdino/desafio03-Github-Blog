import {
  Container,
  InformartionsCOntainer,
  LinkContainer,
  PostContentContainer,
} from './styles'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { IssuesContext } from '../../context/IssueContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export function PostPage() {
  const { issues } = useContext(IssuesContext)
  const { postId } = useParams()

  const post = issues.find((item) => item.number === Number(postId))

  return (
    <>
      <Container>
        <LinkContainer>
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>voltar</span>
          </NavLink>
          <NavLink to={post?.html_url || '/'}>
            <span>ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </LinkContainer>
        <h1>{post?.title}</h1>
        <InformartionsCOntainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post?.user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {post?.created_at
              ? formatDistanceToNow(new Date(post?.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })
              : 'Data não disponível'}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post?.comments} comentários
          </span>
        </InformartionsCOntainer>
      </Container>

      <PostContentContainer>
        <ReactMarkdown>{post?.body ? post?.body : 'Error'}</ReactMarkdown>
      </PostContentContainer>
    </>
  )
}
