import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { mobile } from '../responsive'
// import { useState } from 'react'
// import { useEffect } from 'react'


const Container = styled.div``

const Wrapper = styled.div`
   padding: 20px;
   ${mobile({padding:'10px'})}

`

const Title = styled.h1`
   font-weight: 300;
   text-align:center;
`

const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content:space-between;
   padding: 20px;
`
const TopButton = styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: ${props => props.type === 'filled' && 'none'};
   background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
   color: ${props => props.type === 'filled' && 'white'};
   transition: all 0.3s;
   :hover{
    background-color: black;
    color: white;
   }
`
const TopTexts = styled.div`
   ${mobile({display:'none'})}

`

const TopText = styled.span`
   text-decoration: underline;
   cursor: pointer;
   margin: 0 10px;
`

const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({flexDirection:'column'})}
`

const Info = styled.div`
   flex: 3;
`
const Product = styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({flexDirection:'column'})}
`
const ProductDetail = styled.div`
   display: flex;
   flex: 2;
`

const Image = styled.img`
   width: 200px;

`

const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span`
     ${mobile({display:'none'})}
`

const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;  
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:'5px 15px'})}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:'20px'})}
 
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
   flex: 1;
   border: 0.5px solid lightgray;
   border-radius: 10px;
   padding: 10px;
   height: 50vh;
`

const SummaryTitle = styled.h1`
   font-weight: 200;
`

const SummaryItem = styled.div`
   margin: 30px 0;
   display: flex;
   justify-content: space-between;
   font-weight: ${props=>props.type==='total'&& '500'};
   font-size: ${props=>props.type==='total'&& '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const CartEmpty = styled.h2`
   text-align: center;
   margin-top: 20px;
   font-weight: 200;
   ${mobile({marginBottom:'40dvh'})}
`
const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   cursor: pointer;
`
const RemoveButton = styled.button`
   width: 38%;
   margin-top: 20px;
   padding: 5px;
   border: 2px solid black;
   background-color: black;
   color: white;
   ${mobile({marginTop:'-1dvh',marginBottom:'7dvh'})}
   :hover{
    background-color: white;
    color: black;
    font-weight: 600;
   }
   cursor: pointer;
`
// Main Page Code 

const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const dispatch =  useDispatch();
    const removeproduct = (e,p)=>{
       dispatch({type:"RemoveProduct",payload:{Id:e,price:p}})
    }
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                   <Link to={'/'}><TopButton>CONTINUE SHOPPING</TopButton></Link>
                    <TopTexts>
                        <TopText>Shopping Bag({cart.products.length})</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product =>(<Product>
                            <ProductDetail>
                                <Image src={product.img} />
                                <Details>
                                    <ProductName><b>Product:</b> {product.title}</ProductName>
                                    <ProductId><b>ID:</b> {product._id}</ProductId>
                                    <ProductColor color={product.color} />
                                    <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    Quantity :
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                                <RemoveButton onClick={()=>removeproduct(product.Id,product.price*product.quantity)}>Remove</RemoveButton>
                            </PriceDetail>
                        </Product>))}
                        <Hr/>
                        {cart.quantity===0&&(<CartEmpty>Your Cart is Empty 😪.</CartEmpty>)}
                     </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.quantity==0?`${cart.total}.00`:cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice>{cart.quantity==0?'$ 0.00':'$ 5.90'}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>{cart.quantity==0?'$ 0.00':'$ 5.90'}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type= 'total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.quantity==0?`${cart.total}.00`:cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart