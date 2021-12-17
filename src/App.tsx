import { useAnimatedState } from './hooks/useAnimatedState';
import styled from 'styled-components';

import { Card } from './components/Card/Card';
import { Button } from './components/Button/Button'
import { TextField } from './components/TextField/TextField'
import { Modal } from './components/Modal/Modal'
import { Tooltip } from './components/Tooltip/Tooltip';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 4vw;
  background-color: #f3f4f6;
  width: 100vw;
  height: 100vh;
`

const Navigation = styled.nav`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  height: 70%;

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
  }

  & button + button {
    margin-top: calc(var(--layout-gap) * 3);
  }
`

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {

  const [isDeactivateModalOpen, setIsDeactivateModalOpen, shouldRender] = useAnimatedState(false, 240)
  const deactivateModalProps = {
    title: "Deactivate account",
    body: "Hello, this is the body text.",
    controls: [
      <Button autoFocus onClick={() => setIsDeactivateModalOpen(false)}>Cancel</Button>,
      <Button warning onClick={() => setIsDeactivateModalOpen(false)}>Deactivate</Button>
    ]
  }

  return (
    <Container>

      <Navigation>
        <Card stack>
          <Button primary>Click</Button>
          <Button primary>Click</Button>
          <Button primary>Click</Button>
          <Button primary>Click</Button>
        </Card>
      </Navigation>

      <Main>
      <Card>
        <Button onClick={() => setIsDeactivateModalOpen(true)}>Edit</Button>
        <Button primary>Save</Button>
        <Button warning>Cancel</Button>
        <Tooltip text="Cancel Button" position="top">
          <div style={{width: '300px', height: '300px', backgroundColor: 'rgba(0,0,0,0.03)'}}></div>
        </Tooltip>
        <TextField
          id="name"
          hint="We'll never share your email address with anyone.">
          Email
        </TextField>
        <Modal
          isOpen={isDeactivateModalOpen}
          setIsOpen={setIsDeactivateModalOpen}
          shouldRender={shouldRender}
          data={deactivateModalProps} />
      </Card>
      </Main>

    </Container>
  );
}

export default App;
