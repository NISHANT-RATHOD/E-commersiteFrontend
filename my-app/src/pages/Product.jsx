import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { useLocation } from "react-router-dom"
import { mobile } from '../responsive'
import { useState } from 'react'
import { useEffect } from 'react'
import { publicRequest } from '../requestMethod'
import { useDispatch } from 'react-redux'

const Container = styled.div``

const Wrapper = styled.div`
   padding: 50px;
   display: flex;
   ${mobile({padding:'10px',flexDirection:'column'})}

`

const ImgContainer = styled.div`
   flex: 1;
`

const Image = styled.img`
   width: 100%;
   height: 90vh;
   object-fit: cover;
   ${mobile({height:'40vh'})}
`

const InfoContainer = styled.div`
   flex: 1;
   padding: 0 50px;
   ${mobile({padding:'10px'})}

`

const Title = styled.h1`
   font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0;
`

const Price = styled.span`
   font-weight: 100;
   font-size: 40px;
`

const FilterContainer = styled.div`
   width: 50%;
   margin: 30px 0;
   display:flex;
   justify-content: space-between;
   ${mobile({width:'100%'})}
`

const Filter = styled.div`
   display: flex;
   align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background-color: ${props=>props.color};
     margin: 0 5px;
     cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    outline: none;
    cursor: pointer;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width:'100%'})}

`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
      background-color: teal;
      color: white;
    }
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product,setProduct] = useState({});
    const [color,setColor] = useState([]);
    const [quantity,setQuantity] = useState(1)
    const [handlesize,setHandleSize] = useState({S:['S','M','L'],Size:'S'});
    const dispatch = useDispatch()
    const size = handlesize.Size

    const handleQuantity = (type)=>{ 
     if(type==="dec"){
      quantity > 1 && setQuantity(quantity - 1)
     }
     else{
        setQuantity(quantity + 1)
     }
    }
    useEffect(()=>{
        const getProduct = async()=>{
           await publicRequest.get("/product/find/"+id)
           .then((req)=>{
            setProduct(req.data)
            setColor(req.data.color)
           })
        }
        getProduct();
    },[id])

    const handleclick = ()=>{
        dispatch({type:'AddProduct',payload:{...product,quantity,size}});
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>
                    {product.desc}
                    </Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color </FilterTitle>
                            {color.map((color)=>{
                                return <FilterColor color={color}/> 
                            })}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e)=>setHandleSize({...handlesize,Size:e.target.value})}>
                             {handlesize.S.map((s)=>{
                                 return<FilterSizeOption>{s}</FilterSizeOption>
                             })}   
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=> handleQuantity('dec')} style={{cursor:'pointer'}}/>
                            <Amount>{quantity}</Amount>
                            <Add  onClick={()=>handleQuantity('inc')} style={{cursor:'pointer'}}/>
                        </AmountContainer>
                        <Button onClick={handleclick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product