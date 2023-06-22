import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import { useEffect } from 'react';

const Container = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({height:'90vh'})}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && '10px'};
    right: ${props => props.direction === "right" && '10px'};
    margin: auto;
    opacity: 0.5;
    cursor: pointer;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * - 100}vw);
`
const Slide = styled.div` 
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
    ${mobile({flexDirection:'column'})}
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    ${mobile({height:'50%'})}
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${mobile({padding:'0px 50px'})}
`
const Title = styled.h1`
    font-size: 70px;
    ${mobile({fontSize:'45px'})}
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({fontSize:'15px',margin:'10px 0'})}
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    transition:all 0.5s ease;
    :hover{
        color: white;
        background-color: black;
    }
    ${mobile({color:'white',backgroundColor:'black'})}
`


const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (dir)=>{
      if(dir === 'left'){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
      }else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
      }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to="/products/all"><Button>Shop Now</Button></Link>
                    </InfoContainer>
                </Slide>
                    ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider