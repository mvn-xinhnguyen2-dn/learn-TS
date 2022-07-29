import React, { useEffect } from "react";

interface ProductList {
  key: number;
  icon: string;
  title: string;
  text: string;
}
const productList: ProductList[] = [
  {
    key: 1,
    icon: "fi fi-rr-bullseye-pointer",
    title: "Video Marketing",
    text: "Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor",
  },
  {
    key: 2,
    icon: "fi fi-rr-bullseye-pointer",
    title: "Search Engine Optimization (SEO)",
    text: "Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor",
  },
  {
    key: 3,
    icon: "fi fi-rr-bullseye-pointer",
    title: "Pay Per Click (PPC)",
    text: "Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor",
  },
  {
    key: 4,
    icon: "fi fi-rr-bullseye-pointer",
    title: "Content Marketing",
    text: "Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor",
  },
];

const Product = () => {
  return (
    <section className="section-product">
      <div className="product container">
        <ul className="product-list flex">
          {productList.map((item) => {
            let productEle = <></>;
            productEle = (
              <li className="product-item flex col-6" key={`${item.key}`}>
                <div className="product-icon">
                  <i className={`${item.icon}`}></i>
                </div>
                <div className="product-content">
                  <h4 className="title-h4 mb-10">{`${item.title}`}</h4>
                  <p className="text">{`${item.text}`}</p>
                </div>
              </li>
            );
            return productEle;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Product;
