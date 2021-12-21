import { Wrapper } from './Styles';

export const Button = ({ type="button", title, mode, fontSize, padding, width, handler, disabled }) => {
  return (
    <Wrapper
      type={type}
      mode={mode}
      fontSize={fontSize}
      padding={padding}
      width={width}
      onClick={handler}
      disabled={disabled}
    >
      {title}
    </Wrapper>
  )
}
