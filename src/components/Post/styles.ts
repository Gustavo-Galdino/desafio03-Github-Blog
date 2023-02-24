import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  margin-top: 3rem;
  width: 864px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const PostContainer = styled.article`
  width: 416px;
  height: 260px;
  padding: 2rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  a {
    text-decoration: none;
  }

  header {
    margin-bottom: 1.25rem;
    display: flex;

    strong {
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${(props) => props.theme['base-title']};
      width: 80%;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 14px;
      align-self: flex-start;
    }
  }

  section {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    max-height: 6.5rem;
    max-width: 100%;
    margin: 0;
    position: relative;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
  }
`
