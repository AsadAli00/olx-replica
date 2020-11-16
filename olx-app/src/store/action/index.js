



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
}