import React from 'react';

import { Image, StyledImageFuture } from '../components/styled/styled';
import shoeImg from '../assets/cart2.jpeg';
import shoeImg1 from '../assets/shop1.jpeg';

export const FeatureImage: React.FC<{}> = () => {
  return (
    <StyledImageFuture >
      <Image src={shoeImg1} alt="" title="" />
      <Image src={shoeImg}  alt="" title="" />
    </StyledImageFuture>
  );
};
