import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCategory from "./pages/shopCategory/ShopCategory";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import LoginSingup from "./pages/loginSingup/LoginSingup";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import banner_men from "./assets/image/men_banner.jfif";
import banner_woman from "./assets/image/banner_women.jfif";
import banner_kids from "./assets/image/banner_kids.webp";
import { useFetchProduct } from "./hook/useFetchProduct";
function App() {
  const [getProduct, setProduct] = useFetchProduct();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/Men"
            element={<ShopCategory banner={banner_men} category="Men" />}
          />
          <Route
            path="/Woman"
            element={<ShopCategory banner={banner_woman} category="Women" />}
          />
          <Route
            path="/Kids"
            element={<ShopCategory banner={banner_kids} category="Kids" />}
          />
          <Route path="/Product" element={<Product />}>
            <Route path=":ProductId" element={<Product />} />
          </Route>
          <Route path="/LoginSingup" element={<LoginSingup />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
