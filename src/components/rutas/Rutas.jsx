import { Routes, Route } from "react-router-dom";
import Register from "../registro/Register";
import FormAddProductos from "../productos/FormAddProductos";
import UserCard from "../userCard/UserCard";
import Tienda from "../pages/tienda/tienda";
import Home from "../pages/home/Home";
import Administrador from "../pages/administrador/Administrador";
import Login from "../pages/login/Login";


const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/addProducto" element={<FormAddProductos />} />
      <Route path="/users" element={<UserCard />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/admin" element={<Administrador />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Rutas;
