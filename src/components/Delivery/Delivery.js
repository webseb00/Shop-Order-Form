import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsTruckFlatbed } from "react-icons/bs";
import { Wrapper } from './Styles';

function Delivery() {
  return (
    <Wrapper>
      <HeaderTitle 
        icon={<BsTruckFlatbed />}
        title="2. Metoda dostawy"
      />
    </Wrapper>
  )
}

export default Delivery;