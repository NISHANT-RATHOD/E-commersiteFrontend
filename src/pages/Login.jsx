import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const Container = styled.div`
     width: 100vw;
     height: 100vh;
     background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`

const Wrapper = styled.div`
     padding: 20px;
     width: 25%;
     background-color: white;
     ${mobile({width:'70%'})}
`
const Title = styled.h1`
     font-size: 24px;
     font-weight: 300;
`

const Form = styled.form`
     display: flex;
     flex-direction: column;
`


const Input = styled.input`
     flex: 1;
     min-width: 40%;
     margin: 10px 0;
     padding: 10px;

`

const Button = styled.button`
     width: 40%;
     border: 2px solid teal;
     padding: 14px 18px;
     background-color: teal;
     color: white;
     cursor: pointer;
     margin-top: 20px;
     margin-bottom: 10px;
     transition: all 0.3s ; 
     :hover{
          background-color: white;
          color: teal;
          font-weight: 700;
     }
`
// const Link = styled.a`
//      margin: 5px 0;
//      font-size: 12px;
//      text-decoration: underline;
//      cursor: pointer;
// `


const Login = () => {
  return (
    <Container>
            <Wrapper>
                <Title>LOG-IN</Title>
                <Form>
                    {/* <Input placeholder='username' />
                    <Input placeholder='password' /> */}
                    <TextField sx={{min_width:'40%',mt:2,mr:2,flexGrow: 1}} size='small' label="username" type={'text'}/>
                    <TextField sx={{min_width:'40%',mt:2,mr:2,flexGrow: 1}} id="outlined-error-helper-text" size='small' label="password" type={'text'} />      
                    <Link to={'/'}><Button>LOGIN</Button></Link>
                    <Link style={{color:'black',margin:'5px 0',fontSize:'12px',textDecoration:'underline',cursor:'pointer'}} >DO YOU NOT REMEMBER THE PASSWORD ?</Link>
                    <Link style={{color:'black',margin:'5px 0',fontSize:'12px',textDecoration:'underline',cursor:'pointer'}} to={'/register'}>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
  )
}

export default Login