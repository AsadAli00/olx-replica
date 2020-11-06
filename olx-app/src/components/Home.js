import React, { Component } from 'react';
import { connect } from 'react-redux'
import { set_Data } from '../store/action';
import AddItem from './AddItem'
import appRibbon from '../images/app-ribbon.png'
import linkImg1 from '../images/link-img1.png'
import linkImg2 from '../images/link-img2.png'
class Home extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         list: [],
    //         loading: true

    //     }
    // }
    componentDidMount() {

        console.log(this.props);
        const list = this.props.list;
        const loading = this.props.loading;

        if (loading) {
            console.log("true");
            let _list = [];
            for (let i = 0; i < 12; i++) {
                _list.push(<AddItem key={i} placeholder={true} />)
            }
            this.props.set_Data(_list)
        }

    }
    render() {
        return (
            <React.Fragment>
                <div className="home-page">
                    <div className="ad-list flex jcc">
                        {this.props.list}
                    </div>
                    <button className="load-more fontr b anim s16">
                        Load More
                </button>
                </div>
                <div className="app-ribbon flex aic jcc">
                    <div className="img">
                        <img className="bl" src={appRibbon} alt="app-ribbon-img" />
                    </div>
                    <div className="meta">
                        <h2 className="title fontb s30 color"> TRY THE OLX APP</h2>
                        <h2 className="slogan fontr  s18 color">Buy, sell and find just about anything using the app on your mobile. </h2>
                    </div>
                    <div className="break"  />
                    <div className="links">
                        <h2 className="title fontr s20 b color">Get Your App Today</h2>
                        <div className="flex as">
                            <a href="#" className="noul bl"> <img src={linkImg1} alt="link-img-1" /></a>
                            <a href="#" className="noul  bl"> <img src={linkImg2} alt="link-img-1" /></a>
                        </div>
                    </div>
                </div>
            </React.Fragment>


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


export default connect(mapStateToProps, mapDispatchToMap)(Home);