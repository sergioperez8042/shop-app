import { useNavigate } from "react-router-dom";

import { add } from "../features/cart/cartSlice";
import { useAppSelector } from "../hooks/hooks";
import Product from "../models/product";
import styles from "../features/cart/Cart.module.css";

type Props = {
  item: Product[];
  addtoCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
};

export const Cart: React.FC<Props> = () => {
  const navigate = useNavigate();
  const products: Product[] = useAppSelector((state) => state.cart);

  const total =
    products.length === 0
      ? 0
      : products
          .map((prod) =>
            prod.includedInSum ? prod.price * prod.quantity : prod.price
          )

          .reduce((prodPrice, price) => prodPrice + price);
  return (
    <div>
      <h3 className="p-1">Cart</h3>
      <hr />
      <div className="cartWrapper">
        {products?.map((product) => (
          <div key={product.id} className="cartCard">
            <img className="cartImg" src={product.image} alt="" />
            <h5>{product.title?.slice(0, 10)}</h5>
            <h5>${product.price}</h5>
            <p className={styles.grandTotal}>
              <span>Total</span>
              <span data-testid="grand-total">{`$${total}`}</span>
            </p>
            <button className="btn" onClick={() => add(product)}>
              Remove
            </button>
            <button className="btn" onClick={() => navigate(-1)}>
              Return
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
