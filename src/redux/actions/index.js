import { auth,provider,storage,db} from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import * as actions from "./actions"

import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export function SignInApi() {
   return (dispatch) =>{
     signInWithPopup(auth,provider).then((payload)=>{
        dispatch(actions.setUser(payload.user)) 
     }).catch((error)=>alert(error.message))

   }
}
export function getUserAuth() {
   // to change user acount  which stored in redux 
   return (dipatch) =>{
    auth.onAuthStateChanged(async(user)=>{
      if(user){
         dipatch(actions.setUser(user))
      }
    })
   }
}
export function SignOutApi() {
   return (dispatch) =>{
     signOut(auth,provider).then(()=>{
        dispatch(actions.setUser(null)) 
     }).catch((error)=>alert(error.message))

   }
}

export function postArticleAPI(payload) {
   return(dispatch)=>{
    dispatch(actions.setLoading(true));
    if(payload.image){
      // const storageRef = ref(storage);
       const SorageRef= ref(storage,`images/${payload.image.name}`);
       // to upload when  the image end when not provide enternet 
       const UploadRef= uploadBytesResumable(SorageRef,payload.image);
       // to change the image when want 
       UploadRef.on("state_changed",(snapshot)=>{
         const progress= Math.round(snapshot.bytesTransferred / snapshot.totalBytes) *100;
         // console.log("Upload is " + progress + "% done")
       },
       (error)=>
       {alert(error)},
       ()=> {
         // TO CONVERT image to url  from storage to db 

         getDownloadURL(UploadRef.snapshot.ref).then((downLoadUrl)=>{
            const colRef= collection(db,"articales");
            addDoc(colRef,{
               actor:{
                  description:payload.user.email,
                  title:payload.user.displayName,
                  date:payload.timestamp,
                  image:payload.user.photoURL
               },
               comments:0,
               video:payload.video,
               description:payload.description,
               shareImg:downLoadUrl
            })
         })
         dispatch(actions.setLoading(false));
       });

      
    }
    else if (payload.video){
      const colRef= collection(db,"articales");
      addDoc(colRef,{
         actor:{
            description:payload.user.email,
            title:payload.user.displayName,
            date:payload.timestamp,
            image:payload.user.photoURL
         },
         comments:0,
         video:payload.video,
         description:payload.description,
         shareImg:payload.image
      });
    dispatch(actions.setLoading(false));
    }
    else{
      const colRef= collection(db,"articales");
      addDoc(colRef,{
         actor:{
            description:payload.user.email,
            title:payload.user.displayName,
            date:payload.timestamp,
            image:payload.user.photoURL
         },
         comments:0,
         video:payload.video,
         description:payload.description,
         shareImg:payload.image
      }); 
      dispatch(actions.setLoading(false));
    }
   }
}

export function getArticalApi() {
   return(dispatch)=>{
      let payload;
      const colRef = collection(db,"articales");
      const orderRef=query(colRef,orderBy("actor.date","desc"));
      onSnapshot(orderRef, (snapshot)=>{
         payload=snapshot.docs.map((doc)=>doc.data());
         dispatch(actions.getArticales(payload));
      })

   }
   
}