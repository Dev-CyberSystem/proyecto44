import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductosContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductsContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8001/api/canchas");
      setProductos(response.data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  const addProducto = async (producto) => {
    try {
      const response = await axios.post(
        "http://localhost:8001/api/canchas",
        producto
      );
      setProductos([...productos, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProducto = async (id) => {
    console.log(id, "deleteProducto")
    try {
      await axios.delete(`http://localhost:8001/api/canchas/${id}`);
      const newProductos = productos.filter((producto) => producto._id !== id);
      setProductos(newProductos);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProducto = async (updatedProduct) => {
    console.log(updatedProduct, "updateProducto")
    try {
      await axios.put(
        `http://localhost:8001/api/canchas/${updatedProduct._id}`,
        updatedProduct
      );
      const newProductos = productos.map((producto) =>
        producto._id === updatedProduct._id ? updatedProduct : producto
      );
      setProductos(newProductos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos(); 
  }, []);

  return (
    <ProductosContext.Provider
      value={{
        productos,
        setProductos,
        addProducto,
        deleteProducto,
        updateProducto,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductsContext;
