import React, { useState } from 'react'
import styled from 'styled-components'; 
import ImageGenerator from './components/ImageGenerator';
import TextGenerator from './components/textGenerator';
export default function App() {
  const [loadContent,setLoadContent]=useState(false)
  return (
<>
    <Container>
      <div className="content">
        <div className="header">AI Powered Website</div>
        <div className="button">
      <button className='btn1' onClick={()=>setLoadContent(true)}>Image Generator</button>
      <button className='btn2' onClick={()=>setLoadContent(false)}>Text Generator</button>

        </div>
      </div>
      
    </Container>
      {loadContent && <ImageGenerator/>}
      {!loadContent && <TextGenerator/>}
</>
  )
}
const Container=styled.div`
margin:0;
padding:1rem;
background-color:rgba(0,0,0,0.7);
width:100vw;
padding-right:0rem;
top:0;
color:white;
.content{
  display: flex;
 
  flex-direction:row;
  justify-content:space-between;
  margin-right:3.5rem;
  .header{
    font-size:1.5rem;
    font-weight:700;
  }
  .button{
    margin-top:.3rem;
    .btn1{
      margin-right:4rem;
      border:none;
      padding:0.6rem;
      color:white;
      background-color:#121212;
      border-radius:0.3rem;
      font-size:1rem;
      cursor:pointer;
      &:active{
        color:black;
        background-color: white;
      }
    }  
    .btn2{
    cursor:pointer;
      border:none;
      padding:0.6rem;
      color:white;
      background-color:#121212;
      border-radius:0.3rem;
      font-size:1rem;
      &:active{
        color:black;
        background-color: white;
      }
    }  

  }
}
  
`;
