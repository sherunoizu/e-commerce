import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";

import { CategoriesContext } from "../../context/categories.context";
import { ProductCard } from "../../components";

import "./category.styles.scss";

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </Fragment>
  );
};
