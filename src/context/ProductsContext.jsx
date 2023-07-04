import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductosContext = createContext(); //creamos el contexto

// eslint-disable-next-line react/prop-types
const ProductsContext = ({ children }) => {
  //vamos a poner todo el crud de productos
  const [productos, setProductos] = useState([]);

  //get ----> trae todos los productos
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/productos");
      console.log(response.data);
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //post ----> crea un producto

  const addProduct = (producto) => {
    try {
      const response = axios.post("http://localhost:8080/productos", producto);
      setProductos([...productos, response]);
    } catch (error) {
      console.log(error);
    }
  };

  //put ----> edita un producto

  const updateProductos = async (producto) => {
    try {
      await axios.put(
        `http://localhost:8080/productos/${producto.id}`,
        producto
      );
      await getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  //delete ----> borra un producto

  const deleteProduct = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8080/productos/${id}`);
      const deleteProduct = productos.filter((producto) => producto.id !== id);
      setProductos(deleteProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductosContext.Provider
      value={{
        productos,
        setProductos,
        addProduct,
        deleteProduct,
        updateProductos,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductsContext;
