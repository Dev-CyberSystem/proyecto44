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
        <Rutas />
      </ProductsContext>
    </UsersContext>
  );
}

export default App;
