import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { InputField } from '../InputElements/InputElements';

export const LoginModalWindow = ({ modal, closeModal }) => {
  return (
    <Modal
      show={modal}
      handleClose={closeModal}
    >
      <div className="login-modal">
        <h4 className="login-modal_title">Logowanie do konta</h4>
        <InputField 
          type="email"
          placeholder="Adres email"
        />
        <InputField 
          type="password"
          placeholder="Hasło"
        />
        <Button 
          type="button"
          title="Zaloguj się"
          fontSize="1.5rem"
          padding="1.2rem"
          width="60%"
        />
      </div>
    </Modal>
  )
};