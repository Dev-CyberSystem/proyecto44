import { useState, useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { ProductosContext } from "../../context/ProductsContext";
import Swal from "sweetalert2";

// import axios from "axios";

const FormAddProductos = () => {
  const { addProducto } = useContext(ProductosContext);

  const [productos, setProductos] = useState({
    nombre: "",
    capacidad: "",
    club: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setProductos({ ...productos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProducto(productos);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false,
      timer: 1500,
    });
    setProductos({
      nombre: "",
      capacidad: "",
      club: "",
      direccion: "",
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={productos.nombre}
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
                  value={productos.capacidad}
                  onChange={handleChange}
                  name="capacidad"
                  aria-describedby="capacidad"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="club" className="form-label">
                  club
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={productos.club}
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
                  value={productos.direccion}
                  onChange={handleChange}
                  name="direccion"
                  aria-describedby="direccion"
                />
              </div>

              <Button type="submit" variant="outline-success">
                {" "}
                Agregar Club{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormAddProductos;
