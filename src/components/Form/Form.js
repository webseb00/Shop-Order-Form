import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsPersonFill } from "react-icons/bs";

function Form() {
  return (
    <>
      <HeaderTitle 
        icon={<BsPersonFill />}
        title="1. Twoje dane"
      />
    </>
  )
}

export default Form;