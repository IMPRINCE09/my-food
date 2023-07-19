import React from "react";
import FetchApi from "./FetchApi";

const Home = () => {
  return (
    <div>
      <div className="heading">
        <h2>
          A product description is a form of marketing copy used to describe and
          explain the benefits of your product. In other words, it provides all
          the information and details of your product on your ecommerce site.
          These product details can be one sentence, a short paragraph or
          bulleted.
        </h2>
      </div>
      <FetchApi />
    </div>
  );
};

export default Home;
