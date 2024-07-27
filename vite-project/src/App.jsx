import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ListProductContainer from "./Components/ListProductContainer/ListProductContainer";
import "./App.css";
function App() {
  const [count, setCount] = useState(2);

  return (
      <BrowserRouter>
        <div className="app-div" style={{ marginBottom: '60px', minHeight: '100vh' }}>
          <Nav count={count} setCount={setCount} title="Arma tu PC" />
          <Routes>
            <Route
              path="/" 
              element={<ListProductContainer greeting="Productos para el armado de Pc:" />}
            />
            <Route exact path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route 
              path="/category/:categoryId"
              element={<ListProductContainer />} 
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
