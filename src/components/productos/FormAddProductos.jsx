import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import axios from "axios";

const FormAddProductos = () => {

    const [productos, setProductos] = useState({
        producto: "",
        precio: "",
        stock: "",
        img: "https://picsum.photos/200/300/?blur",
    })

    const handleChange = (e) => {
        setProductos({ ...productos, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {

            const response = axios.post("http://localhost:8080/productos", productos);
            console.log(response);
            setProductos({  producto: "",
            precio: "",
            stock: "",
            img: "https://picsum.photos/200/300/?blur"})
            
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="producto" className="form-label">
                  Producto
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={productos.producto}
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
                  value={productos.precio}
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
                  value={productos.stock}
                  onChange={handleChange}
                  name="stock"
                  aria-describedby="stock"
                />
              </div>

                <Button type="submit" variant="outline-success"> Agregar Producto </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormAddProductos;
