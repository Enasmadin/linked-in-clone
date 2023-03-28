import React from 'react';
import styled from "styled-components"

function Login() {
  return (
   <Container>
    <Nav>
        <a href='/index.html'>
           <img src="/images/login-logo.svg" alt=""/>
        </a>
        <div>
             <Join> Join now </Join>
            <SignIn> Sign IN  </SignIn>
        </div>
    </Nav>
    <Section>
        <Hero>
            <h1> Welcome to you Professional Comounity </h1>
            <img  src= "/images/login-hero.svg"/>
        </Hero>
        <Form>
            <Google>
                <img src='/images/google.svg' alt=""/>
                 sign in with Google 
            </Google>
        </Form>
    </Section>
   </Container>
  )
};
const Container = styled.div `
  padding:0px;
`;
const Nav = styled.nav`
 max-width:1128px;
 padding:12px 0 16px;
 display:flex;
 align-item:center;
 postion:relative;
 justify-content:space-between;
 flex-warp:no-warp;
 & > a {
    width:135px;
    height:35px;
    @media (max-width:768px){
        padding:0 5px ;
    }
 }
 & > div{
    display:flex
 }
`;
const  Join = styled.a`
font-size:16px;
// padding:10px 12px ;
// padding: 5px 24px ;
text-decrotion:none;
border-radius:4px;
color:rgba(0,0,0,0.6);
margin-right:12px;
text-align:center ;
line-height:40px;
padding: 5px 24px ;


&:hover{
    color:rgba(8,0,0,0.9);
    background-color:rgba(0,0,0,0.08);
    text-decrotion:none;
}
`;
const SignIn = styled.div`
box-shadow:inset 0 0 0 1px #0a66c2 ;
color:#0a66c2;
 border-radius:24px;
transition-duration:167ms;
font-size:16px;
font-weight:600;
line-height:40px;
padding: 5px 24px ;
text-align:center ;
background-color:rgba(0,0,0,0);
&:hover{
    background-color:rgba(112,181,294,0.15);
    color:#0a66c2;
    text-decrotion:none;
}

`;
const Section = styled.section `
disply:flex;
aliign-content:start;
min-height:700px;
padding-bottom:130px;
padding-top:40px;
padding:40px 0 ;
position:relative;
flex-warp:warp;
width:100%;
max-width:1128px;
margin:auto;
@media (max-width:768px){
    margin:auto;
    min-height:0px;
}
`;
const Hero = styled.div `
width:100%;
h1{
    padding-bottom:0;
    width:55%;
    font-size:56px;
    color:#2977c9;
    font-weight:200;
    line-height:70px;
    @media(max-width:768px){
     text-align:center;
     font-size:22px;
     width:100%;
     line-height:2;
    }  
}
img{
    width:700px;
    height:670px;
    position:absolute;
    bottom:-2px;
    right:-150px;
    @media (max-width:768px)
    {
        top:230px;
        width:initial;
        height:initial;
        position:initial;
    } 
 }   
` ;
const Form = styled.section `
margin-top:100px;
width:400px;
@media (max-width:768px){
    margin-top:20px;
}
`;
const Google = styled.button `
display:flex;
justify-content:center;
background-color:#fff;
height:56px;
align-items:center;
height:56px;
width:100%;
border-radius:28px;
box-shadow:inset 0 0 0 1px rgb(0 0 0 /60%),inset 0 0 0 2px rgb(0 0 0 /0%),inset 0 0 0 1px rgb(0 0 0 /60%);
z-index:0;
transition-duration:167ms;
font-size:20px;
vertical-align:middle;
color:rgba(0,0,0,0.6);
border: none;
&:hover{
    background-color:rgba(207,207,207,0.25);
    color:rgba(0,0,0,0.75)
}
& > img{
    margin-right:5px;
}


` ;

export default Login
