import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 32px;

  background: ${(props) => props.theme['base-background']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 32px 40px;
  margin: 0 auto;
  margin-top: -4.5rem;
  width: 864px;

  img {
    height: 148px;
    width: 148px;
    border-radius: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;

    header {
      display: flex;
      justify-content: space-between;

      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme['base-title']};
        line-height: 1.6;
      }

      a {
        text-decoration: none;
        color: ${(props) => props.theme.blue};
        font-size: 0.75rem;
        font-weight: bold;
        line-height: 1.6;

        display: flex;
        align-items: center;

        > span {
          margin-left: 0.5rem;
        }

        &:hover {
          border-bottom: 1px solid ${(props) => props.theme.blue};
          border-top: 1px solid transparent;
        }
      }

      p {
        line-height: 1.6;
      }
    }
  }
`

export const InformationsContainer = styled.div`
  display: flex;
  column-gap: 1.5rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    align-items: center;

    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.6;

    .Informations-icon {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
