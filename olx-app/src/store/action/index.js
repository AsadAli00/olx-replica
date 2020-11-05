



const set_Data = (data) => {
    return (dispatch)=>{
        dispatch({type:"set_Data", data: data})
    }
}



export{
    set_Data
}