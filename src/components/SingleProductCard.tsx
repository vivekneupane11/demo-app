import './ProductCard.css'; // Optional: For styling

type ProductTypes = {
  id?:number,
  title?:string,
  price?:string,
  category?:string,
  description?:string,
  image?:string
}

const SingleProductCard = ({ product }:{product:ProductTypes}) => {

  return (
    <div className="product-card single">
      <img src={product.image} height={"300px"} width={"300px"} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-button">View Product</button>
      </div>
    </div>
  );
};

export default SingleProductCard;