import { Col, Container, Row } from "react-bootstrap";
import TableProducts from "../components/productos/TableProducts";

const Administracion = () => {
  return (
    <>
      <h1>Administracion</h1>
      <Container>
        <Row>
          <Col>
            <h2>Tabla de productos</h2>
            <TableProducts />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Administracion;
