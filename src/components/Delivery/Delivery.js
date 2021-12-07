import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsTruckFlatbed } from "react-icons/bs";

function Delivery() {
  return (
    <>
      <HeaderTitle 
        icon={<BsTruckFlatbed />}
        title="3. Metoda dostawy"
      />
    </>
  )
}

export default Delivery;