import  * as actions from"../redux/actions/actionType"
export const initialState={
loding:false,
articales:[]
}


const articalReducer = (state=initialState,action) => {
 switch(action.type){
    case actions.SET_LOADING_STATUS:
    return{
        ...state,
        loading:action.status
    };
    case actions.GET_ARTICELS:
        return{
            ...state,
            articales:action.payload
       };
    default:
        return state ;   

 }
}

export default articalReducer
