import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { getProduct } from "../../features/product/productAPI";
import { ProductCard } from "../../features/product/ProductCard";
import { Loader } from "../../components/loader/loader";

export const Product = () => {
  const dispatch = useAppDispatch();



  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
 <>
 <h1>Product</h1>

    </>
    
  );
};
