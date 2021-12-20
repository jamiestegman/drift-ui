import { useRef } from "react"
import styled from "styled-components"
import { trapFocus } from "../../misc/helpers"
import useClickOutside from "../../hooks/useClickOutside"
import { fadeIn, fadeOut, scaleFadeIn, scaleFadeOut } from "../../misc/animations"

const Overlay = styled.div`
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  animation-fill-mode: forwards;
`

const ModalDiv = styled.div`
  box-shadow: var(--shadow-modal);
  width: 100%;
  max-width: 30rem;
  animation-fill-mode: forwards;
  position: relative;
`

const CloseButton = styled.button`
  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: calc(var(--layout-padding) / 1.5);
  right: calc(var(--layout-padding) / 1.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;

  & svg {
    width: 1rem;
    height: 1rem;
    color: var(--color-hint);
  }

  &:focus {
    box-shadow: var(--shadow-focus-offset);
    border-radius: var(--radius-md);
  }
`

const ModalText = styled.div`
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background-color: var(--color-card);
  padding: var(--layout-padding);

  & > * + * {
    margin-top: 0.5rem;
  }
`

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-label);
`

const Body = styled.p`
  font-size: 0.875rem;
`

const ModalControls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: var(--layout-gap);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  background-color: var(--color-accent);

  & * + * {
    margin-left: var(--layout-gap);
  }
`

interface Props {
  isOpen: boolean,
  setIsOpen: any,
  data: any,
  shouldRender?: boolean
}

export const Modal = ({data, isOpen, setIsOpen, shouldRender}: Props) => {

  const { title, body } = data
  const closeModal = () => setIsOpen(false)

  const modalRef = useRef(null)
  useClickOutside(modalRef, closeModal);

  return(
    <>
    {(shouldRender) && (
      <Overlay style={isOpen ? fadeIn : fadeOut}>
        <ModalDiv ref={modalRef} style={isOpen ? scaleFadeIn : scaleFadeOut} onKeyDown={e => trapFocus(e, modalRef)}>
          <CloseButton onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </CloseButton>
          <ModalText>
            <Title>{title}</Title>
            <Body>{body}</Body>
          </ModalText>
          <ModalControls>{data.controls?.map((control: any, index: number) => (
            <div key={index}>{control}</div>
          ))}</ModalControls>
        </ModalDiv>
      </Overlay>
    )}
    </>
  )
}