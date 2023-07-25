import { useContext } from "react";
import { ProductosContext } from "../../context/ProductsContext";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

const CardProductos = () => {
  const { productos, updateProducto } = useContext(ProductosContext);

  const handleCompra = (id, stock, producto, precio) => {
    if (stock > 0) {
      // Reducir el stock en 1
      const updatedProduct = {
        id,
        stock: stock - 1,
        producto: producto,
        precio: precio,
        img: "https://picsum.photos/200",
      };
      updateProducto(updatedProduct);
      Swal.fire({
        icon: "success",
        title: "Producto Agregado al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      alert("No hay stock disponible");
    }
  };
  return (
    <>
      <div className="d-flex flex-row">
        {productos === undefined ? (
          <h1>Cargando...</h1>
        ) : (
          productos.map((producto) => {
            return (
              <>
                <Container>
                  <Row>
                    <Col>
                      <Card style={{ width: "18rem" }}>
                        <Card.Body>
                          <Card.Title>{producto.nombre}</Card.Title>
                          <Card.Text>
                            Capacidad: {producto.capacidad} <br />
                            Club: {producto.club}
                            Dirección: {producto.direccion}
                          </Card.Text>
                          {producto.stock > 0 ? (
                            <Button
                              onClick={() =>
                                handleCompra(
                                  producto.id,
                                  producto.stock,
                                  producto.producto,
                                  producto.precio
                                )
                              }
                              variant="outline-success"
                            >
                              Agregar al carrito
                            </Button>
                          ) : (
                            "Sin Stock del producto"
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default CardProductos;
