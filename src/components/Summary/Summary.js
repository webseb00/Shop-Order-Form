import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsClipboardData } from "react-icons/bs";

function Summary() {
  return (
    <>
      <HeaderTitle 
        icon={<BsClipboardData />}
        title="4. Podsumowanie"
      />
    </>
  )
}

export default Summary;