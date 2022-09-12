import { FaCartPlus } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";

import { add } from "../../features/cart/cartSlice";
import styles from "../../features/product/ProductCard.module.css";
import { useAppDispatch } from "../../hooks/hooks";
import Product from "../../models/product";

export interface ProdProps {
  product: Product;
}

export const ProductCard: React.FC<ProdProps> = (props) => {
  const dispatch = useAppDispatch();

  const {
    product: { id, title, price, category, description, image },
  } = props;

  const addP = () => {
    const item: Product = {
      id: id,
      title: title,
      price: price,
      category: category,
      description: description,
      image: image,
      includedInSum: false,
      page: 0,
      per_page: 0
    };
    dispatch(add(item));
  };
  return (
    <div className={styles.card}>
      <img src={image} alt="shoe" title={title} className={styles.cardImage} />
      <p className={styles.shoeName}>{title}</p>
      <p className={styles.shoeCategory}>{`Category: ${category}`}</p>
      <p className={styles.shoePrice}>{`Price: ${price}`}</p>
      <button onClick={() => addP()} className={styles.addToCart}>
        <FaCartPlus /> Add to Cart
      </button>

      <button className={styles.details}>
        <Link style={{ color: "white" }} to={`/product/${id}`}>
          <MdDescription /> Product Details
        </Link>
      </button>
    </div>
    
  );
};
