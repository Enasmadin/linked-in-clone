import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const PostModel = (props) => {
    const [editorText,setEditorText]=useState("");
    const [assetArea,setAssetArea]=useState("");
    const [shareImage,setShareImage]=useState("");
    const [videLink,setVideLink]=useState("");
    const handelChange = (e)=>{
        // to get the current image 
    const image = e.target.files[0];
    console.log(image);
    if(image === "" || image === undefined){
        alert(` not an image afile is a ${typeof image }`)
        return ;
    }
    else{
        setShareImage(image)
    }
    }
    const switchAssetArea = (area)=>{
        setShareImage("");
        setShareImage("");
        setAssetArea(area) ;
    };
    const reset =(e)=>{
        setEditorText("") 
        setAssetArea("") 
        setShareImage("")
        setVideLink("")
        props.handelClick(e);
    }
  
  return (
   <>
   {props.showModel && (
   <Container>
    <Content>
        <Header>
            <h2> create a post </h2>
            <button onClick={(e)=>reset(e)}>
                <img src="/images/close-icon.svg" alt=""/>
            </button>
        </Header>
        <ShareContent>
            <UserInfo>
            {props.User && props.User.photoURL? 
            (<img  src={ props.User.photoURL} />)
            :( <img src="images/user.svg" alt="" />)
            }
            <span> {props.user.displayName}</span> 
            </UserInfo>
            <Editor>
                <textarea 
                value={editorText}
                onChange={(e)=>setEditorText(e.target.value)}
                placeholder='what do you want to talk about ?'
                autoFocus={true}
                />
                { assetArea ==="image" ?
                    (
                      <UploadeImage>
                        <input type="file" name="image" id="file" style={{ display:"none" }}  onChange={handelChange} />
                        <p>
                            <label  style={{ 
                                cursor:"pointer",
                                display:"block",
                                marginBottom:"15PX"

                             }} htmlFor='file'>
                                Select an Image to share 
                            </label>
                        </p>
                        {shareImage && (<img src={URL.createObjectURL(shareImage)} alt="img"/>)} 
                      </UploadeImage>
                
                    )
                    :assetArea==="media" && (
                    <>
                      <input type="text" value={videLink} onChange={(e)=>setVideLink(e.target.value)} placeholder='Please input a video link'  style={{ width:"100%" ,height:"30px" }}/>
                      <ReactPlayer width="100%"   url={videLink} />
                   </>)
                }
            </Editor>
        </ShareContent>
        <ShareCreation>
            <AttachAssets>
                <AssetButton>
                    <img src="/images/share-image.svg" alt=""  onClick={()=>switchAssetArea("image")} />
                </AssetButton>
                    <AssetButton>
                   <img src="/images/share-video.svg" alt="" onClick={()=>switchAssetArea("media")}/>
                </AssetButton>
            </AttachAssets>
            <ShareComment>
                 <AssetButton>
                    <img src="/images/share-comment.svg" alt=""/>
                    Anayone
                </AssetButton> 
            </ShareComment>
            <PostButton disabled={!editorText?true:false}>
                post 
            </PostButton>

        </ShareCreation>
    </Content>
   </Container>)}
   </>
  )
}
const Container = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
 z-index:9999;
color:black;
  background-color:rgba(0,0,0,0.8);
 animation:fadeIn 0.3s ;

`
const Content =styled.div`
width:100%;
background-color:white;
max-width:552px;
max-height:99%;
overflow:initial;
border-radius:5px;
position:relative;
display:flex;
flex-direction:column;
top:32px;
margin:0 auto ;
button{
    border:none;
    display:flex;
    justify-content:center;
    transition:background 0.3s ease;
}
`
const Header = styled.div`
display:flex;
justify-content:space-between;
padding:16px 20px ;
border-bottom:1px solid rgba(0,0,0,0.15);
align-items:center;
h2{
    line-height:1.5;
    font-size:18px;
    font-weight:400;
    color:rgba(0,0,0,0.6);
}
button{
    height:40px;
    width:40px;
    min-width:
    color:rgba(0,0,0,0.15);
    background:none;
    border-radius:50%;
    cursor:pointer;
    &:hover{
      backgroun-color:rgba(0,0,0,0,08)  
    }
}
svg,img{
    pointer-events:none;
}
`
const ShareContent = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
over-flow:auto;
vertical-align:baseline;
background:transparent;
padding:8px 12px ;
`
const UserInfo = styled.div`
display:flex;
align-items:center;
padding:12px 24px ;
svg,img{
    width:48px;
    height:48px;
    border:2px solid transparent ;
    border-radius:50%;
    background-clip:content-box;

}
span{
    font-weight:600;
    line-height:1.5;
    font-size:16px;
    margin-left:5px;

}
`
const ShareCreation = styled.div`
display:flex;
justify-content:space-between;
padding:12px 24px 16px 16px;
height:30px;
`
const AssetButton = styled.button`
height:40px;
min-width:auto;
color:rgba(0,0,0,0.6);
font-weight:500;
font-size:14px;
background:none;
border-radius:50%;
cursor:pointer;
&:hover{
    background-color:rgba(0,0,0,0.08)
}
`
const AttachAssets = styled.div`
display:flex;
align-items:center;
padding-right:8px;
${AssetButton}{
    width:40px;
}
`
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  display: grid;
  place-items: center;
  ${AssetButton} {
    svg,
    img {
      margin-right: 5px;
    }
    padding: 10px;
    height: 30px;
    border-radius: 30px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
const PostButton= styled.button`
min-width:60px;
padding-left:16px;
padding-right:16px;
background:${(props)=>(props.disabled? "rgb(235,235,235)" :"#0a66c2")};
color:${(props)=> (props.disabled? "rgb(0,0,0,0.25)":"white")};
cursor:${(props)=>{props.disabled? "not-allowed" :"pointer"}};
font-weight:500;
font-size:16px;
border-radius:30px;
&:hover{
    background:${(props)=>{props.disabled? "" : "#004182"} }
}
`
const Editor = styled.div`
padding:12px 24px ;
textarea{
    width:100%;
    min-height:100px;
    resize:none;
    font-size:16px;
    font-weight:400;
    outline:none;
    border:none;
    line-height:1.5;
}
`
const UploadeImage = styled.div`
 text-align:center;
 img{
    width:100%;
 }
`
const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
    }
  }

export default connect (mapStateToProps)(PostModel) 
