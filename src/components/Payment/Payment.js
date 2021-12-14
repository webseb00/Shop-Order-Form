import { Wrapper, BoxWrapper, Box } from './Styles.js'
import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsCreditCard } from "react-icons/bs";
// import radio button
import { RadioItem } from '../InputElements/InputElements';
import { Button } from '../Button/Button';

function Payment({ handlePayment, delivery }) {

  const handleButton = () => {
    console.log('discount');
  }

  const handleRadio = e => handlePayment(e.target.value);

  const renderBoxesConditionally = () => {
    if(delivery !== "kurier dpd - pobranie") {
      return (
        <>
        <Box>
          <RadioItem 
            title="payment_method"
            value="payu"
            label={
              <span><img src="../../img/payu-logo.png" alt="payU" />PayU</span>
            }
            handler={handleRadio}
          />
        </Box>
        <Box>
          <RadioItem 
            title="payment_method"
            value="pobranie"
            label={
              <span><img src="../../img/wallet-2.png" alt="pobranie" />Płatność przy odbiorze</span>
            }
            handler={handleRadio}
          />
        </Box>
        <Box>
          <RadioItem 
            title="payment_method"
            value="przelew"
            label={
              <span><img src="../../img/druk.png" alt="payU" />Przelew bankowy - zwykły</span>
            }
            handler={handleRadio}
          />
        </Box>
      </>
      )
    } else {
      return (
        <Box>
          <RadioItem 
            title="payment_method"
            value="pobranie"
            label={
              <span><img src="../../img/wallet-2.png" alt="pobranie" />Płatność przy odbiorze</span>
            }
            handler={handleRadio}
          />
        </Box>
      )
    }
  }

  return (
    <Wrapper>
      <HeaderTitle 
        icon={<BsCreditCard />}
        title="3. Metoda Płatności"
      />
      <BoxWrapper>
        {renderBoxesConditionally()}
      </BoxWrapper>
      {/* discount code button */}
      <Button
        mode="secondary-outlined"
        title="Dodaj kod rabatowy"
        fontSize={"1.6rem"}
        handler={handleButton}
      />
    </Wrapper>
  )
};

export default Payment;