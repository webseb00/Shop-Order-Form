// import components
import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsPersonFill } from "react-icons/bs";
import { Button } from '../Button/Button';
// component individual styles
import { Wrapper, InfoPart, InfoText, InputGroup } from './Styles.js';
// import form elements
import { CheckboxItem, InputField, SelectInput } from '../InputElements/InputElements';

function Form() {
  const countries = ['Polska', 'Francja', 'Niemcy', 'Anglia'];

  return (
    <Wrapper>
      <HeaderTitle 
        icon={<BsPersonFill />}
        title="1. Twoje dane"
      />
      <InfoPart>
        <Button title="Logowanie" />
        <InfoText>Masz już konto? Kliknij żeby się zalogować</InfoText>
        <CheckboxItem 
          name="new_account"
          label="Stwórz nowe konto"
        />
      </InfoPart>
      <form>
        <InputField 
          type="email"
          label="email_address"
          placeholder="Email *"
          required={false}
        />
        <InputField 
          type="password"
          label="password"
          placeholder="Hasło *"
          required={false}
        />
        <InputField 
          type="password"
          label="password_confirm"
          placeholder="Potwierdź hasło *"
          required={false}
        />
        <InputField 
          type="text"
          label="first_name"
          placeholder="Imię *"
          required={true}
        />
        <InputField 
          type="text"
          label="last_name"
          placeholder="Nazwisko *"
          required={true}
        />
        <SelectInput 
          label="countries"
          countries={countries}
        />
        <InputField 
          type="text"
          label="home_address"
          placeholder="Adres *"
          required={true}
        />
        <InputGroup>
          <InputField 
            type="text"
            label="zip_code"
            placeholder="Adres *"
            required={true}
          />
          <InputField 
            type="text"
            label="city"
            placeholder="Miasto *"
            required={true}
          />
        </InputGroup>
        <InputField 
          type="phone"
          label="last_name"
          placeholder="Telefon *"
          required={true}
        />
      </form>
      <InfoPart>
        <CheckboxItem 
          name="new_account"
          label="Dostawa pod inny adres"
        />
      </InfoPart>
    </Wrapper>
  )
}

export default Form;