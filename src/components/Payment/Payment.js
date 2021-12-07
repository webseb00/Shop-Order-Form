import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsCreditCard } from "react-icons/bs";

function Payment() {
  return (
    <>
      <HeaderTitle 
        icon={<BsCreditCard />}
        title="2. Metoda Płatności"
      />
    </>
  )
}

export default Payment;