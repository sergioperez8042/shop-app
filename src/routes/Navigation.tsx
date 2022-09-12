import { Route, Routes } from 'react-router-dom';

import { Home } from '../features/home/Home';
import { Cart } from '../features/cart/Cart';

import { ProductDetails } from '../features/product/ProductDetails';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import Product from '../models/product';

export const Navigation = (props:Product) => {

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="product/:pId" element={<ProductDetails product={props} />}></Route>
      </Routes>

    </div>
  );
};
