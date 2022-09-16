import { Container } from "@mui/material";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ContainerButton, StyledImageDetail } from "../../components/styled/styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ProdProps } from "../../interfaces/interfaces";
import { add } from "../cart/cartSlice";

export const ProductDetails: FC<ProdProps> = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.product);
  const { pId } = useParams();
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

  return (
    <Container key={prod?.id}>
      <StyledImageDetail
        src={prod?.image}
        className="column mt-4  "
        alt=""
      ></StyledImageDetail>

      <Container>
        <h3 className="mt-3 ">{prod?.title}</h3>

        <ul className="list-group list-group-flush ">
          <li>
            <b className="mb-1">Description: </b>
            <br />
            {prod?.description}
          </li>
          <li>
            <b className="mb-1"> Category: </b>
            <br />
            {prod?.category}
          </li>

          <li></li>
        </ul>
      </Container>
      <ContainerButton onClick={() => addP()}>Add to cart</ContainerButton>

      <ContainerButton onClick={() => navigate(-1)}>Return</ContainerButton>
    </Container>
  );
};
