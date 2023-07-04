import { Routes, Route } from "react-router-dom";
import Register from "../registro/Register";
import FormAddProductos from "../productos/FormAddProductos";
import UserCard from "../userCard/UserCard";
import Administracion from "../../pages/Administracion";
import Tienda from "../../pages/tienda/Tienda";
import Login from "../login/Login";
import Home from "../../pages/home/Home";

const usuarioLogueado = JSON.parse(localStorage.getItem("user"));

console.log(usuarioLogueado, "usuarioLogueado")
const Rutas = () => {
  return (
    <Routes>
      {usuarioLogueado != null ? (
        <>
          
          <Route path="/addProducto" element={<FormAddProductos />} />
          <Route path="/users" element={<UserCard />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/administracion" element={<Administracion />} />
        </>
      ) : (
        <>
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </>
      )}
    </Routes>
  );
};

export default Rutas;
