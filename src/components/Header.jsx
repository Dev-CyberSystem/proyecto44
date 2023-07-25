import { useContext } from "react";
import { UsuariosContext } from "../context/UsersContext.jsx";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  const { logout } = useContext(UsuariosContext);

  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user, "users");

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* {user ? <Navbar.Brand href="#home">Bienvenido {user.nombre}</Navbar.Brand> : (<Navbar.Brand href="#home">Comision 44</Navbar.Brand>)} */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                {/* {user?.nombre === "admin" ? (
                  <>
                    <NavDropdown.Item href="/addProducto">
                      ADDProductos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin">
                      Administrador
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/users">Usuarios</NavDropdown.Item>
                  </>
                ) : null} */}

<>
                    <NavDropdown.Item href="/addProducto">
                      ADDProductos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin">
                      Administrador
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/users">Usuarios</NavDropdown.Item>
                  </>

                <NavDropdown.Item href="/tienda">Tienda</NavDropdown.Item>
              </NavDropdown>

              {user ? (
                <>
                  <Nav.Link href="/login" onClick={logout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                
                  <Nav.Link href="/registro">Registro</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
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
