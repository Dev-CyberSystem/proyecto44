import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProductosContext } from "../../context/ProductsContext";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const FormUpdateProductos = ({ editProducto, handleClose }) => {
  const [producto, setProducto] = useState(editProducto);

  const { updateProductos } = useContext(ProductosContext);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateProductos(producto);
    Swal.fire({
      icon: "success",
      title: "Producto Editado",
      showConfirmButton: false,
      timer: 1500,
    });
    handleClose();
  };

  return (
    <>
      <Container>
      
        <Row>
          <Col>
            <form onSubmit={handleEdit}>
              <div className="mb-3">
                <label htmlFor="producto" className="form-label">
                  Producto
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.producto}
                  onChange={handleChange}
                  name="producto"
                  aria-describedby="producto"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="precio" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={producto.precio}
                  onChange={handleChange}
                  name="precio"
                  aria-describedby="precio"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.stock}
                  onChange={handleChange}
                  name="stock"
                  aria-describedby="stock"
                />
              </div>

              <Button type="submit" variant="outline-success">
                {" "}
                Editar Producto{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormUpdateProductos;
