import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { IssuesContext } from '../../context/IssueContext'
import { FormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const { fetchIssues, issues } = useContext(IssuesContext)
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssue(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  return (
    <>
      <Profile />

      <FormContainer onSubmit={handleSubmit(handleSearchIssue)}>
        <div>
          <label htmlFor="">Publicações</label>
          <span>{issues.length} publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </FormContainer>

      <Post />
    </>
  )
}
