import React, { useState } from "react";
import { FaProductHunt, FaTools, FaRegSmileBeam } from "react-icons/fa";
import { GiFemale, GiMale } from "react-icons/gi";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import styles from "../components/navBar/NavBar.module.css";
import { getProduct } from "../features/product";
import { useEffect } from "react";
import { Loader } from "../components/loader/loader";
import { ProductCard } from "../features/product/ProductCard";

export const Collections: React.FC<{}> = () => {
  const { data, isLoading } = useAppSelector((state) => state.product);
  const [filter, setFilter] = useState(data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const filterProduct = (cat: string) => {
    const list = data?.filter((item) => item.category === cat);
    //@ts-ignore
    setFilter(list);
  };

  return (
    <div>
      <div className="buttons d-flex justify-content-center mb-10 pb-5">
        <button className={styles.link} onClick={() => setFilter(data)}>
          {<FaProductHunt />} Product
        </button>

        <button
          className={styles.link}
          onClick={() => filterProduct("men's clothing")}
        >
          {<GiMale />} Men
        </button>
        <button
          className={styles.link}
          onClick={() => filterProduct("women's clothing")}
        >
          {<GiFemale />} Women
        </button>
        <button
          className={styles.link}
          onClick={() => filterProduct("jewelery")}
        >
          {" "}
          {<FaRegSmileBeam />}Jewelery
        </button>

        <button
          className={styles.link}
          onClick={() => filterProduct("electronics")}
        >
          {<FaTools />} Electronic
        </button>
      </div>

      <div className="container py-5">
        <div className="row">
          {isLoading ? (
            <Loader />
          ) : (
            filter &&
            //@ts-ignore
            filter.map((prod) => (
              <div className="col-md-6 col-lg-4" key={prod.id}>
                <ProductCard product={prod} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
