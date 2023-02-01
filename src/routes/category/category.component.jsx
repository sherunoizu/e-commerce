import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";

import { CategoriesContext } from "../../context/categories.context";
import { ProductCard } from "../../components";

import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </CategoryContainer>
    </Fragment>
  );
};
