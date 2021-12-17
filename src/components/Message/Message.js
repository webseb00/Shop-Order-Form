import { Content } from './Styles';

export const Message = ({ type, text }) => {
  return (
    <Content type={type}>{text}</Content>
  )
}