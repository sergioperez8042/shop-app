import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';

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
        <Route path="/cart" element={<Cart addtoCart={function (clickedItem: Product): void {
          throw new Error('Function not implemented.');
        } } removeFromCart={function (id: number): void {
          throw new Error('Function not implemented.');
        } } item={[]} />}></Route>
        <Route path="product/:pId" element={<ProductDetails product={props} />}></Route>
      </Routes>

    </div>
  );
};
