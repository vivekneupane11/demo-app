import { useEffect, useState } from 'react';
import './App.css';

type Products = {
  id:number,
  title:string,
  price:string,
  category:string,
  description:string,
  image:string
}

function App() {
  const [selectedId,setSelectedId] = useState(1)
  const [products,setProducts] = useState([])
  const [selectedProduct,setSelectedProduct]= useState<any>(null)

useEffect(()=>{
  fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>{
    console.log("Product is setting")
    setProducts(data)
  }).catch(err=>console.log('ERROR HAS OCCURRED'))
},[])


useEffect(()=>{
  fetch(`https://fakestoreapi.com/products/${selectedId}`)
            .then(res=>res.json())
            .then(json=>setSelectedProduct(json))
},[selectedId])




  return (
<main>
<section>
{
    products.map((product:Products,i:number)=><div onClick={()=>setSelectedId(product.id)} key={i} style={{width:'400px'}}>
    <img height={'200px'} width={'200px'} src={product.image} alt={'img'}/>
    <h4>{product.title}</h4>
    <p>{product.description}</p>
    </div>)
  }

  {
  selectedProduct &&   <div  style={{width:'1000px',background:'red'}}>
  <img height={'200px'} width={'200px'} src={selectedProduct.image} alt={'img'}/>
  <h4>{selectedProduct.title}</h4>
  <p>{selectedProduct.description}</p>
  </div>
  }
</section>
</main>
  );
}

export default App;
