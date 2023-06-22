import axios from "axios"
import { useState,useEffect } from "react"
import styled from "styled-components"
import { BASE_URL } from "../requestMethod"
import Product from "./Product"

const Container = styled.div`
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Products = ({cat,filters,sort}) => {
 
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilterProducts] = useState([]);
  
  useEffect(()=>{
    const getProducts = async()=>{
     await axios.get( cat ?`${BASE_URL}/product/all_product?category=${cat}`:`${BASE_URL}/product/all_product`)
     .then((req)=>{
         setProducts(req.data);    
         console.log(BASE_URL);
     }).catch((err)=>{
      console.log(err)
     })
     }
    getProducts();
  },[cat])

  useEffect(()=>{
       cat && setFilterProducts(
        products.filter(item=>Object.entries(filters).every(([key,value])=>
          item[key].includes(value)
        ))
       );
  },[products,cat,filters])

  useEffect(()=>{
   if(sort === "newest"){
    setFilterProducts((prev)=>
      [...prev].sort((a,b)=>a.createdAt - b.createdAt ));
   }else if(sort==='low'){
    setFilterProducts((prev)=>
      [...prev].sort((a,b)=>a.price - b.price ));
   }else{
    setFilterProducts((prev)=>
      [...prev].sort((a,b)=>b.price - a.price ));
   }
  },[sort])
  return (
    <Container>
      {cat ? filteredProducts.map(item=>(
        <Product item={item} key={item.id} />
      )):products.map(item=>(
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products