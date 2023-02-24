import styled from 'styled-components'

export const Container = styled.article`
  background: ${(props) => props.theme['base-background']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 32px 40px;
  margin: 0 auto;
  margin-top: -4.5rem;
  margin-bottom: calc(4.5rem + 2rem);
  width: 864px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.6;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.6;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const InformartionsCOntainer = styled.section`
  display: flex;
  gap: 32px;
  margin-top: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme['base-span']};
  }
`
export const PostContentContainer = styled.section`
  padding: 32px 40px;
  margin: 0 auto;
  margin-top: -4.5rem;
  margin-bottom: 40px;
  width: 864px;

  line-height: 1.6;

  img {
    width: 100%;
    padding: 10px;
  }
`
