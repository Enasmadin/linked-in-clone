import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import PostModel from './PostModel';
import ReactPlayer from 'react-player';
import { getArticalApi } from '../redux/actions';

const Main = (props) => {
  const[showModel,setShowModel]=useState(false);
  const handelClick = ()=>{
    setShowModel(!showModel)
  } 
  // console.log(props.articales.length)

  useEffect(()=> {
    props.getArticales()
  },[])

  return (
    <Container>
      <SharBox>
        <div>
        {props.User && props.User.photoURL? (<img  src={ props.User.photoURL} />):( <img src="images/user.svg" alt="" />)}
         <button onClick={handelClick} disabled={props.loading? true : false }>
          start a post 
         </button>
        </div>
        <div>
          <button>
            <img  src="/images/photo-icon.svg" alt=""/>
            <span> Photo </span>
          </button>
          <button>
            <img  src="/images/video-icon.svg" alt=""/>
            <span> Video </span>
          </button>
          <button>
            <img  src="/images/event-icon.svg" alt=""/>
            <span> Event </span>
          </button>
          <button>
            <img  src="/images/article-icon.svg" alt=""/>
            <span> Write arical </span>
          </button>
        </div>
      </SharBox>
     
      {
        props.articales.length === 0? (<p>There are no articales </p>):(
          <Content>
            {props.loading && <img  src="/images/loader.svg" alt=""/> }
           
            { props.articales.length > 0 && props.articales.map((artical,index)=>(
             <Article key={index}>
              <ShareActor>
                <a>
                  <img  src={artical.actor.image}/>
                  <div>
                    <span> {artical.actor.title}</span>
                   <span> {artical.actor.description}</span>
                   <span> {artical.actor.date.toDate().toLocaleDateString()}</span>
                  </div>
                </a>
                <button>
                  <img  src="/images/ellipsis.svg"  alt=""/>
                </button>
              </ShareActor>
              <Describtion>
                {artical.description}
              </Describtion>
              <SharedImg>
                {!artical.shareImg && artical.video?(<ReactPlayer width="100%" url={artical.video}/>):(artical.shareImg && <img src={artical.shareImg} alt="shareimag" />)}
              </SharedImg>
              <SocialCounts>
                <li>
                <button>
                <img
                        src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss"
                        alt=""
                      />
                      <img
                        src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49"
                        alt=""
                      />
                  <span> 75 </span>
                </button>
                </li>
                <li>
                  <a> {artical.comments} comments </a>
                </li>
                <li>
                  <a> 1 share </a>
                </li>
              </SocialCounts>
              <SocialActions>
                <button>
                  <img  src="/images/like-icon.svg" alt=""/>
                  <span>Like </span>
                </button>
                <button>
                <img  src="/images/comment-icon.svg" alt=""/>
                <span>Comments </span>
                </button>
                <button>
                <img  src="/images/share-icon.svg" alt=""/>
                <span>Share </span>
                </button>
                <button>
                <img  src="/images/send-icon.svg" alt=""/>
                <span>Send </span>
                </button>
              </SocialActions>
             </Article>
            )) } 
          
          </Content>
        )
      }
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
    border-radius:5px;
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
    padding-bottom:4px;
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
const  Content = styled.div`
text-align:center;
a>img {
  width:70px; 
}
`;
const Article = styled(CommonCard) `
padding:0;
margin:0 0 8px;
overflow:visible;
`;
const ShareActor = styled.div`
flex-warp:nowrap;
padding:12px 16px 0 ;
margin-bottom:8px;
align-item:center;
display:flex;
a{
  margin-right:12px;
  flex-grow:1;
  overflow:hidden;
  display:flex;
  text-decoration:none;
  img
  {
    width:48px;
    height:48px;
    border-radius:50%;
  }
  & > div {
    display:flex;
    flex-direction:column;
    flex-grow:1;
    flex-basis:0;
    margin-left:8px;
    overflow:hidden;
    span{
      text-align:left;
      &:first-child{
        font-weight:700;
        font-size:14px;
        color:rgba(0,0,0,1)
      }
      &:nth-child(2),&:nth-child(3){
          font-size:12px;
          color:rgba(0,0,0,0.6);
      }
    }
  }
}
button{
  position:absoulate;
  top:0;
  right:12px;
  border:none;
  outline:none;
  background:transparent;
}
`
const Describtion = styled.div`
margin-top:8px;
width:100%;
display:block;
position:relative;
backgroundcolor:#f9fafb;
img{
  object-fit:contain;
  width:100%;
  height:100%;
}
`
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  diplay: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
line-height:1.3;
display:flex;
align-items:center;
overflow:auto;
margin:0 16px;
padding:8px 0 ;
border-bottom:1px solod #e9e5df;
list-style:none;
li{
  margin-right:5px;
  font-size:12px;
  button{
   display:flex;
   align-items:center;
   border:none;
   background-color: white ;

  }
}
`
const SocialActions = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
max-width:100%;
flex-wrap:wrap;
margin:0;
min-height:40px;
padding:4px 8px ;
button{
  display:inline-flex;
  align-items:center;
  padding:8px;
  border:none;
  color:rgba(0,0,0,0.6);
  border:none;
  cursor:pointer;
  border-radius:5px;
  background-color:white;
  transition:background o.3s ;
  width:calc(100% / 4);
  height:60px;
  justif-content:center;
  &:hover{
    background:rgba(0,0,0,0.08)
  }
  @media(min-width:768px){
    span{
      margin-left:8px;
      margin-top:3px;
      font-weight:800;

    }
  }

}
`
const mapStateToProps=(state)=>{
  return{
      user:state.userState.user,
      loading:state.articalState.loading,
      articales:state.articalState.articales
     
  }
 
}
const  mainDispatchToProps=(dispatch)=>{
  return{
    getArticales:()=> dispatch(getArticalApi())
  }

}

export default  connect (mapStateToProps,mainDispatchToProps) (Main)
