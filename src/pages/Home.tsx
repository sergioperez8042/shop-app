import React from "react";

import { FeatureImage } from "./FeatureImage";
import { Collections } from "../pages/Collections";

export const Home: React.FC<{}> = () => {
  return (
    <div className="container my-5 py-5">
      <FeatureImage />
      <div className="row">
        <div className="col-12 mb-1">
          <h1 className="display-5 fw-bolder text-center">Products</h1>
          <hr />
        </div>
      </div>
      <Collections />
    </div>
  );
};
