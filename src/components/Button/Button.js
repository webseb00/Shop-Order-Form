import { Wrapper } from './Styles';

export const Button = ({ title, mode, fontSize, handler }) => {
  return (
    <Wrapper
      type="button"
      mode={mode}
      fontSize={fontSize}
      onClick={handler}
    >
      {title}
    </Wrapper>
  )
}
