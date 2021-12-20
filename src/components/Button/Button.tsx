import styled from 'styled-components'

interface Props {
  primary?: boolean,
  warning?: boolean
}

export const Button = styled.button<Props>`
  border: none;
  outline: none;
  position: relative;
  min-width: 4.5rem;

  background-color: ${props =>
    props.primary ? 'var(--color-primary)' :
    props.warning ? 'var(--color-warning)' :
    'var(--color-card)'};

  color: ${props =>
    props.primary || props.warning ? 'var(--color-card)' :
    'var(--color-label)'};

  border: solid 1px;
  border-color: ${props =>
    props.primary || props.warning ? 'transparent' :
    'var(--color-border)'};

  border-radius: var(--radius-md);
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  line-height: 1.25rem;
  font-size: .875rem;
  box-shadow: var(--shadow-ui);
  transition: var(--transition-slow);

  &:hover {
    box-shadow: ${props =>
      props.warning ? 'var(--shadow-hover-offset-warning)' :
      'var(--shadow-hover-offset)'};
      transition: none;
  }

  &:focus {
    box-shadow: ${props =>
      props.warning ? 'var(--shadow-focus-offset-warning)' :
      'var(--shadow-focus-offset)'};
  }
`