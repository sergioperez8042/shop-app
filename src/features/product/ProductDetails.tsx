import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './ProductDetails.module.css';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Product from "../../models/product";
import { add } from "../cart/cartSlice";

interface ProdProps {
  product: Product;
}
export const ProductDetails: FC<ProdProps> = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.product);
  console.log(data);
  const { pId } = useParams();
  console.log("id", pId);
  const navigate = useNavigate();

  const addP = () => {
    const item: any = {
      id: prod?.id,
      title: prod?.title,
      price: prod?.price,
      category: prod?.category,
      description: prod?.description,
      image: prod?.image,
      includedInSum: prod?.includedInSum,
    };
    dispatch(add(item));
  };

  const prod = data?.find((p) => p.id.toString() === pId && p.id);
  console.log("prod", prod);

  return (
    <div className="container">
      <div key={prod?.id} className="column mt-4  ">
    
          <img src={prod?.image} alt="" className={styles.images}></img>
   
        <div>
          <h3 className="mt-2">{prod?.title}</h3>
          <ul className="list-group list-group-flush ">
            <li>
              <div>
              <b className="mb-1">Description: </b>
      <br />
              {prod?.description}

              </div>
              
            </li>
            <li>
              <b className="mb-1"> Category: </b>
   <br />
              {prod?.category}
            </li>
              
            <li>
    
            </li>
          </ul>
          <div className={styles.container}>
              <button className={styles.addToCart}  onClick={() => addP()}>
                Add to cart
              </button>

          <button className={styles.addToCart} onClick={() => navigate(-1)}>
            Return
          </button>

          </div>
          </div>
        </div>
      </div>

  );
};
