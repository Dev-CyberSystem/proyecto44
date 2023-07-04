import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { ProductosContext } from "../../context/ProductsContext";

const CardProductos = () => {
  const { productos } = useContext(ProductosContext);
  console.log(productos, "productos desde card productos");

  return (
    <div className="mx-2 d-flex flex-row">
      {productos.length === 0 ? (
        <h2> No hay productos disponibles </h2>
      ) : (
        productos.map((producto) => (
          <div key={producto.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={producto.img} />
              <Card.Body>
                <Card.Title>{producto.producto}</Card.Title>
                <Card.Text>
                  Precio: {producto.precio} <br />
                  Stock: {producto.stock}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))
      )}
    </div>
  );
};

export default CardProductos;
