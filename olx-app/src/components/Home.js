import React, { Component } from 'react';
import { connect } from 'react-redux'
import { set_Data } from '../store/action';
import AddItem from './AddItem'

class Home extends Component {
    
    // constructor(){
    //     super()
    //     this.state = {
    //         list: [],
    //         loading: true
            
    //     }
    // }
    componentDidMount(){
        const loading = this.props.loading
        console.log(this.props);
        if(loading){
            console.log("true");
            let DefaultList = [];
            for(let i=0; i< 12; i++ ){
                DefaultList.push(<AddItem placeholder={true} />)
            }
            
        }
        
    }
    render() {
       ;
        console.log(this.props);
        const list = this.props.list;
        
        // const list = this.props.list;
        // const loading = this.props.loading;

        // if(loading){
        //     console.log("true");
        //     let _list = [];
        //     for(let i=0; i< 12; i++ ){
        //         _list.push(<AddItem placeholder={true} />)
        //     }
        //    this.setState({
        //        list: [...this.state.list,_list]
        //    })
        // }
        
        return (  
            <div className="home-page">
              {list}
            </div>

        );
    }
}
 

const mapStateToProps = (state) => ({
    // email: state.auth.email,
    // userName: state.auth.userName,
    loading: state.app.loading,
    list: state.app.list
  })
  
  
  
  const mapDispatchToMap = (dispatch) => ({
    set_Data: (data) => dispatch(set_Data(data)),
  
  })
  
  
  export default connect(mapStateToProps,mapDispatchToMap)(Home);