import "./App.css";
import Products from "./Pages/Products";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Navigate to="products" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Route path="store" element={<Store />} />
  <Route path="account" element={<Account />} />
  <Route path="wishList" element={<WishList />} />
  <Route path="basket" element={<Basket />} /> */
}
