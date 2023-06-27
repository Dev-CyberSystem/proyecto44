import Header from "./components/Header";
import Rutas from "./components/rutas/Rutas";
import ProductsContext from "./context/ProductsContext";

import UsersContext from "./context/UsersContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UsersContext>
      <ProductsContext>
        <Header />
        <h1>Home</h1>
        <Rutas />
      </ProductsContext>
    </UsersContext>
  );
}

export default App;
