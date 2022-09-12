import React from 'react';

import styles from './FeatureImage.module.css';

import shoeImg from "../../images/shop1.jpeg";
import shoeImg1 from "../../images/cart2.jpeg";

export const FeatureImage: React.FC<{}> = () => {
  
    return (
        <div className={styles.featureImage}>
            {/* <h2 className={styles.greeting}>Welcome to Shop</h2> */}
            <img 
                src={shoeImg1}
                className={styles.featureShoe}
                alt=""
                title=""
                data-testid="featured-shoe"
            />
            <img 
                src={shoeImg}
                className={styles.featureShoe}
                alt=""
                title=""
                data-testid="featured-shoe"
            />
        </div>
    )
}
