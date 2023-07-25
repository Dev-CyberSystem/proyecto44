import TablaProducts from "../../productos/TablaProducts";
import { Container, Row, Col } from "react-bootstrap";

const Administrador = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Administrador</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <TablaProducts />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Administrador;
