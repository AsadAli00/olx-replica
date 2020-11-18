const INITIAL_STATE = {
    isLoggedIn: false,
    isLoggedOut: false,
    authEmail: "",

}



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "Is_Logged":
            return ({
                ...state,
                isLoggedIn: [action.data]
            })
        case "Is_LoggedOut":
            return ({
                ...state,
                isLoggedOut: [action.data]
            })
        case "AuthEmail":
            return ({
                ...state,
                authEmail: [action.data]
            })
        default:
            return state
    }
}
