import React, { useState, useEffect } from "react";
import { getProducts } from "./mockApi";
import Product from "./Product";

function App() {
  const [productCount, setProductCount] = useState(4);
  const [products, setProducts] = useState(getProducts(productCount));

  useEffect(() => {
    setProducts(getProducts(productCount));
  }, [productCount]);

  const handleChange = ({ target: { value } }) => {
    if (value && value > -1) {
      setProductCount(parseInt(value));
    } else {
      setProductCount("");
    }
  };

  return (
    <div className="flex flex-col">
      <label className="flex justify-center text-2xl">
        Product Count:
        <input
          className="ml-4 w-16"
          min="0"
          type="number"
          value={productCount || ""}
          onInput={handleChange}
        />
      </label>

      <div className="flex flex-wrap">
        {products.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
