import { Wrapper } from './Styles.js'
import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsCreditCard } from "react-icons/bs";

function Payment() {
  return (
    <Wrapper>
      <HeaderTitle 
        icon={<BsCreditCard />}
        title="3. Metoda Płatności"
      />
    </Wrapper>
  )
};

export default Payment;