import { useContext } from "react";
import { UsuariosContext } from "../context/UsersContext.jsx";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  const { logOut } = useContext(UsuariosContext);
  const usuarioLogueado = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {usuarioLogueado != null ? (
            <Navbar.Brand href="#home">
              Bienvenido {usuarioLogueado.name}
            </Navbar.Brand>
          ) : (
            "Logueate"
          )}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {usuarioLogueado === null ? (
                <>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/registro">Registro</Nav.Link>
                </>
              ) : (
                <>
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/addProducto">
                      ADDProductos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/administracion">
                      Administracion
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/tienda">Tienda</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut}>
                      Cerrar Sesion
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
