const INITIAL_STATE = {
    userName: "Asad",
    email : "asadali111222@outlook.com"
    
}



export default (state = INITIAL_STATE,action) =>{
    console.log("auth==>",action);
    switch (action.type){
        case "set_Data":
            return({
                ...state,
                list: [...state,action.data]
            })
        default:
            return state
    }
    return state;
}
