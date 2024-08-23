import Product from "../product/product";

const Products = ({ prs }) => {
  const prodsMapped = prs.map((pr, i) => <Product key={i} name={pr}></Product>);
  return prodsMapped;
};

export default Products;
