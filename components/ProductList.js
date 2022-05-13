import ProductCard from "./ProductCard";

const ProductList = ({ products, isMerchant }) => {
  return (
    <div className="flex flex-wrap mt-8 items-stretch">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          imgUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          isMerchant={isMerchant}
        />
      ))}
    </div>
  );
};

export default ProductList;
