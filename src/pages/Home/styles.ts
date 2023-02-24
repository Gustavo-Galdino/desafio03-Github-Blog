import styled from 'styled-components'

export const FormContainer = styled.form`
  margin: 0 auto;
  margin-top: 4.5rem;
  width: 864px;

  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      line-height: 1.6;
    }

    label {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
      font-weight: bold;
      line-height: 1.6;
    }
  }

  input {
    width: 100%;
    flex: 1;
    background: ${(props) => props.theme['base-input']};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};

    padding: 12px 16px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      line-height: 1.6;
    }
  }
`
