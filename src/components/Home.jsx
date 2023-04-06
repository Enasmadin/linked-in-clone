import React from 'react'
import Leftside from './Leftside'
import Main from './Main'
import Rightside from './Rightside'
import styled from 'styled-components'

function Home() {
  return (
   <Container>
    <Section>
      <h5>
        <a href='#'> Hireing in a hurray ? -</a>
      </h5>
      <p>
        Find talnted pros in record time with upwork and keep busines moving.
      </p>
    </Section>
    <Layout>
      <Leftside/>
      <Main/>
      <Rightside/>
    </Layout>
   </Container>
  )
}
const Container =styled.div`
padding-top:52px;
max-width:100%;
`;
const Section = styled.section`
min-height:50px;
padding:16px 0 ;
box-sizing:content-box;
text-decoration:underline;
text-align:center;
display:flex;
justify-content:center;
h5{
  color:#0a66c2;
  font-size:15px;
  a{
    font-weight:700;
  }
}
p{
  font-size:14px;
  color:#434649;
  font-weight:600;
}
@media(max-width:768px){
  flex-direction:column;
  padding:15px 5px ;
}
`;
const  Layout = styled.div`
display:grid;
grid-template-areas:"leftside main rightside";
column-gap:25px;
row-gap:25px;
@media (max-width:768px){
  display:flex;
  flex-direction:column;
  padding:0 5px ;

}
`;

export default Home
