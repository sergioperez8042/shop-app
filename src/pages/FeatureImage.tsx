import React from "react";
import { StyledImageFuture , Image} from "../components/styled/styled";

import styles from "../features/home/FeatureImage.module.css";

import shoeImg from "../images/cart2.jpeg";

import shoeImg1 from "../images/shop1.jpeg";

export const FeatureImage: React.FC<{}> = () => {
  return (
    <StyledImageFuture >
      <Image src={shoeImg1} alt="" title="" />
      <Image src={shoeImg}  alt="" title="" />
    </StyledImageFuture>
  );
};
