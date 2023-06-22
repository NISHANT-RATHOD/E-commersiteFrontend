import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
   position: fixed;
   top: 0;
   height:60px;
   width: 100%;
   background-color:white;
   ${mobile({height:'50px'})}
   z-index: 999;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  ${mobile({padding:'10px 0'})}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Laguage = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:'none'})}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({display:'none'})}
`
const SearchContainerMobile = styled.div`
  display: none;
  align-items: center;
  padding: 4px;
  margin-right:-5px;
  ${mobile({display:'flex'})}
`
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({width:'50px'})}
`


const Center = styled.div`
  flex: 1;
  ${mobile({marginLeft:'-8rem'})}
  text-align: center;
`;

const Logo = styled.h1`
text-decoration: none;
color: black;
font-weight: bold;
${mobile({fontSize:'17px'})}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2,justifyContent:'flex-end',marginRight:'10px'})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:'12px',marginLeft:'10px'})}
`

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const cart = useSelector(state=>state.cart);
  // console.log(cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Laguage>EN</Laguage>
          <SearchContainer>
          <Link to="/products/all"><Input placeholder='Search'/></Link>
            <Search style={{color:'gray',fontSize:'16px',cursor:'pointer'}}/>
          </SearchContainer>
        </Left>
        <Center><Logo><Link to={'/'} style={{textDecoration:'none',color:'black'}}>ITS-FASHION.</Link></Logo></Center>
        <Right>
          <MenuItem><Link to ={'/register'} style={{textDecoration:'none',color:'black'}} >REGISTER</Link></MenuItem>
          <MenuItem><Link to={'/login'} style={{textDecoration:'none',color:'black'}}>LOG IN</Link></MenuItem>
          <MenuItem>  
          <SearchContainerMobile>
            <Link to="/products/all"><Search style={{color:'black',fontSize:'1.5rem',cursor:'pointer'}}/></Link>
          </SearchContainerMobile>
          </MenuItem>
          <MenuItem>
          <Link to='/cart'>
            <Badge badgeContent={quantity} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar