import { useState } from 'react';
// import components
import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsPersonFill } from "react-icons/bs";
import { Button } from '../Button/Button';
// component individual styles
import { Wrapper, InfoPart, FormPart, InfoText, InputGroup } from './Styles.js';
// import form elements
import { CheckboxItem, InputField, SelectInput, InputTransition } from '../InputElements/InputElements';
import { Modal } from '../Modal/Modal';

function ClientData({ form, register, errors }) {
  // show extra fields if user checks new account checkbox
  const [checked, setChecked] = useState(true);
  const handleChecked = () => setChecked(!checked);
  // handle login modal
  const [modal, toggleModal] = useState(false);
  const openModal = () => toggleModal(true);
  const closeModal = () => toggleModal(false);
  
  const modalWindow = () => {
    return (
      <Modal
        show={modal}
        handleClose={closeModal}
      >
        {"Somme dummy content"}
      </Modal>
    )
  }
  
  const countries = ['Polska', 'Francja', 'Niemcy', 'Anglia'];

  return (
    <Wrapper>
      <HeaderTitle 
        icon={<BsPersonFill />}
        title="1. Twoje dane"
      />
      <InfoPart>
        <Button 
          title="Logowanie" 
          mode="primary-outlined"
          handler={openModal}
        />
        {/* Modal login */}
        {modalWindow()}
        {/* --- Modal login --- */}
        <InfoText>Masz już konto? Kliknij żeby się zalogować</InfoText>
        <CheckboxItem 
          name="new_account"
          label="Stwórz nowe konto"
          value={checked}
          handler={handleChecked}
        />
      </InfoPart>
      <FormPart>
        <InputField 
          type="email"
          label="email_address"
          placeholder="Email *"
          required={true}
          refs={register("email_address", { required: true, pattern: /^[\w\.]+\@[\w]+\.[\w]+$/ })}
          inputError={errors.email_address}
        />
        {checked &&
          <>
            <InputField 
              type="password"
              label="password"
              placeholder="Hasło"
              required={false}
            />
            <InputField 
              type="password"
              label="password_confirm"
              placeholder="Potwierdź hasło"
              required={false}
            />
          </>
          }
        <InputField 
          type="text"
          label="first_name"
          placeholder="Imię *"
          required={true}
          refs={register("first_name", { required: true, maxLength: 22, pattern: /^[\wzżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/ })}
          inputError={errors.first_name}
        />
        <InputField 
          type="text"
          label="last_name"
          placeholder="Nazwisko *"
          required={true}
          refs={register("last_name", { required: true, maxLength: 22, pattern: /^[\wzżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/ })}
          inputError={errors.last_name}
        />
        <SelectInput 
          label="countries"
          countries={countries}
        />
        <InputField 
          type="text"
          label="home_address"
          placeholder="Ulica i nr. domu *"
          required={true}
          refs={register("home_address", { required: true, pattern: { value: /^[\wzżźćńółęąśŻŹĆĄŚĘŁÓŃ]+\s\d+$/, message: "Format: Wrocławska 13" }})}
          inputError={errors.home_address}
        />
        <InputGroup>
          <InputField 
            type="text"
            label="zip_code"
            placeholder="Kod pocztowy *"
            required={true}
            refs={register("zip_code", { required: true, pattern: { value: /^\d+\-\d+$/, message: "Format kodu: 00-000" } })}
            inputError={errors.zip_code}
          />
          <InputField 
            type="text"
            label="city"
            placeholder="Miasto *"
            required={true}
            refs={register("city", { required: true, maxLength: 30, pattern: /^[\wzżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/ })}
            inputError={errors.city}
          />
        </InputGroup>
        <InputField 
          type="tel"
          label="phone"
          placeholder="Telefon *"
          required={true}
          refs={register("phone", { required: true, maxLength: { value: 9, message: "Pole może zawierać maksymalnie 9 cyfr" }, pattern: /(\d{9})|(\d{3}\s\d{3}\s\d{3})/ })}
          inputError={errors.phone}
        />
      </FormPart>
      <InfoPart>
        <CheckboxItem 
          label="Dostawa pod inny adres"
        />
      </InfoPart>
    </Wrapper>
  )
}

export default ClientData;