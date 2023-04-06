import * as actions from"./actionType";

export const setUser =(payload)=>{
    return{
        type:actions.SET_USER,
        user:payload
    }
}

export const setLoading =(status)=>({

   type:actions.SET_LOADING_STATUS,
   status:status,
});

export const getArticales=(payload)=>({
    type:actions.GET_ARTICELS,
    payload:payload
})
