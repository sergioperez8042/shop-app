import { useAppSelector } from "../../hooks/hooks";
import { useAppDispatch } from "../../hooks/hooks";
import { remove } from "./cartSlice";
import { useNavigate } from "react-router-dom";

export const Cart: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart);
  //@ts-ignore
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3 className="p-1">Cart</h3>
      <hr />
      <div className="cartWrapper">
        {products?.map((product) => (
          <div key={product.id} className="cartCard">
            <img className="cartImg" src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
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
