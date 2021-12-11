import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsTruckFlatbed } from "react-icons/bs";
import { Wrapper, Box, Price } from './Styles';
// import radio button
import { RadioItem } from '../InputElements/InputElements';

function Delivery() {
  return (
    <Wrapper>
      <HeaderTitle 
        icon={<BsTruckFlatbed />}
        title="2. Metoda dostawy"
      />
      <Box>
        <RadioItem 
          title="delivery_method"
          value="paczkomat"
          label={
            <span><img src="../../img/inpost-logo.png" alt="paczkomat inpost" />Paczkomat 24/7</span>
          }
        />
        <Price>10.99 zł</Price>
      </Box>
      <Box>
        <RadioItem 
          title="delivery_method"
          value="kurier dpd"
          label={
            <span><img src="../../img/dpd-logo.png" alt="dpd kurier" />Kurier DPD</span>
          }
        />
        <Price>18.00 zł</Price>
      </Box>
      <Box>
        <RadioItem 
          title="delivery_method"
          value="kurier dpd - pobranie"
          label={
            <span><img src="../../img/dpd-logo.png" alt="dpd pobranie" />Kurier DPD - pobranie</span>
          }
        />
        <Price>22.00 zł</Price>
      </Box>
    </Wrapper>
  )
}

export default Delivery;