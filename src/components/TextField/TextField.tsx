import styled from "styled-components"

const Wrapper = styled.div`
`

const Label = styled.label`
  font-weight: 500;
  color: var(--color-label);
  margin-bottom: 0.25rem;
  font-family: var(--font-family);
  font-size: .875rem;
  line-height: 1.25rem;
  display: block;
`

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  background-color: var(--color-card);
  border: solid 1px var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-ui);
  padding: 0.5rem 0.75rem;
  line-height: 1.5rem;
  font-size: .875rem;
  line-height: 1.25rem;
  transition: var(--transition-md);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus-input);
  }

  &:placeholder {
    color: var(--color-hint);
  }
`

const HelperText = styled.p`
  color: var(--color-hint);
  margin-top: 0.5rem;
  font-size: 0.75rem;
`

interface Props {
  children?: any,
  id: string,
  placeholder?: string,
  hint?: string
}

export const TextField = ({
  children,
  id,
  placeholder,
  hint
}: Props) => {

  return(
    <Wrapper>
      <Label htmlFor={id}>{children}</Label>
      <Input name={id} placeholder={placeholder} />
      {hint && <HelperText>{hint}</HelperText>}
    </Wrapper>
  )
}