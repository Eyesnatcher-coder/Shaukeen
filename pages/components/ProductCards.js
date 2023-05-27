import React from "react";
import ProductCardContent from "./ProductCardContent";



export default function ProductCard({ products }) {

  return (
    <div>
      <div className="product-card-div">
        {products?.map((data) => (
          <ProductCardContent data={data}/>
        ))}
      </div>
      
    </div>
  );
}
