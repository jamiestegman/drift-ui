import styled from "styled-components"

interface Props {
  stack?: Boolean,
  grid?: String
}

export const Card = styled.div<Props>`
  padding: var(--layout-padding);
  box-shadow: var(--shadow-card);
  border-radius: var(--radius-md);
  background-color: var(--color-card);

  ${props => 
    props.stack ? `display: flex; flex-direction: column;` :
    props.grid && `display: grid; grid-template-columns: repeat(${props.grid}, 1fr); grid-gap: var(--layout-gap);`
  }
`