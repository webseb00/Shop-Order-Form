import { Container, Row, Content } from './LayoutStyles.js';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Row>
        {children}
      </Row>
    </Container>
  )
}

export const OrderMethods = ({ children }) => {
  return (
    <Content>
      {children}
    </Content>
  )
}