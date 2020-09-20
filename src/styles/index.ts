import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 500px;
  height: 350px;

  margin: auto;
  border: 1px solid var(--color0);
  border-radius: 5px;
  box-shadow: 0 0 15px var(--BGDark);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--color1);
  }
`
