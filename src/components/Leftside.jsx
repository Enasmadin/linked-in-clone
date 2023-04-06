import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

const Leftside = (props) => {
  return (
   <Container>
    <ArtCard>
      <UserInfo>
        <Carbackground/>
        <a>
          <Photo/>
           <Link>
           Welcome, {props.user ? props.user.displayName:"there!"}
          </Link>
        </a>
        <a>
          <AddphotoText> Add a photo </AddphotoText>
        </a>
      </UserInfo>
      <Widegt>
        <a>
          <div>
            <span> connection</span>
            <span> Grow Your network </span>
          </div>
          <img src="/images/widget-icon.svg" alt=""/>
        </a>
      </Widegt>
      <Item>
        <span>
          <img src="images/item-icon.svg" alt=""/>
          My Items 
        </span>
      </Item>
    </ArtCard>
    <ComunityCard>
      <a>
        <span>
          Events 
          <img src="images/plus-icon.svg" alt=""/>
        </span>
      </a>
      <a>
        <span> Follows Hastages </span>
      </a>
        <a>
        <span>Discover More  </span>
      </a>
    </ComunityCard>
   </Container>
  )
}
const Container = styled.div`
grid-area:leftside;
`;
const ArtCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-raduis:5px;
transition:box-shadow 83ms;
position:relative;
border:none;
box-shadow:0 0 0 1px rgb(0 0 0 / 15%) , 0 0 0 rgb(0 0 0 /20%)

` ;
const UserInfo = styled.div`
border-bottom:1px solid rgba(0,0,0,0.15);
padding:12px 12px 16px ;
word-warp:break-word;
`;
const Carbackground = styled.div`
background:url("/images/card-bg.svg");
background-position:center;
background-size:462px;
height:54px;
margin:-12px -12px 0 ;
`;
const Photo = styled.div`
box-shadow:none;
background-image:url("/images/photo.svg");
width:72px;
height:72px;
box-sizing:border-box;
background-clip:content-box;
background-color:white;
background-position:center;
background-size:60%;
background-repeat:no-repeat;
border:2px solid white ;
margin:-38px auto 12px ;
border-radius:50%;

`;
const Link = styled.div`
font-size:12px;
line-height:1.5;
color:rgba(0,0,0,0.9);
font-weight:600;
`;
const AddphotoText = styled.div`
color:#0a66c2;
margin-top:4px;
font-size:12px;
line-height:1.33;
font-weight:400;
`;
const Widegt = styled.div`
border-bottom:1px solid rgba(0,0,0,0.15);
padding-top:15px;
font-weight:600;
padding-bottom:16px;
& > a{
  text-decrotion:none;
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:4px 12px ;
   &:hover{
    background-color:rgba(0,0,0,0.08)
   }
   div{
    display:flex;
    flex-direction:column;
    text-align:left;
    span{
      font-size:12px;
      line-height:1.333;
      &:first-child{
        color:rgba(0,0,0,0.6);
      }
      &:nth-child(2){
        color:rgba(0,0,0,1)
      }
    }
   }
}
svg{
  color:rgba(0,0,0,1)
}
`
const Item = styled.a`
border-color:rgba(0,0,0,0.8);
text-align:left;
padding:12px;
font-weight:600;
font-size:16px;
display:block;
span{
  display:flex;
  align-items:center;
  color:rgba(0,0,0,1);
  svg{
    color:rgba(0,0,0,0.6)
  }
}
&:hover{
  background-color:rgba(0,0,0,0.8)
}
`
const ComunityCard=styled(ArtCard)`
font-weight:600;
padding:8px 0 0 ;
text-align:left;
display:flex;
flex-direction:column;
a{
  color:black;
  padding:4px 12px;
  font-size:12px;
  &:hover{
    color:#0a66c2;
  }
  span{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  &:last-child{
    color:rgba(0,0,0,0.6);
    text-decrotion:none;
    border-top: 1px solid #d6cec2;
    padding:12px;
    &:hover{
      background-color:rgba(0,0,0,0.08);
    }
  } 
}

`
const mapStateToProps=(state)=>{
  return{
      user:state.userState.user,
  }
 
}


export default   connect( mapStateToProps)(Leftside)
