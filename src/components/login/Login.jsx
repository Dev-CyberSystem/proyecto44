import { useState, useContext } from "react";
import { UsuariosContext } from "../../context/UsersContext";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const {users} = useContext(UsuariosContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const user = users.find(user => user.email === email && user.password === password)
            console.log(user)
            if (user){
                alert("Bienvenido")
                localStorage.setItem("user", JSON.stringify(user))
                window.location.href = "/"
            }
            else{
                alert("Usuario no encontrado")
            }


            
        } catch (error) {
            console.log(error)
        }
    }




  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email"> Correo electronico </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="email"
            onChange={(e) => setEmail(e.target.value) }
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password"> Contraseña </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            aria-describedby="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
    </>
  );
};

export default Login;
