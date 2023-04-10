import React from 'react';
import styled from 'styled-components'
import { SignOutApi } from '../redux/actions';
import { connect } from 'react-redux';

function Navbar(props) {
  return (
    <Container>
    <Content>
        <Logo>
            <a href='#home'>
              <img  src="images/home-logo.svg" alt=""/>
            </a>
        </Logo>
        <Search>
            <div>
            <input type="text" placeholder='search'/>
            <SearchIcon>
                <img src="images/search-icon.svg"/>
            </SearchIcon>
            </div>
        </Search>
        <Nav>
            <NavListWarp>
                <NavList className='active'>
                    <a>
                        <img src="/images/nav-home.svg" alt=""/>
                        <span> Home </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                        <img src="/images/nav-network.svg" alt=""/>
                        <span> My Network  </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                        <img src="/images/nav-jobs.svg" alt=""/>
                        <span> jobs  </span>
                    </a>
                </NavList> 
                <NavList>
                    <a>
                        <img src="/images/nav-messaging.svg" alt=""/>
                        <span> Messaging  </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                        <img src="/images/nav-notifications.svg" alt=""/>
                        <span> Notification  </span>
                    </a>
                </NavList>
                <User>
                    
                    <a>
                    {props.User && props.User.photoURL? (<img  src={ props.User.photoURL} />):( <img src="images/user.svg" alt="" />)} 
                        <span>
                            Me
                            <img src="images/down-icon.svg" alt=""/>
                        </span>
                    
                    </a>
                    <SignOut onClick ={()=> props.signOut()}>
                        <a> Sign Out</a>
                    </SignOut>
                   
                </User>
                <Work>
                    <a>
                        <img  src="images/nav-work.svg" alt=""/>
                        <span>
                            Work 
                            <img  src="images/down-icon.svg" />
                        </span>
                    </a>
                </Work>
            </NavListWarp>

        </Nav>
    </Content>
    </Container>
  )
}
const Container = styled.div`
background-color:white;
border-bottom:1px solod rgba(0,0,0,0.08);
left:0;
padding:0 24px ;
position:fixed;
top:0;
width:100vw;
z-index:100;
@media(max-width:768px){
    padding:15px;
}
`;
const Content = styled.div`
display:flex;
align-items:center;
margin:0 auto ;
min-height:100%;
max-width:1128px;
`;
const  Logo =styled.span`
margin-right:8px;
font-size:0px;
`;
const  Search = styled.div`
opacity:1;
flex-grow:1;
position:relative;
& > div {
    max-width:280px;
    input{
        border:none;
        box-shadow:none ;
        background-color:#eef3f8;
        border-raduis:2px;
        color:rgba(0,0,0,0.9);
        width:218px;
        padding:0 8px 0 40px ;
        font-weight:400;
        line-heigt:1.75;
        height:34px;
        border-color:#dce6f1;
        vertical-align:text-top;

    }
}
`;
const SearchIcon = styled.div`
position:absolute;
width:40px;
top:10px;
left:2px;
border-raduis:0 2px 2px 0 ;
margin:0;
pointer-events:none;
display:flex;
justify-content:center;
align-items:center;
`;
const Nav = styled.nav`
margin-left:auto;
display:block;
@media(max-width:768px){
    position:fixed;
    left:0;
    bottom:0;
    background:white;
    width:100%;
}
`;
const NavListWarp=styled.ul`
display:flex;
flex-warp:no-warp;
list-style-type:none;
.active{
    span:after{
        content:"";
        transform:scaleX(1);
        border-bottom:2px solid var(--white,#fff);
        bottom:0;
        left:0;
        position:absolute;
        transition:transform 0.2s ease-in-out;
        width:100%;
       border-color:rgba(0,0,0,0.9);
    }
}
`;
const NavList = styled.li`
 display:flex;
 align-items:center;
 a{
    align-items:center;
    background:transparent;
    display:flex;
    flex-direction:column;
    font-size:12px;
    font-weight:400;
    justify-content:center;
    min-height:52px;
    line-height:1.5;
    min-width:80px;
    position:relative;
    text-direction:none;
    span{
        color:rgba(0,0,0,0.6);
        display:flex;
        align-items:center;
    }
    @media(max-width:768px){
        min-width:70px;
    }
   
 }
 &:hover,&:active {
    a{
        span{
            color:rgba(0,0,0,0.9)
        }
    }
}
`;
const SignOut = styled(NavList)`
@media (max-width:767px){
    position: absoulate;
    top:-45px;
    right:15px;
    background:#eee;


}
position: absolute;
top:45px;
background:white;
border-raduis:0 0 5px 5px ;
width:100px;
height:40px;
font-size:16px;
transition-duration:167ms;
text-align:center;
display:none;
cursor:pointer;
`;
const User = styled(NavList)`

a > svg{
    width:24px;
    border-raduis:50%;
}
a>img {
    width:24px ;
    height:24px;
    border-radius:50%;

}
span{
    display:flex;
    aligin-items:center;

}
&:hover{
    ${SignOut}{
        align-items:center;
        display:flex;
         justify-content:center;
    }
}
`;

const Work = styled(User)`
 border-left:1px solid rgba(0,0,0,0.8);

@media(max-width:575px){
   display:none; 
}
`;

const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
    }
   
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(SignOutApi())
        
    }
  }

export default connect( mapStateToProps,mapDispatchToProps) (Navbar)
