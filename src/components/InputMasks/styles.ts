import styled, { css } from 'styled-components'

interface InputProps {
  isFocused: boolean
}

export const Container = styled.div<InputProps>`
  width: 350px;
  height: 45px;

  margin-top: 45px;
  padding: 0 10px;

  border: 1px solid var(--color0);
  border-radius: 5px;

  display: flex;
  align-items: center;

  background: var(--BGDark);

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--color1);
    `}

  input {
    flex: 1;
    border: 0;
    color: var(--color1);

    &:focus {
      border: none;
      border-color: transparent;
    }

    &::placeholder {
      color: var(--color0);
    }
    background: transparent;
  }

  > svg {
    margin-right: 10px;
    color: var(--color0);

    ${props =>
      props.isFocused &&
      css`
        color: var(--color1);
      `}
  }
`
