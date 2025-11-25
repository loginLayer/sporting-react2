import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext/CartProvider";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { AdminLayout } from "./components/layouts/AdminLayout";
import { MainLayout } from "./components/layouts/MainLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route
                  path="/category/:categoryId"
                  element={<ItemListContainer />}
                />
                <Route path="/cart" element={<CartView />} />
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Login />} />
                <Route
                  path="alta-productos"
                  element={
                    <RutaProtegida>
                      <ProductFormContainer />
                    </RutaProtegida>
                  }
                />
              </Route>
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
