const INITIAL_STATE = {
    list: [<p></p>],
    loading: true,
    redirect: null,
}


export default (state = INITIAL_STATE, action) => {
    console.log("app==>", action);
    switch (action.type) {
        case "set_Data":
            return ({
                ...state,
                list: [action.data]
            })
            case "RedirectClick":
            return ({
                ...state,
                redirect: [action.data]
            })
        default:
            return state
    }
}

