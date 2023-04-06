import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import PostModel from './PostModel';

const Main = (props) => {
  const[showModel,setShowModel]=useState(false);
  const handelClick = ()=>{
    setShowModel(!showModel)
  } 
  return (
    <Container>
      <SharBox>
        <div>
        {props.User && props.User.photoURL? (<img  src={ props.User.photoURL} />):( <img src="images/user.svg" alt="" />)}
         <button onClick={handelClick} disabled={props.loading? true : false }>
          start a post 
         </button>
        </div>
      </SharBox>
      <Content></Content>
      <PostModel  showModel={showModel} handelClick={handelClick}/>

    </Container>

  )
}

const Container= styled.div`
grid-area:main
`
const CommonCard=styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
position:relative;
box-shadow:0 0 0 1px rgb(0 0 0 /15%) , 0 0 1px rgb(0 0 0 /20%);

`
const SharBox = styled(CommonCard)`
display:flex;
flex-direction:column;
color:#958b7b;
margin:0 0 8px ;
background:white;
div{
  button{
    outline:none;
    color:rgb(0,0,0.6);
    font-size:12px;
    line-height:1.5;
    min-height:48px;
    background:transparent;
    border:none;
    display:flex;
    align-items:center;
    font-weight:500;
    cursor:pointer;
    transition:background 0.3 ease ;
    border-raduis:5px;
    &:hover{
      background:rgba(0,0,0,0.08)
    }
  }
  &:first-child{
    display:flex;
    align-items:center;
    padding:8px 16px 8px 16px ;
    img{
      width:48px;
      border-radius:5px;
      margin-right:8px;
    }
    button{
      margin:4px 0 ;
      flex-grow:1;
      border-radius:35px;
      padding-left:16px;
      border:1px solid rgba(0,0,0,0.15);
      background:white;
      color:rgba(0,0,0,0.7);
      font-weight:500;
      font-size:14px;
      &:hover{
        background:rgba(0,0,0,0.08);
      }
      text-align:left;

    }
  }
  &:nth-child(2){
    display:flex;
    flex-warp:warp;
    justify-content:space-around;
    paddding-bottom:4px;
    button{
      img{
        margin:0 4px ;
      }
      span{
        color:#70b5f9;
        margin-top:2px;
      }
    }

  }
}
`
const  Content = styled.div``;


const mapStateToProps=(state)=>{
  return{
      user:state.userState.user,
      loading:state.articalState.loading
  }
 
}

export default  connect (mapStateToProps) (Main)
