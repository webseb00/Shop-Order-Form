import { Wrapper } from './Styles';

export const Button = ({ title, mode, fontSize }) => {
  return (
    <Wrapper
      type="button"
      mode={mode}
      fontSize={fontSize}
    >
      {title}
    </Wrapper>
  )
}
