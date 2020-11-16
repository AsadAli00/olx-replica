const INITIAL_STATE = {
    isLoggedIn: null 
}



export default (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case "Is_Logged":
            return ({
                ...state,
                isLoggedIn: [action.data]
            })
        default:
            return state
    }
}
