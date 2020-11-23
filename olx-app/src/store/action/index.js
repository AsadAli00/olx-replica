



const set_Data = (data) => {
    return (dispatch)=>{
        dispatch({type:"set_Data", data: data})
    }
}

const Is_Logged = (data)=>{
    return(dispatch)=>{
        dispatch({type:"Is_Logged",data: data})
    }
}
const Is_LoggedOut = (data)=>{
    return(dispatch)=>{
        dispatch({type:"Is_LoggedOut",data: data})
    }
}
const AuthEmail = (data)=>{
    return(dispatch)=>{
        dispatch({type:"AuthEmail",data: data})
    }
}
const AuthName = (data)=>{
    return(dispatch)=>{
        dispatch({type:"AuthName",data: data})
    }
}
const PhoneSignedIn = (data)=>{
    return(dispatch)=>{
        dispatch({type:"PhoneSignedIn",data: data})
    }
}
const RedirectClick = (data)=>{
    return(dispatch)=>{
        dispatch({type:"RedirectClick",data: data})
    }
}
// const set_Login = (data) => {
//     return(dispatch)=>{
//         dispatch({type:"set_Login",data: data})
//     }
// }

// const set_Phone = (data) => {
//     return(dispatch)=>{
//         dispatch({type:"set_Phone",data: data})
//     }
// }
// const set_Email = (data) => {
//     return(dispatch)=>{
//         dispatch({type:"set_Email",data: data})
//     }
// }

export{
    set_Data,
    Is_Logged,
    AuthEmail,
    Is_LoggedOut,
    AuthName,
    PhoneSignedIn,
    RedirectClick,
}