import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const FormUpdateProducts = ({ editProduct, updateProducto, handleClose }) => {
  const [producto, setProducto] = useState(editProduct); // producto a editar

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProducto(producto); // producto a editar con los nuevos datos actualizados del form de abajo 
    Swal.fire({
      icon: "success",
      title: "Producto Actualizado",
      showConfirmButton: false,
      timer: 1500,
    });
    handleClose();
  };

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value }); // producto a editar con los nuevos datos actualizados del form de abajo 
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.nombre || ""} 
                  onChange={handleChange}
                  name="nombre"
                  aria-describedby="nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="capacidad" className="form-label">
                  capacidad
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={producto.capacidad || ""}
                  onChange={handleChange}
                  name="capacidad"
                  aria-describedby="precio"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="club" className="form-label">
                  club
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.club || ""}
                  onChange={handleChange}
                  name="club"
                  aria-describedby="club"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label">
                  direccion
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.direccion || ""}
                  onChange={handleChange}
                  name="direccion"
                  aria-describedby="direccion"
                />
              </div>

              <Button type="submit" variant="outline-success">
                Agregar Producto
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormUpdateProducts;
