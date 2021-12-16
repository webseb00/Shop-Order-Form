import { Wrapper } from './Styles';

export const Button = ({ type="button", title, mode, fontSize, handler }) => {
  return (
    <Wrapper
      type={type}
      mode={mode}
      fontSize={fontSize}
      onClick={handler}
    >
      {title}
    </Wrapper>
  )
}
