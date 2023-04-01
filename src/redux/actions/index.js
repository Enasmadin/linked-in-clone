import { auth,provider} from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import * as actions from "./actions"

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