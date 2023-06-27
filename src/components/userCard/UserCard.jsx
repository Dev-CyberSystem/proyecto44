import { useContext } from "react";
import { UsuariosContext } from "../../context/UsersContext.jsx";
import { Card } from "react-bootstrap";

const UserCard = () => {
  const { users } = useContext(UsuariosContext);


  console.log(users, "<---- Usuarios de DB");

  return (
    <>
      {users === undefined ? (
        <h1>Cargando...</h1>
      ) : (
        users.map((user) => (
          <Card key={user.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{user.nombre}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                Apellido: {user.apellido} <br />
                Edad: {user.edad}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </>
  );
};

export default UserCard;
