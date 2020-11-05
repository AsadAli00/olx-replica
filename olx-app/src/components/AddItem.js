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
                    <div className="poster placeholder" />
                    <div className="title placeholder" />
                    <div className="tagline placeholder" />
                    <div className="ftr flex">
                        <div className="Location placeholder" />
                        <div className="stamp placeholder" />
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