import { useState } from 'react';
import { Wrapper, BoxWrapper, Box } from './Styles.js'
import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsCreditCard } from "react-icons/bs";
// import radio button
import { RadioItem } from '../InputElements/InputElements';
import { Button } from '../Button/Button';
import { Message } from '../Message/Message';
import { DiscountModalWindow } from '../Modal/DiscountModal';

function Payment({ handlePayment, delivery, error }) {

  // handle login modal
  const [modal, toggleModal] = useState(false);
  const openModal = () => toggleModal(true);
  const closeModal = () => toggleModal(false);

  const handleRadio = e => handlePayment(e.target.value);

  const renderBoxesConditionally = () => {
    if(delivery !== "DPD - pobranie") {
      return (
        <>
        <Box>
          <RadioItem 
            name="payment_method"
            value="PayU"
            label={
              <span><img src="../../img/payu-logo.png" alt="payU" />PayU</span>
            }
            handler={handleRadio}
          />
        </Box>
        <Box>
          <RadioItem 
            name="payment_method"
            value="Pobranie"
            label={
              <span><img src="../../img/wallet-2.png" alt="pobranie" />Płatność przy odbiorze</span>
            }
            handler={handleRadio}
          />
        </Box>
        <Box>
          <RadioItem 
            name="payment_method"
            value="Przelew bankowy"
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
            value="Pobranie"
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
        {error && <Message type="danger" text="Proszę wybrać metodę płatności!" />}
      </BoxWrapper>
      {/* discount code button */}
      <Button
        mode="secondary-outlined"
        title="Dodaj kod rabatowy"
        fontSize={"1.6rem"}
        handler={openModal}
      />
      {/* Modal discount */}
      <DiscountModalWindow 
        modal={modal}
        closeModal={closeModal}
      />
      {/* --- Modal discount --- */}
    </Wrapper>
  )
};

export default Payment;