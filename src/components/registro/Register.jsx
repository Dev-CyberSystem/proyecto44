import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const [dataUser, setDataUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    rol: "usuario",
  });

  const handleChange = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value }); // actualizo el estado con el valor del input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:8080/users", dataUser);
      console.log(response);
      setDataUser({ nombre: "", apellido: "", email: "", password: "", rol: "usuario" });
      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        showConfirmButton: false,
        timer: 3500,
      });

      window.location.href = "/login";

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
          <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={dataUser.nombre}
                  onChange={handleChange}
                  name="nombre"
                  aria-describedby="nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={dataUser.apellido}
                  onChange={handleChange}
                  name="apellido"
                  aria-describedby="apellido"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={dataUser.email}
                  onChange={handleChange}
                  name="email"
                  aria-describedby="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={dataUser.password}
                  onChange={handleChange}
                  name="password"
                  aria-describedby="password"
                />
              </div>
              <div className="mb-3">
                {/* <label htmlFor="rol" className="form-label">
                  rol
                </label> */}
                <input
                  type="hidden"
                  className="form-control"
                  value={dataUser.rol}
                  onChange={handleChange}
                  name="rol"
                  aria-describedby="rol"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
