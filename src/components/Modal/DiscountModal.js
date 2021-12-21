import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { InputField } from '../InputElements/InputElements';

export const DiscountModalWindow = ({ modal, closeModal }) => {
  return (
    <Modal
      show={modal}
      handleClose={closeModal}
    >
      <div className="discount-modal">
        <InputField 
          type="text"
          placeholder="Wpisz kod rabatowy"
        />
        <Button 
          mode="primary-outlined"
          type="button"
          title="Zatwierdź kod rabatowy"
          fontSize="1.5rem"
          padding="1.2rem"
          width="80%"
        />
      </div>
    </Modal>
  )
}