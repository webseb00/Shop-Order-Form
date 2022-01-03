import { Container, DarkOverlay, ModalBox, Content, CloseModal } from './Styles';
import { GrFormClose } from "react-icons/gr";

export const Modal = ({ show, hideClose, handleClose, children }) => {
  return (
    <Container show={show} className={show ? 'modal-visible' : 'modal-invisible'}>
      <DarkOverlay />
      <ModalBox>
        <CloseModal 
          type="button" 
          onClick={handleClose}
          hideClose={hideClose}
          >
          <GrFormClose />
        </CloseModal>
        <Content>
          {children}
        </Content>
      </ModalBox>
    </Container>
  )
}