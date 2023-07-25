import { useContext, useState } from "react";
import { ProductosContext } from "../../context/ProductsContext";
import { Table, Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import FormUpdateProducts from "./FormUpdateProducts";
const TablaProducts = () => {
  const { productos, deleteProducto, updateProducto } =
    useContext(ProductosContext);
  const [show, setShow] = useState(false);
  const [editProduct, setEditProduct] = useState(null); // producto a editar

  const handleDelete = (id) => {
    deleteProducto(id);
    Swal.fire({
      icon: "success",
      title: "Producto Eliminado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleEdit = (producto) => {
    setEditProduct(producto); // producto a editar
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setEditProduct(null);
  };

  return (
    <>
      <h1>Tabla de Productos</h1>

      {productos.length === 0 ? (
        <h1>No hay productos Disponibles</h1>
      ) : (
        productos.map((producto) => {
          return (
            <>
              <Table responsive>
                <thead>
                  <tr key={producto._id}>
                    <th>Nombre</th>
                    <th>Capacidad</th>
                    <th>Club</th>
                    <th>Dirección</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{producto.nombre}</td>
                    <td>{producto.capacidad}</td>
                    <td>{producto.club}</td>
                    <td>{producto.direccion}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleEdit(producto)}
                      >
                        Editar
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(producto._id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edición de producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {editProduct && (
                    <FormUpdateProducts
                      editProduct={editProduct}
                      updateProducto={updateProducto}
                      handleClose={handleClose}
                    />
                  )}
                </Modal.Body>
              </Modal>
            </>
          );
        })
      )}
    </>
  );
};

export default TablaProducts;
