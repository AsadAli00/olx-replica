import React, { Component } from 'react';


class AddItem extends Component {

    static getDerivedStateFromProps(props, state){                //this is static function in this we don't use this. we use return
    
    return props;
  }
    render() {
        console.log(this.props);
        if ("placeholder" in this.props) {
            return (
                <div className="ad-item">
                    <div className="poster anim placeholder" />
                    <div className="title anim placeholder" />
                    <div className="tagline anim placeholder" />
                    <div className="ftr anim flex">
                        <div className="location anim placeholder" />
                        <div className="stamp anim placeholder" />
                    </div>
                </div>
            )
        }
        return (
            <div className="ad-item">

            </div>
        );
    }
}





export default AddItem;