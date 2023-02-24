import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InformationsContainer, ProfileContainer } from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

interface User {
  login: string
  avatar_url: string
  bio: string
  following: number
  location: string
  name: string
  html_url: string
}

export function Profile() {
  const [userData, setUserData] = useState<User>()

  async function fetchUser() {
    const headers = {
      Authorization: `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`,
    }
    const response = await api.get('users/Gustavo-Galdino', { headers })

    setUserData(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={userData?.avatar_url} alt="" />
      <div>
        <header>
          <h2>{userData?.name || 'Nao encontrado'}</h2>

          <NavLink to={userData?.html_url || '/'}>
            GITHUB
            <span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </NavLink>
        </header>
        <p>{userData?.bio}</p>

        <InformationsContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} className="Informations-icon" />
            {userData?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} className="Informations-icon" />
            {userData?.location}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} className="Informations-icon" />
            {userData?.following} seguidores
          </span>
        </InformationsContainer>
      </div>
    </ProfileContainer>
  )
}
