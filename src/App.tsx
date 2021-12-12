import { useAnimatedState } from './hooks/useAnimatedState';
import styled from 'styled-components';

import { Card } from './components/Card/Card';
import { Button } from './components/Button/Button'
import { TextField } from './components/TextField/TextField'
import { Modal } from './components/Modal/Modal'
import { Tooltip } from './components/Tooltip/Tooltip';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10vw;
  background-color: #f3f4f6;
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
      <Card>
        <Button onClick={() => setIsDeactivateModalOpen(true)}>Edit</Button>
        <Button primary>Save</Button>
        <Button warning>Cancel</Button>
        <Tooltip text="Cancel Button" position="bottom">
          <div style={{width: '300px', height: '300px', backgroundColor: 'skyblue'}}></div>
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

    </Container>
  );
}

export default App;
