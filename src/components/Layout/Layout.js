import { Container, Row } from './LayoutStyles.js';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Row>
        {children}
      </Row>
    </Container>
  )
}

