// const INITIAL_STATE = {
//     list: [],
//     loding: true,

    
// }


// const AppReducer= (state = INITIAL_STATE) =>{
//     return state;
// }

// export default (state = INITIAL_STATE,action) =>{
//     console.log("app_action=>",action)
//     return state;
// }

// export default AppReducer;



import {combineReducers} from 'redux';
import AppReducer from './AppReducer'
import AuthReducer from './AuthReducer'


export default combineReducers({
    auth : AuthReducer,
    app : AppReducer
})