import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div`
     width: 100vw;
     height: 100vh;
     background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`

const Wrapper = styled.div`
     padding: 20px;
     width: 40%;
     background-color: white;
     ${mobile({width:'75%'})}
`
const Title = styled.h1`
     font-size: 24px;
     font-weight: 300;
`

const Form = styled.form`
     display: flex;
     flex-wrap:wrap;
`


// const Input = styled.input`
//      flex: 1;
//      min-width: 40%;
//      margin: 20px 10px 0px 0px;
//      padding: 10px;
//      font-size: 15px;
// `

const Agreement = styled.span`
     font-size: 12px;
     margin: 20px 0;
`

const Button = styled.button`
     width: 200%;
     font-size: 15px;
     border:2px solid teal;
     padding: 14px 18px;
     background-color: teal;
     color: white;
     cursor: pointer;
     transition: all 0.3s;
     :hover{
          background-color: white;
          color: teal;
          font-weight: 700;
     }
`

const Register = () => {
     const [flag,setFlag] = useState(false);
     const [name,setName] = useState();
     const NameValue =(e)=>{   
       setName(e.target.value); 
       setFlag(name=='blank'?true:false);
     }
     return (
        <Container>
            <Wrapper>
                <Title>CREATE ACCOUNT</Title>
                <Form>
                    {/* <Input placeholder='name' />
                    <Input placeholder='last name' />
                    <Input placeholder='usename' />
                    <Input placeholder='email' />
                    <Input placeholder='password' type={'password'} />
                    <Input placeholder='confirm password' type={'password'}/> */}
                    <TextField onChange={NameValue} error = {flag ? true : false}   sx={{min_width:'40%',mt:2,mr:2,flexGrow: 1}} size='small' label="name" type={'text'} helperText={flag?"(name already exist)":''}/>
                    <TextField sx={{min_width:'40%',mt:2,mr:2,flexGrow: 1}} size='small' label="surname" type={'text'}/>      
                    <TextField sx={{min_width:'40%',mt:2,mr:2,flexGrow: 1}} size='small' label="username" type={'text'}/>
                    <TextField sx={{min_width:'40%',mt:2,mr:2,flexGrow: 1}} size='small' label="email" type={'text'}/>
                    <TextField sx={{min_width:'40%',mt:2,mr:2,flexGrow: 1}} id="outlined-error-helper-text" size='small' label="password" type={'text'} />      
                    <TextField sx={{min_width:'40%',mt:2,mr:2,flexGrow: 1}} size='small' label="confirm password" type={'password'}/>      
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Link to={'/login'}><Button>CREATE</Button></Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register