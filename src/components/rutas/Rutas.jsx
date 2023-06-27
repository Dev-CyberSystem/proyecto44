import { Routes, Route } from "react-router-dom";
import Register from "../registro/Register";
import FormAddProductos from "../productos/FormAddProductos";
import UserCard from "../userCard/UserCard";
import CardProductos from "../productos/CardProductos";

const Rutas = () => {
  return (
    <Routes>
    
      <Route path="/registro" element={<Register />} />
      <Route path="/addProducto" element={<FormAddProductos />} />
      <Route path="/users" element={<UserCard />} />
      <Route path="/tienda" element={<CardProductos />} />

    </Routes>
  );
};

export default Rutas;
