import styled from 'styled-components'

const Wrapper = styled.div`
  z-index: 2;
  position: relative;
  width: max-content;
  display: flex;
`

const TooltipText = styled.div<Props>`
  border-radius: var(--radius-md);
  padding: 0.25rem 0.75rem;
  font-weight: 400;
  line-height: 1.25rem;
  font-size: 0.75rem;
  box-shadow: var(--shadow-ui);
  width: max-content;

  background-color: var(--color-tooltip);
  color: var(--color-theme);

  visibility: hidden;
  opacity: 0;
  transform: scale(0.85);
  transition: var(--transition-md);

  position: absolute;
  ${props =>
    // Gets position based on passed in 'position' prop
    props.position === 'top-start' ? `bottom: calc(100% + ${props.distance}); left: 0;` :
    props.position === 'top' ? `bottom: calc(100% + ${props.distance}); left: 50%;` :
    props.position === 'top-end' ? `bottom: calc(100% + ${props.distance}); right: 0;` :

    props.position === 'right-start' ? `left: calc(100% + ${props.distance}); top: 0;` :
    props.position === 'right' ? `left: calc(100% + ${props.distance}); top: 50%;` :
    props.position === 'right-end' ? `left: calc(100% + ${props.distance}); bottom: 0;` :

    props.position === 'bottom-start' ? `top: calc(100% + ${props.distance}); left: 0;` :
    props.position === 'bottom' ? `top: calc(100% + ${props.distance}); left: 50%;` :
    props.position === 'bottom-end' ? `top: calc(100% + ${props.distance}); right: 0;` :

    props.position === 'left-start' ? `right: calc(100% + ${props.distance}); top: 0;` :
    props.position === 'left' ? `right: calc(100% + ${props.distance}); top: 50%;` :
    props.position === 'left-end' ? `right: calc(100% + ${props.distance}); bottom: 0;` : null
  }

  transform: ${props =>
    (props.position === 'top' || props.position === 'bottom') ? `translateX(-50%) scale(0.85)` :
    (props.position === 'left' || props.position === 'right') && `translateY(-50%) scale(0.85)` };
`

const Content = styled.div<Props>`
  &:hover ~ .tooltip {
    visibility: visible;
    transform: ${props =>
      (props.position === 'top' || props.position === 'bottom') ? `translateX(-50%)` :
      (props.position === 'left' || props.position === 'right') && `translateY(-50%)` } scale(1);
    opacity: 1;
  }
`

interface Props {
  children: any,
  position:
    'top-start' | 'top' | 'top-end' |
    'right-start' | 'right' | 'right-end' |
    'bottom-start' | 'bottom' | 'bottom-end' |
    'left-start' | 'left' | 'left-end';
  distance?: string,
  text?: any
}

export const Tooltip = ({children, position, distance, text}: Props) => {

  if (distance === undefined) distance = `0.5rem`;
  if (position === undefined) position = `top`;

  return(
    <Wrapper>
      <Content position={position}>{children}</Content>
      <TooltipText className="tooltip" position={position} distance={distance}>{text}</TooltipText>
    </Wrapper>
  )
}