import React from 'react'
import ReactHowler from 'react-howler'
import {useState , useEffect } from 'react'
// import music from '../audio/Naalayak-Zakir-Official-music-video-Hindi-Gaane.mp3'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Box = styled.div`
    height: 200px;
    width: 500px;
    justify-content: center;
    /* border: 1px solid black; */
    margin-top: 50px ;
    background-color: ${props=>props.color};
    z-index: 2;
`
const Small_Box = styled.div`
    height: 100px;
    width: 100px;
    color: black;
    font-size: medium;
    text-align: center;
    border-radius: 100%;
    padding: 35px 0;
    margin: 0 10px;
    background-color: red;
    position: relative;
    top: -10rem;
    box-sizing: border-box;
    z-index: ${props=>props.num};
`

const Input = styled.input`
    height: 20px;
    width: 150px;
    color:${props=>props.color};
    border: none;
    border-bottom: 1px solid black;
    border-color: ${props=>props.color};
    outline: none;
    margin: 20px 0;
    margin-left: 10px;
`
const Flex = styled.div`
    display: flex;
    color:${props=>props.color};
`
const Button = styled.button`
    cursor:pointer;
`
const Text = styled.h1`
    position: relative;
    font-size: 50px;
    font-family: 'Lucida Sans';
    font-weight: 900;
    margin:5rem 0 0 0;
    background: linear-gradient(90deg,#ff0000,#ffff00,#ff00f3,#0033ff,#ff00c4);
    background-size: 400%;
    letter-spacing: 5px;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: text 10s linear infinite;
    @keyframes text {
        0%{
            background-position: 0%;
        }
        100%{
            background-position:400%;
        }
    }
`



const RoughCode = () => {

const [color,setColor] = useState();
const [count,setCount] = useState(0);
const [add,setAdd] = useState(0);
const [flag2,setFlag2] = useState(true);
const [flag,setFlag] = useState(false);
const [num , setNum] = useState(1);
const [qrimg,setQrimg] = useState();
const [blob,setBlob] = useState();

useEffect(() => {
    // const intervalId = setInterval(() => {
    //     setCount(prevCount => prevCount==4?0:prevCount + 1)
    // }, 1000);
    const change = setInterval(() => {
        setAdd(prevAdd=>prevAdd==4?0:prevAdd + 1)
        setFlag2(flag2?false:true);
        setNum(flag2&&3);
    }, 1000);
    return () => clearInterval(change);
  }, []);

const GetLocation = () =>{
    navigator.geolocation.getCurrentPosition(position =>{
        const {latitude, longitude} = position.coords;
        console.log(latitude,longitude);
        const url = `http://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res => res.json()).then(data =>{
            console.table(data.address);
        }).catch( ()=>{
             console.log("error fetching data !!!")
            }
        )
    })
}

const GenrateQRCode = () =>{
    const qrcode =  `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${color}`;
    setQrimg(qrcode);
}

const DownloadQRCode = async()=>{
    const response = await fetch(qrimg);
    const blob = await response.blob();
    setBlob(URL.createObjectURL(blob));
}
const play = ()=>{
    setFlag(prevflag=>prevflag==false?true:false);
}

const boxcolor = (e) =>{
    const { value } = e.target;
    setColor(value);
}

  return (
      <Container>
        <Text>NISHANT RATHOD</Text>
        <Box  style={{border:'1px solid'}}><img src={qrimg}></img></Box>
        {/* <Box color={color} style={{opacity:0.6}}></Box> */}
        {/* <div style={{display:'flex'}}>
        <Small_Box  num={add==1?num:' '}>{add}</Small_Box>
        <Small_Box  num={add==3?num:' '} style={{backgroundColor:'yellow'}}></Small_Box>
        <Small_Box  num={add==5?num:' '} style={{backgroundColor:'lightgreen'}}></Small_Box>
        </div> */}
        <Flex color={color}><p style={{marginTop:'25px'}}>Color</p><Input type='input' color={color} onChange={boxcolor}/></Flex>
        <p style={{color:`${color}`}}>Enter Color in Input above</p>
        <p>{count}</p>
        {/* <ReactHowler src={music} playing={flag}/> */}
        <Button onClick={GenrateQRCode}>Genrate QR-Code</Button>
        <a href={blob} download='qrcode.jpg'><Button style={{marginTop:'10px',marginBottom:'10px'}} onClick={DownloadQRCode}>Download QR-Code</Button></a>
        <Button onClick={play}>Play Music</Button>
        <Button onClick={GetLocation} style={{marginTop:'10px'}}>Get Location</Button>
      </Container>
    )
}

export default RoughCode
