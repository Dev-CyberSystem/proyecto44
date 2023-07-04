import { useContext, useState } from "react";
import { ProductosContext } from "../../context/ProductsContext";
import Swal from "sweetalert2";
import { Table, Modal } from "react-bootstrap";
import FormUpdateProductos from "./FormUpdateProductos";

const TableProducts = () => {
  const { productos, deleteProduct } = useContext(ProductosContext);
  const [editProducto, setEditProducto] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (producto) => {
    console.log(producto, "producto desde table products");
    setEditProducto(producto);
    handleShow();
  };

  const handleDelete = (id) => {
    deleteProduct(id);
    Swal.fire({
      icon: "success",
      title: "Producto Eliminado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      {productos === undefined ? (
        <h1>No hay productos disponibles</h1>
      ) : (
        productos.map((producto) => {
          return (
            <>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{producto.producto}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.stock}</td>
                    <td>{producto.img}</td>
                    <td>
                      <button
                        className="btn btn-warning m-1"
                        onClick={() => handleEdit(producto)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => handleDelete(producto.id)}
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edicion de Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FormUpdateProductos editProducto={editProducto} handleClose={handleClose} />
                </Modal.Body>
              </Modal>
            </>
          );
        })
      )}
    </>
  );
};

export default TableProducts;
