import { FaCartPlus } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, StyledCard, StyledCategory, StyledImage, StyledPrice, StyledTitle } from "../../components/styled/styled";
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
      per_page: 0,
      quantity: 0,
    };
    dispatch(add(item));
  };
  return (
    <StyledCard>
      <StyledImage src={image} alt="shoe" title={title} />

      <StyledTitle>{title.slice(0, 17)}</StyledTitle>
      <StyledCategory>{`Category: ${category}`}</StyledCategory>
      <StyledPrice>{`Price: ${price}`}</StyledPrice>

      <Button onClick={() => addP()}>
        <FaCartPlus /> Add to Cart
      </Button>

      <Button color="white" backgroundColor="#282c34" onClick={() => addP()}>
        <Link style={{ color: "white" }} to={`/product/${id}`}>
          <MdDescription /> Product Details
        </Link>
      </Button>
    </StyledCard>
  );
};
