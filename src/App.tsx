import { useAnimatedState } from './hooks/useAnimatedState';
import styled from 'styled-components';

import { Card } from './components/Card/Card';
import { Button } from './components/Button/Button'
import { TextField } from './components/TextField/TextField'
import { Modal } from './components/Modal/Modal'
import { Tooltip } from './components/Tooltip/Tooltip';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--layout-margin);
  height: var(--header-height);
`

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - var(--header-height));
  padding: var(--layout-margin);
  padding-top: 0;
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: var(--layout-margin);

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  & button + button {
    margin-top: calc(var(--layout-gap) * 3);
  }
`

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--layout-margin);
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
    <>
    <Header>
      <div>Logo</div>
      <div>User controls</div>
    </Header>

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
    </>
  );
}

export default App;
