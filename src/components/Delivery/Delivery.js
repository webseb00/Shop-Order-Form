import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsTruckFlatbed } from "react-icons/bs";
import { Wrapper, BoxWrapper, Box, Price } from './Styles';
// import radio button
import { RadioItem } from '../InputElements/InputElements';
import { Message } from '../Message/Message';

function Delivery({ handleDelivery, error }) {

  const handleRadio = e => {
    const arr = e.target.value.split('|');

    handleDelivery(arr[0].trim(), Number(arr[1]));
  };

  return (
    <Wrapper>
      <HeaderTitle 
        icon={<BsTruckFlatbed />}
        title="2. Metoda dostawy"
      />
      <BoxWrapper>
        <Box>
          <RadioItem 
            name="delivery_method"
            value="Paczkomat Inpost | 10.99"
            label={
              <span><img src="../../img/inpost-logo.png" alt="paczkomat inpost" />Paczkomat 24/7</span>
            }
            handler={handleRadio}
          />
          <Price>10.99 zł</Price>
        </Box>
        <Box>
          <RadioItem 
            name="delivery_method"
            value="Kurier DPD | 18"
            label={
              <span><img src="../../img/dpd-logo.png" alt="dpd kurier" />Kurier DPD</span>
            }
            handler={handleRadio}
          />
          <Price>18.00 zł</Price>
        </Box>
        <Box>
          <RadioItem 
            name="delivery_method"
            value="Kurier DPD - pobranie | 22"
            label={
              <span><img src="../../img/dpd-logo.png" alt="dpd pobranie" />Kurier DPD - pobranie</span>
            }
            handler={handleRadio}
          />
          <Price>22.00 zł</Price>
        </Box>
      </BoxWrapper>
      {error && <Message type="danger" text="Proszę wybrać sposób dostawy!" />}
    </Wrapper>
  )
}

export default Delivery;