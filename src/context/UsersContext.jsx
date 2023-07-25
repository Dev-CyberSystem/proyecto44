import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const UsuariosContext = createContext();

// eslint-disable-next-line react/prop-types
const UsersContext = ({ children }) => {
  const [users, setUsers] = useState();
  const [userLogueado, setUserLogueado] = useState();

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/user/usuarios"
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    console.log(email, password, "login Context");
    const response = await axios.post("http://localhost:8081/api/user/login", {
      email,
      password,
    });
    // console.log(response.data.data.token);
    const jwtToken = response.data.data.token;
    const jwtDecode = jwt_decode(jwtToken);
    console.log(jwtDecode);

    setUserLogueado(jwtDecode);
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsuariosContext.Provider
      value={{ users, setUsers, logout, login, userLogueado }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsersContext;
