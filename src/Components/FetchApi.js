import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [product, isProduct] = useState();

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    // console.log(json);
    isProduct(json);
  };

  return (
    <div className="wrap">
      <div className="wrapper">
        {product?.map((item) => {
          return (
            <div className="wrapper-container">
              <div className="image">
                <img src={item?.image} alt="img" />
              </div>
              <div className="wrapper-class">
                <h4>
                  Product Id : <span>{item?.id} </span>
                </h4>
                <h4>
                  Price : <span>{item?.price} </span>
                </h4>
                <h4>
                  Rating : <span>{item?.rating?.rate} </span>
                </h4>
              </div>
              <div className="title">
                <h3>{item?.title}</h3>
                <h3>{item?.category}</h3>
              </div>
              <div className="button">
                <button>Buy</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchApi;
