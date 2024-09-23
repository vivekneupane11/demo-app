import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/Product";
import SingleProductCard from "./components/SingleProductCard";
type ProductTypes = {
  id:number,
  title:string,
  price:string,
  category:string,
  description:string,
  image:string
}
function App() {
  const [products, setProducts] = useState([]);
  const [id,setId]= useState<number|null>(null)
  const [singleProduct,setSingleProduct] = useState({})

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("This is our data", data);
        setProducts(data);
      })
      .catch((err) => console.log("Error occured", err));
  }, []);

  useEffect(()=>{
    if(!id) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setSingleProduct(json))
  },[id])

  const handleName = (id:number)=>{
   setId(id)
  }

  return (
    <main>
     {
      products.length === 0  && <p>Loading...</p>
     } 
      <section style={{ width: "100%" }}>
        {
         <SingleProductCard product={singleProduct} />
        }
      </section>

      {products.map((product:ProductTypes, i) => (
        <button onClick={()=>handleName(product.id)} style={{ outline: "none", border: "none" }}>
          <ProductCard product={product} />
        </button>
      ))}
    </main>
  );
}

export default App;
