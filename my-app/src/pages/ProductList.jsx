import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { mobile } from '../responsive'
import { useLocation } from "react-router-dom"
import { useState } from 'react'

const Container = styled.div`
    overflow:hidden;
`

const Title = styled.h1`
   margin: 20px;
`

const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
`
const Filter = styled.div`
   margin: 20px;  
   ${mobile({width:'0 20px',display:'flex',flexDirection:'column'})}

`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:'0px'})}

`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:'12px 0'})}

`

const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("newest");
    const handlefilter =(e)=>{
       const value = e.target.value;
       setFilters({
        ...filters,
        [e.target.name]:value,
       })
    }
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat.toUpperCase()}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='color' onChange={handlefilter}>
                        <Option disabled>Color</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>gray</Option>
                        <Option>brown</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name='size' onChange={handlefilter}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value='newest'>Newest</Option>
                        <Option value='low'>Price (low)</Option>
                        <Option value='high'>Price (high)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters = {filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList