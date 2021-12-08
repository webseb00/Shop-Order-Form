import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsClipboardData } from "react-icons/bs";
import { Wrapper } from './Styles';

function Summary() {
  return (
    <Wrapper>
      <HeaderTitle 
        icon={<BsClipboardData />}
        title="4. Podsumowanie"
      />
    </Wrapper>
  )
}

export default Summary;