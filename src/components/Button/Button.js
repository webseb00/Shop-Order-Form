import { Wrapper } from './Styles';

export const Button = ({ type="button", title, mode, fontSize, handler, disabled }) => {
  return (
    <Wrapper
      type={type}
      mode={mode}
      fontSize={fontSize}
      onClick={handler}
      disabled={disabled}
    >
      {title}
    </Wrapper>
  )
}
