// import { useContext } from 'react';
// import { UsuariosContext } from '../context/UsersContext.jsx'
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap';


const Header = () => {

    // const {users} = useContext(UsuariosContext)

  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Bienvenido {users.nombre} {users.apellido}  </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Usuarios</Nav.Link>
            <Nav.Link href="/registro">Registro</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/addProducto">ADDProductos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header