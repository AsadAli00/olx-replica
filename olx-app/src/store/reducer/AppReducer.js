const INITIAL_STATE = {
    list: [],
    loading: true,

    
}



export default (state = INITIAL_STATE,action) =>{
    console.log("app==>",action);
    switch (action.type){
        case "set_Data":
            return({
                ...state,
                list: [...state,action.data]
            })
        default:
            return state
    }
}

